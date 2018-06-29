import gql from 'graphql-tag';
import { AllRecipes, RecipeAdded } from '../../generated';
import { RECIPE_ADDED_SUBSCRIPTION } from '../subscriptions/recipe-added-subscription';
import { SubscribeToMoreOptions } from 'apollo-client';

export const ALL_RECIPES_QUERY = gql`
  query AllRecipes {
    allRecipes {
      id
      title
    }
  }
`;

export const recipeAddedSubscriptionPayload: SubscribeToMoreOptions = {
  document: RECIPE_ADDED_SUBSCRIPTION,
  updateQuery: (
    prev: AllRecipes,
    { subscriptionData }: { subscriptionData: { data: RecipeAdded } }
  ) => {
    const addedRecipeData =
      subscriptionData.data &&
      subscriptionData.data.recipeAdded &&
      subscriptionData.data.recipeAdded.node;

    return !addedRecipeData
      ? prev
      : {
          ...prev,
          allRecipes: [...prev.allRecipes, addedRecipeData],
        };
  },
};
