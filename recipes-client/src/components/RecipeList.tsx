import * as React from 'react';
import RecipeDetails from './RecipeDetails';
import { Recipe } from '../models/recipe-models';
import { RECIPE_DETAILS_QUERY, RecipeDetailsQuery } from '../queries/recipe-details-query';

interface Props {
  allRecipes: Recipe[];
  subscribeToAddedRecipes: () => void;
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
    this.props.subscribeToAddedRecipes();
  }

  render() {
    return (
      <div>
        {this.props.allRecipes.map(recipe => (
          <div style={style} key={recipe.id}>
            {recipe.title} <button onClick={this.onToggle(recipe.id)}>Toggle</button>
            {this.state.toggledItems.includes(recipe.id) && (
              <RecipeDetailsQuery query={RECIPE_DETAILS_QUERY} variables={{ id: recipe.id }}>
                {({ data, loading }) => {
                  if (loading) {
                    return <p>...loading</p>;
                  }

                  return data ? <RecipeDetails recipe={data.recipe} /> : null;
                }}
              </RecipeDetailsQuery>
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
