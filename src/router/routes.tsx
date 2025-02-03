import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import AuthenteficationPage from "../pages/AuthenteficationPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";
import MainPage from "../pages/MainPage.tsx";
import ShowDetailsUsersPage from "../pages/ShowDetailsUsersPage.tsx";
import ShowDetailsRecipePage from "../pages/ShowDetailsRecipePage.tsx";
import SigninLayout from "../layouts/SigninLayout.tsx";


export const routs = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children:[
            {index:true, element:<MainPage/>},
            {path:'login', element:<AuthenteficationPage/>}
        ]},
            {path:'login/sign_in', element:<SigninLayout/>, children:[
    {path:'auth/users', element:<UsersPage/>},
    {path:'users/:id', element:<ShowDetailsUsersPage/>},
    {path:'auth/recipes', element:<RecipesPage/>},
    {path:'recipes/recipe', element:<ShowDetailsRecipePage/>},


         ]}


])