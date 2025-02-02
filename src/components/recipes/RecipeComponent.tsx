
import {FC} from "react";
import {IRecipes} from "../../models/recipes/IRecipes.ts";
import {useNavigate} from "react-router-dom";


type RecipeTypeProps={
    item:IRecipes
}

const RecipeComponent:FC<RecipeTypeProps> = ({item}) => {
    const navigation = useNavigate();

    const onButtonClickNavigateRecipe = ()  =>{
        navigation('/recipes/recipe')
    }

    return (
        <div>
            {item.name} {item.cuisine}  <button className={'border-2 bg-sky-700'} onClick={onButtonClickNavigateRecipe}>Show details</button>
        </div>
    );
};

export default RecipeComponent;