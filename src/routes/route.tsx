import { createBrowserRouter } from "react-router-dom";
// import { lazy, Suspense } from "react";

// Lazy load — chỉ tải code khi cần
// const Dashboard     = lazy(() => import('../features/dashboard/DashboardPage'))
// const LoginPage     = lazy(() => import('../features/auth/LoginPage'))
// const CreateQuiz    = lazy(() => import('../features/content-studio/CreateQuizPage'))
// const QuizPlay      = lazy(() => import('../features/solo-learning/QuizPlayPage'))
// const GameRoom      = lazy(() => import('../features/multiplayer/GameRoomPage'))

export const router = createBrowserRouter([
  // Public routes
  {
    path: "/",
    element: /*<PublicLayout />*/ <div>PublicLayout</div>,
    children: [
      { index: true, element: /*<LandingPage />*/ <div>LandingPage</div> },
      { path: "login", element: /*<LoginPage />*/ <div>LoginPage</div> },
      {
        path: "register",
        element: /*<RegisterPage />*/ <div>RegisterPage</div>,
      },
      {
        path: "join/:pin",
        element: /*<JoinGamePage />*/ <div>JoinGamePage</div>,
      }, // join bằng PIN
    ],
  },
  // Protected routes — cần đăng nhập
  {
    path: "/app",
    element: /*<ProtectedLayout />*/ <div>ProtectedLayout</div>,
    children: [
      { index: true, element: /*<Dashboard />*/ <div>Dashboard</div> },
      { path: "create", element: /*<CreateQuiz />*/ <div>CreateQuiz</div> },
      {
        path: "quiz/:id/edit",
        element: /*<EditQuizPage />*/ <div>EditQuizPage</div>,
      },
      { path: "quiz/:id/play", element: /*<QuizPlay />*/ <div>QuizPlay</div> },
      {
        path: "quiz/:id/host",
        element: /*<HostGamePage />*/ <div>HostGamePage</div>,
      },
      { path: "game/:pin", element: /*<GameRoom />*/ <div>GameRoom</div> },
      {
        path: "flashcards",
        element: /*<FlashcardPage />*/ <div>FlashcardPage</div>,
      },
      { path: "library", element: /*<LibraryPage />*/ <div>LibraryPage</div> },
      { path: "profile", element: /*<ProfilePage />*/ <div>ProfilePage</div> },
      {
        path: "settings",
        element: /*<SettingsPage />*/ <div>SettingsPage</div>,
      },
    ],
  },
]);
