import gql from 'graphql-tag';

export const EDIT_RECIPE_QUERY = gql`
  query GetEditRecipe($id: ID!) {
    recipe(id: $id) {
      title
      description
      ingredients
      category
      type
    }
  }
`;
