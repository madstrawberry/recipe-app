import gql from 'graphql-tag';

export const EDIT_RECIPE_MUTATION = gql`
  mutation EditRecipe(
    $id: ID!
    $title: String!
    $description: String!
    $ingredients: [String!]!
    $type: RecipeType!
    $category: [RecipeCategory!]!
  ) {
    editRecipe(
      id: $id
      title: $title
      description: $description
      ingredients: { set: $ingredients }
      type: $type
      category: { set: $category }
    ) {
      id
      title
      description
      ingredients
      type
      category
    }
  }
`;
