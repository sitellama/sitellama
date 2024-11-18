import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Services } from "../components/2-main/services";
import { Root } from "./root";
import { Contact } from "../components/2-main/contact";
import { Home } from "../components/2-main/home";
import { Blogs, Pricing, Error, PrivacyPolicy } from "@/components/2-main";
import { BlogPage } from "../components/5-blogs";
import { Portfolio } from "@/components/2-main/portfolio";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/services",
        element: <Services />,
    },
    {
        path: "/portfolio",
        element: <Portfolio />,
    },
    {
        path: "/pricing",
        element: <Pricing />,
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
    },
    // {
    //     path: "/blogs",
    //     element: <Blogs />,
    // },
    {
        path: "/contact",
        element: <Contact />,
    },
];

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        // errorElement: <Home />,
        children: routes,
    },
]);
