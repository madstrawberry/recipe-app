import gql from 'graphql-tag';
import { Recipe } from '../models/recipe-models';

export const RECIPE_ADDED_SUBSCRIPTION = gql`
  subscription {
    recipeAdded {
      node {
        id
        title
      }
    }
  }
`;

export interface RecipeAddedSubscriptionData {
  subscriptionData: {
    data: {
      recipeAdded: {
        node: Recipe;
      };
    };
  };
}
