import * as React from 'react';
import RecipeList from './RecipeList';
import {
  AllRecipesQuery,
  recipeAddedSubscriptionPayload,
  ALL_RECIPES_QUERY,
} from '../queries/all-recipes-query';

interface Props {}

const AllRecipes: React.SFC<Props> = props => {
  return (
    <AllRecipesQuery query={ALL_RECIPES_QUERY}>
      {({ data, loading, error, subscribeToMore }) => {
        if (loading) {
          return <span>Is loading</span>;
        }

        if (error) {
          return <span>Error</span>;
        }

        return (
          <RecipeList
            allRecipes={data ? data.allRecipes : []}
            subscribeToAddedRecipes={() => subscribeToMore(recipeAddedSubscriptionPayload)}
          />
        );
      }}
    </AllRecipesQuery>
  );
};

export default AllRecipes;
