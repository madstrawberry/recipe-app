import gql from 'graphql-tag';
import { AllRecipes, MutationType, RecipeSubscription } from '../generated';
import { RECIPE_SUBSCRIPTION } from '../subscriptions/recipe-subscription';
import { SubscribeToMoreOptions } from 'apollo-client';

export const ALL_RECIPES_QUERY = gql`
  query AllRecipes {
    allRecipes {
      id
      title
    }
  }
`;

export const recipeSubscriptionPayload: SubscribeToMoreOptions = {
  document: RECIPE_SUBSCRIPTION,
  updateQuery: (
    prev: AllRecipes,
    { subscriptionData }: { subscriptionData: { data: RecipeSubscription } }
  ): AllRecipes => {
    const recipeSubscription = subscriptionData.data.recipeSubscription;
    if (!recipeSubscription) return prev;

    let allRecipes = null;

    if (recipeSubscription.mutation === MutationType.CREATED) {
      const addedRecipe = recipeSubscription.node;

      allRecipes = addedRecipe && [...prev.allRecipes, addedRecipe];
    }

    if (recipeSubscription.mutation === MutationType.DELETED) {
      const removedRecipe = recipeSubscription.previousValues;
      allRecipes =
        removedRecipe && prev.allRecipes.filter(recipe => recipe.id !== removedRecipe.id);
    }

    return !allRecipes ? prev : { allRecipes };
  },
};
