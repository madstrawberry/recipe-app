import * as React from 'react';
import RecipeList from './components/RecipeList';
import { AllRecipesQuery, ALL_RECIPES_QUERY } from './queries/all-recipes-query';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Recipes</h1>
        <AllRecipesQuery query={ALL_RECIPES_QUERY}>
          {({ data, loading, error }) => {
            if (loading) {
              return <span>Is loading</span>;
            }

            if (error) {
              return <span>Error</span>;
            }

            return <RecipeList allRecipes={data ? data.allRecipes : []} />;
          }}
        </AllRecipesQuery>
      </div>
    );
  }
}

export default App;
