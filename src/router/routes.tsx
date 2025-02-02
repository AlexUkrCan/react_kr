import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import AuthenteficationPage from "../pages/AuthenteficationPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";
import MainPage from "../pages/MainPage.tsx";


export const routs = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children:[
            {index:true, element:<MainPage/>},
            {path:'login', element:<AuthenteficationPage/>},
            {path:'auth/users', element:<UsersPage/>},
            {path:'auth/recipes', element:<RecipesPage/>},

        ]}
])