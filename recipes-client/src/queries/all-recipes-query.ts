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

interface AllRecipesData {
  allRecipes: Recipe[];
}

export class AllRecipesQuery extends Query<AllRecipesData> {}
