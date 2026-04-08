src/
├── assets/ # Hình ảnh, icon, font, v.v.
├── components/ # CÁC UI COMPONENTS DÙNG CHUNG TOÀN APP (Button, Modal, Input, Spinner...)
│ ├── elements/
│ ├── layouts/
│ └── ui/
├── config/ # Cấu hình môi trường (ENV, constants dùng chung)
├── features/ # TRÁI TIM CỦA APP: Các tính năng cốt lõi
│ ├── auth/ # M1: Đăng nhập, Đăng ký, Profile
│ │ ├── api/ # Các hàm gọi API (login, register...)
│ │ ├── components/ # Components chỉ dùng riêng cho Auth (LoginForm, RegisterForm)
│ │ ├── hooks/ # Custom hooks của Auth (useAuth...)
│ │ ├── store/ # Zustand store cho Auth (nếu cần tách)
│ │ └── types/ # TypeScript interfaces cho Auth
│ ├── content-studio/ # M2: Tạo Quiz, Import CSV, AI Generate
│ ├── solo-learning/ # M3: Flashcard lật, Quiz, Thuật toán SRS
│ ├── multiplayer/ # M4: WebSocket, Lobby, Leaderboard realtime
│ └── dashboard/ # M6: Analytics, Progress, Chart
├── hooks/ # Global custom hooks (useWindowSize, useDebounce...)
├── lib/ # Cấu hình các thư viện bên thứ 3 (axios instance, react-query client, socket.io instance)
├── routes/ # Định nghĩa cấu trúc route tập trung
├── store/ # Global Zustand stores (ThemeState, AppState chung)
├── types/ # Global TypeScript types (User, QuizSet...)
├── utils/ # Helper functions (formatDate, srsAlgorithm.ts, calculateScore...)
├── App.tsx # Root component wrap các Providers (QueryClient, Router)
└── main.tsx # Entry point
