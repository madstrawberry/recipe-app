import gql from 'graphql-tag';
import Query from 'react-apollo/Query';
import { Recipe } from '../models/recipe-models';
import {
  RECIPE_ADDED_SUBSCRIPTION,
  RecipeAddedSubscriptionData,
} from '../subscriptions/recipe-added-subscription';

export const ALL_RECIPES_QUERY = gql`
  query {
    allRecipes {
      id
      title
    }
  }
`;

interface Data {
  allRecipes: Recipe[];
}

export class AllRecipesQuery extends Query<Data> {}

export const recipeAddedSubscriptionPayload = {
  document: RECIPE_ADDED_SUBSCRIPTION,
  updateQuery: (prev: Data, { subscriptionData }: RecipeAddedSubscriptionData): Data => {
    const addedRecipeData = subscriptionData.data && subscriptionData.data.recipeAdded.node;

    return !addedRecipeData
      ? prev
      : {
          ...prev,
          allRecipes: [...prev.allRecipes, addedRecipeData],
        };
  },
};
