import * as React from 'react';
import Query from 'react-apollo/Query';
import RecipeList from './RecipeList';
import { ALL_RECIPES_QUERY, recipeSubscriptionOptions } from '../queries/all-recipes-query';
import { AllRecipes } from '../generated';

interface Props {}

const AllRecipesComponent: React.SFC<Props> = props => {
  return (
    <Query<AllRecipes> query={ALL_RECIPES_QUERY}>
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
            subscribeToRecipes={() => subscribeToMore(recipeSubscriptionOptions)}
          />
        );
      }}
    </Query>
  );
};

export default AllRecipesComponent;
