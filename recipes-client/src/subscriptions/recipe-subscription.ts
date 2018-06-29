import gql from 'graphql-tag';

export const RECIPE_SUBSCRIPTION = gql`
  subscription RecipeSubscription {
    recipeSubscription {
      mutation
      previousValues {
        id
      }
      node {
        id
        title
      }
    }
  }
`;
