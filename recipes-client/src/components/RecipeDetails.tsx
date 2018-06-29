import * as React from 'react';
import { GetRecipe } from '../generated';

interface Props {
  recipe: GetRecipe['recipe'];
}

class RecipeDetails extends React.Component<Props> {
  render() {
    const {
      recipe: { description, ingredients, type },
    } = this.props;

    return (
      <div>
        Type: {type} <br />
        Beschrijving: <p>{description}</p> <br />
        Ingredienten:
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={`ingredient_${index}`}>{ingredient}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RecipeDetails;
