import gql from 'graphql-tag';

export const RECIPE_DETAILS_QUERY = gql`
  query GetRecipe($id: ID!) {
    recipe(id: $id) {
      category
      description
      image
      ingredients
      type
    }
  }
`;
