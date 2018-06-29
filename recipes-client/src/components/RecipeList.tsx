import * as React from 'react';
import Mutation from 'react-apollo/Mutation';
import Query from 'react-apollo/Query';
import RecipeDetails from './RecipeDetails';
import { DELETE_RECIPE_MUTATION } from '../mutations/delete-recipe-mutation';
import { RECIPE_DETAILS_QUERY } from '../queries/recipe-details-query';
import {
  AllRecipes,
  GetRecipe,
  GetRecipeVariables,
  DeleteRecipeVariables,
  DeleteRecipe,
} from '../generated';

interface Props {
  allRecipes: AllRecipes['allRecipes'];
  subscribeToRecipes: () => void;
}

interface State {
  toggledItems: string[];
}

class RecipeList extends React.Component<Props, State> {
  state: State = {
    toggledItems: [],
  };

  onToggle = (id: string) => () => {
    const toggledItems = this.state.toggledItems.includes(id)
      ? this.state.toggledItems.filter(item => item !== id)
      : this.state.toggledItems.concat(id);
    this.setState({ toggledItems });
  };

  componentDidMount() {
    this.props.subscribeToRecipes();
  }

  render() {
    return (
      <div>
        {this.props.allRecipes.map(recipe => (
          <div style={style} key={recipe.id}>
            {recipe.title}
            <button onClick={this.onToggle(recipe.id)}>Toggle</button>

            <Mutation<DeleteRecipe, DeleteRecipeVariables> mutation={DELETE_RECIPE_MUTATION}>
              {mutate => (
                <button
                  style={{ float: 'right' }}
                  onClick={() => mutate({ variables: { id: recipe.id } })}
                >
                  Delete
                </button>
              )}
            </Mutation>

            {this.state.toggledItems.includes(recipe.id) && (
              <Query<GetRecipe, GetRecipeVariables>
                query={RECIPE_DETAILS_QUERY}
                variables={{ id: recipe.id }}
              >
                {({ data, loading }) => {
                  if (loading) {
                    return <p>...loading</p>;
                  }

                  return data && data.recipe ? <RecipeDetails recipe={data.recipe} /> : null;
                }}
              </Query>
            )}
          </div>
        ))}
      </div>
    );
  }
}

const style = {
  border: '1px solid #ccc',
  padding: 10,
  margin: 10,
};

export default RecipeList;
