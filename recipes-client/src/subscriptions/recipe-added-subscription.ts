import gql from 'graphql-tag';

export const RECIPE_ADDED_SUBSCRIPTION = gql`
  subscription RecipeAdded {
    recipeAdded {
      node {
        id
        title
      }
    }
  }
`;
