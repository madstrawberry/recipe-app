import gql from 'graphql-tag';
import Query from 'react-apollo/Query';
import { Recipe } from '../models/recipe-models';

export const ALL_RECIPES_QUERY = gql`
  query {
    allRecipes {
      id
      title
    }
  }
`;

interface Data {
  allRecipes: Recipe[];
}

export class AllRecipesQuery extends Query<Data> {}
