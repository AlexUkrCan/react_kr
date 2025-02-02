import {IRecipes} from "../../models/recipes/IRecipes.ts";
import {FC} from "react";

type RecipeTypeProps={
    recipe:IRecipes;
}
const ShowDetailRecipeComponent:FC<RecipeTypeProps> = ({recipe}) => {

    return (
        <div className={'font-bold'}>
            {recipe.name}      {recipe.tags}
        </div>
    );
};

export default ShowDetailRecipeComponent;