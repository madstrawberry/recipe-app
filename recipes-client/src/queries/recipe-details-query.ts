import gql from 'graphql-tag';
import Query from 'react-apollo/Query';
import { RecipeDetails } from '../models/recipe-models';

export const RECIPE_DETAILS_QUERY = gql`
  query GetRecipe($id: ID) {
    recipe(id: $id) {
      category
      description
      image
      ingredients
      type
    }
  }
`;

interface RecipeDetailsData {
  recipe: RecipeDetails;
}

export class RecipeDetailsQuery extends Query<RecipeDetailsData, { id: string }> {}
