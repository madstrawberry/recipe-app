import * as React from 'react';
import { RecipeDetails as RecipeDetailsType } from '../models/recipe-models';

interface Props {
  recipe: RecipeDetailsType;
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
