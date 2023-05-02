import { createBrowserRouter } from "react-router-dom";
import MAinLayOut from "../Layouts/MainLayout/MAinLayOut";
import HomePage from "../Pages/HomePage/HomePage";
import MainChefRecipe from "../Pages/ChefsRecipe/MainChefRecipe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MAinLayOut></MAinLayOut>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: 'recipe/:id',
                element: <MainChefRecipe></MainChefRecipe>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)

            }
        ]
    }
])
export default router