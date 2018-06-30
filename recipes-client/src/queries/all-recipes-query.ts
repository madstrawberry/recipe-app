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

export const recipeSubscriptionOptions: SubscribeToMoreOptions = {
  document: RECIPE_SUBSCRIPTION,
  updateQuery: (
    { allRecipes }: AllRecipes,
    { subscriptionData }: { subscriptionData: { data: RecipeSubscription } }
  ): AllRecipes => {
    const recipeSubscription = subscriptionData.data.recipeSubscription;
    const addedRecipe = recipeSubscription.node;
    const removedRecipe = recipeSubscription.previousValues;
    let updatedRecipes: AllRecipes['allRecipes'] | null = null;

    if (recipeSubscription.mutation === MutationType.CREATED && addedRecipe) {
      const isAlreadyThere = allRecipes.map(recipe => recipe.id).includes(addedRecipe.id);
      updatedRecipes = isAlreadyThere ? null : [...allRecipes, addedRecipe];
    }

    if (recipeSubscription.mutation === MutationType.DELETED && removedRecipe) {
      updatedRecipes = allRecipes.filter(recipe => recipe.id !== removedRecipe.id);
    }

    return { allRecipes: updatedRecipes ? updatedRecipes : allRecipes };
  },
};
