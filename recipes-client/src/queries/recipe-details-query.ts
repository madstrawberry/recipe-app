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

interface Data {
  recipe: RecipeDetails;
}

interface Variables {
  id: string;
}

export class RecipeDetailsQuery extends Query<Data, Variables> {}
