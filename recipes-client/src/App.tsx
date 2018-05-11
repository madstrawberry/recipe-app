import * as React from 'react';
import CreateRecipeForm from './components/CreateRecipeForm';
import RecipeList from './components/RecipeList';
import { ALL_RECIPES_QUERY, AllRecipesQuery } from './queries/all-recipes-query';
import { CREATE_RECIPE_MUTATION, CreateRecipeMutation } from './mutations/create-recipe-mutation';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Alle Recepten</h1>
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

        <h2>Voeg Recept toe</h2>
        <CreateRecipeMutation mutation={CREATE_RECIPE_MUTATION}>
          {(mutate, { loading, error, called }) => {
            if (error) {
              return 'Something went wrong';
            }

            return (
              <CreateRecipeForm
                createRecipe={data => mutate({ variables: data })}
                isSubmitting={loading}
              />
            );
          }}
        </CreateRecipeMutation>
      </div>
    );
  }
}

export default App;
