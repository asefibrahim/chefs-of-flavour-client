import { createBrowserRouter } from "react-router-dom";
import MAinLayOut from "../Layouts/MainLayout/MAinLayOut";
import HomePage from "../Pages/HomePage/HomePage";
import MainChefRecipe from "../Pages/ChefsRecipe/MainChefRecipe";
import Login from "../Pages/LoginPage/Login";
import SignUp from "../Pages/LoginPage/Signup";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/EroorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MAinLayOut></MAinLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,

            },
            {
                path: 'recipe/:id',
                element: <PrivateRoute><MainChefRecipe></MainChefRecipe></PrivateRoute>,
                loader: ({ params }) => fetch(`https://cheifes-of-flavour-server-strongman01666-gmailcom.vercel.app/chefs/${params.id}`)

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },

])
export default router