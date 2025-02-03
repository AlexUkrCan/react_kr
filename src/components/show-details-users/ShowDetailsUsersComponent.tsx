import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ShowDetailUserComponent from "../show-detail-user/ShowDetailUserComponent.tsx";
import {loadAuthUsers} from "../../services/login-service/api-login.service.ts";
import {IUsers} from "../../models/users/IUsers.ts";



const ShowDetailsUsersComponent = () => {
   const{id} = useParams();

   const [user, setUsers] = useState<IUsers[]>();
    useEffect(() => {
        // .then(res => res.json())
        // .then(console.log);
        // fetch('https://dummyjson.com/recipes/' + id )
        //     .then(res => res.json())
        //  if(id){
        //  recipeService.getRecipesOfUsers(id)
        //         .then(({recipes}:IRecipesObject) =>{
        //              setRecipes(recipes);
        //
        //         });
        //  }
         loadAuthUsers().then(user =>
        {setUsers(user)})

}, [id]);
    return (
        <div>
            {

                user &&
                user.map(user=><ShowDetailUserComponent key={user.id} user={user}/>)
            }

        </div>
    );
};

export default ShowDetailsUsersComponent;