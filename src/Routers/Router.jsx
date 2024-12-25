import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
{
   path: "/",
   element: <RootLayout></RootLayout>,
   children: [
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/about",
        element: <About></About>
    },
    {
        path: "/services",
        element: <Services></Services>
    },
    {
        path: "/blogs",
        element: <Blogs></Blogs>
    },
    {
        path: "/contact",
        element: <Contact></Contact>
    },
   ] 
}
])

export default router;