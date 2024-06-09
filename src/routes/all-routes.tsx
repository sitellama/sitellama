import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Services } from "../components/2-main/services";
import { Root } from "./root";
// import { About } from "@/components/2-main/about/about";
import { Contact } from "../components/2-main/contact";
import { Home } from "../components/2-main/home";
import { Pricing } from "@/components/2-main";
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
        path: "/contact",
        element: <Contact />,
    },
];

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // errorElement: <ErrorPage />,
        errorElement: <Home />,
        children: routes,
    },
]);
