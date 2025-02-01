
import {FC} from "react";
import {IRecipes} from "../../models/recipes/IRecipes.ts";


type RecipeTypeProps={
    item:IRecipes
}

const RecipeComponent:FC<RecipeTypeProps> = ({item}) => {

    return (
        <div>
            {item.name} {item.cuisine}
        </div>
    );
};

export default RecipeComponent;