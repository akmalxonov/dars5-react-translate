import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import MainLayout from "../components/main-layout";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);
