import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import AuthenteficationPage from "../pages/AuthenteficationPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";

export const routs = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children:[
            {path:'auth', element:<AuthenteficationPage/>},
            {path:'users', element:<UsersPage/>},
            {path:'recipes', element:<RecipesPage/>},

        ]}
])