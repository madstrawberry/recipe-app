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
    { allRecipes }: AllRecipes,
    { subscriptionData }: { subscriptionData: { data: RecipeSubscription } }
  ): AllRecipes => {
    const recipeSubscription = subscriptionData.data.recipeSubscription;
    let updatedRecipes = null;

    if (recipeSubscription.mutation === MutationType.CREATED) {
      const addedRecipe = recipeSubscription.node;

      if (addedRecipe) {
        const isAlreadyThere = allRecipes.map(recipe => recipe.id).includes(addedRecipe.id);
        updatedRecipes = !isAlreadyThere ? [...allRecipes, addedRecipe] : null;
      }
    }

    if (recipeSubscription.mutation === MutationType.DELETED) {
      const removedRecipe = recipeSubscription.previousValues;
      updatedRecipes = removedRecipe
        ? allRecipes.filter(recipe => recipe.id !== removedRecipe.id)
        : null;
    }

    return { allRecipes: updatedRecipes ? updatedRecipes : allRecipes };
  },
};
