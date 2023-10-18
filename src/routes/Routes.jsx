import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/LoginPage/RegistrationPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        },
        {
            path: "login",
            element: <LoginPage />,
        },
        {
            path: "register",
            element: <RegistrationPage />,
        }
    ],
  },
]);
