import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import NotificationsPage from "./pages/Notifications";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/notifications',
    element: <NotificationsPage />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
