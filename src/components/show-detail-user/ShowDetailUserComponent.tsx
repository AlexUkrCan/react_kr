
import {IRecipes} from "../../models/recipes/IRecipes.ts";
import {FC} from "react";

type RecipeTypeProps={
    recipe:IRecipes;
}
const ShowDetailUserComponent:FC<RecipeTypeProps> = ({recipe}) => {

    return (
        <div>
            {recipe.name}
        </div>
    );
};

export default ShowDetailUserComponent;