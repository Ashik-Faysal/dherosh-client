import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/LoginPage/RegistrationPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import ContactPage from "../pages/ContactPage/ContactPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
      },
      {
        path: "services-sections",
        element: <ServicesPage />,
      },
      {
        path: "about",
        element: <AboutUsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);
