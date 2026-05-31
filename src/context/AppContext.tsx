import { createContext, useContext, useState, type ReactNode } from "react";
import { type Question, MOCK_QUESTIONS } from "@/data/question";

export type UserRole = "user" | "admin";

export type User = {
  name: string;
  email: string;
  role: UserRole;
};

export type FlashcardSet = {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  createdBy?: string;
  createdAt?: Date;
};

const DEFAULT_SETS: FlashcardSet[] = [
  {
    id: "default-1",
    title: "General Knowledge",
    description: "A quick test of your worldly wisdom.",
    questions: MOCK_QUESTIONS,
    createdBy: "system",
    createdAt: new Date("2026-05-01"),
  },
];

// Mock users database
const USERS_DB = [
  { email: "admin@gmail.com", password: "admin", name: "Administrator", role: "admin" as UserRole },
  { email: "user@example.com", password: "user", name: "Demo User", role: "user" as UserRole },
];

interface AppContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  sets: FlashcardSet[];
  addSet: (set: FlashcardSet) => void;
  deleteSet: (setId: string) => void;
  hasSeenOnboarding: boolean;
  completeOnboarding: () => void;
  getAllUsers: () => Omit<User, "password">[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [sets, setSets] = useState<FlashcardSet[]>(DEFAULT_SETS);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);

  const login = (email: string, password: string): boolean => {
    const foundUser = USERS_DB.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setUser({ name: foundUser.name, email: foundUser.email, role: foundUser.role });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const addSet = (set: FlashcardSet) => {
    const newSet = {
      ...set,
      createdBy: user?.email || "anonymous",
      createdAt: new Date(),
    };
    setSets((prev) => [...prev, newSet]);
  };

  const deleteSet = (setId: string) => {
    setSets((prev) => prev.filter((s) => s.id !== setId));
  };

  const completeOnboarding = () => setHasSeenOnboarding(true);

  const getAllUsers = () => {
    return USERS_DB.map(({ email, name, role }) => ({ email, name, role }));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        sets,
        addSet,
        deleteSet,
        hasSeenOnboarding,
        completeOnboarding,
        getAllUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
