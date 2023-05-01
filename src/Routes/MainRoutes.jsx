import { createBrowserRouter } from "react-router-dom";
import MAinLayOut from "../Layouts/MainLayout/MAinLayOut";
import HomePage from "../Pages/HomePage/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MAinLayOut></MAinLayOut>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            }
        ]
    }
])
export default router