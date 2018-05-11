import gql from 'graphql-tag';
import Mutation from 'react-apollo/Mutation';
import { CreateRecipeFormData } from './../models/recipe-form-models';

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
    }
  }
`;

interface Data {
  id: string;
}

export class CreateRecipeMutation extends Mutation<Data, CreateRecipeFormData> {}
