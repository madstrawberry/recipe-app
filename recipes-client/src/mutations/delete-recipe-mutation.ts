import gql from 'graphql-tag';
import { ALL_RECIPES_QUERY } from '../queries/all-recipes-query';
import { AllRecipes, DeleteRecipe } from '../generated';
import { MutationUpdaterFn } from 'apollo-client';

export const DELETE_RECIPE_MUTATION = gql`
  mutation DeleteRecipe($id: ID!) {
    deleteRecipe(id: $id) {
      id
    }
  }
`;

export const deleteRecipeUpdate: MutationUpdaterFn<DeleteRecipe> = (cache, { data }) => {
  if (!data) return;

  const allRecipesData = cache.readQuery<AllRecipes>({
    query: ALL_RECIPES_QUERY,
  });

  if (!allRecipesData) return;

  cache.writeQuery<AllRecipes>({
    query: ALL_RECIPES_QUERY,
    data: {
      allRecipes: allRecipesData.allRecipes.filter(rec => rec.id !== data.deleteRecipe.id),
    },
  });
};
