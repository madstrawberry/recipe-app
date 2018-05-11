import * as React from 'react';
import { Recipe } from '../models/recipe-models';

interface Props {
  allRecipes: Recipe[];
}

const RecipeList = ({ allRecipes }: Props) => {
  return <div> {allRecipes.map(recipe => <div key={recipe.id}>{recipe.title}</div>)} </div>;
};

export default RecipeList;
