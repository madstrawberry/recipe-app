import gql from 'graphql-tag';

export const CREATE_RECIPE_MUTATION = gql`
  mutation CreateRecipe(
    $title: String!
    $description: String!
    $ingredients: [String!]!
    $type: RecipeType!
    $category: [RecipeCategory!]!
  ) {
    createRecipe(
      title: $title
      description: $description
      ingredients: { set: $ingredients }
      type: $type
      category: { set: $category }
    ) {
      id
      title
    }
  }
`;
