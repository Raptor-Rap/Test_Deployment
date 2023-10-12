import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";

import Homepage from "../pages/homepage/index";
import Destinasi from "../pages/destinasi/index";
import Testimonial from "../pages/testimonial/index";
import Faq from "../pages/faq/index";
import Syarat from "../pages/syarat/index";
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/signup";
import AddDestination from "../pages/destinasi/addDestination";
import ScrollToTop from "../components/scroll";
import { setAxiosConfig } from "../utils/api/axiosWithConfig";
// import { useToken } from "../utils/token-context";

export default function Router() {
  // const { token } = useToken();

  useEffect(() => {
    setAxiosConfig("", "http://localhost:3000");
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
          <Homepage />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <ScrollToTop />
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <ScrollToTop />
          <SignUp />
        </>
      ),
    },
    {
      path: "/destinasi",
      element: (
        <>
          <ScrollToTop />
          <Destinasi />
        </>
      ),
    },
    {
      path: "/adddestination",
      element: (
        <>
          <ScrollToTop />
          <AddDestination />
        </>
      ),
    },
    {
      path: "/testimonial",
      element: (
        <>
          <ScrollToTop />
          <Testimonial />
        </>
      ),
    },
    {
      path: "/faq",
      element: (
        <>
          <ScrollToTop />
          <Faq />
        </>
      ),
    },
    {
      path: "/syarat",
      element: (
        <>
          <ScrollToTop />
          <Syarat />
        </>
      ),
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
