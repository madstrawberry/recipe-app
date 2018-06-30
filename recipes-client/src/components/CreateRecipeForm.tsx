import * as React from 'react';
import { CreateRecipeVariables } from '../generated';
import { RecipeCategory, RecipeType } from '../models/recipe-models';

interface Props {
  submitForm: (formData: CreateRecipeVariables) => void;
  isSubmitting: boolean;
}

interface State {
  title: string;
  ingredients: string;
  category: RecipeCategory[];
  description: string;
  formMessage: string;
  type: RecipeType | undefined;
}

class CreateRecipeForm extends React.Component<Props, State> {
  state: State = {
    title: '',
    ingredients: '',
    category: [],
    description: '',
    formMessage: '',
    type: undefined,
  };

  handleSubmit = () => {
    const { title, category, ingredients, description, type } = this.state;

    if (!title || !category.length || !ingredients || !type) {
      this.setState({ formMessage: 'Fill in all fields!' });
      return;
    }

    const formData = {
      title,
      category,
      ingredients: ingredients.split(',').filter(ingredient => ingredient !== ''),
      description,
      type,
    };

    this.props.submitForm(formData);

    this.setState({
      formMessage: '',
      title: '',
      ingredients: '',
      category: [],
      description: '',
      type: undefined,
    });
  };

  handleInput = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // @ts-ignore
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleCheckbox = (event: React.FormEvent<HTMLInputElement>) => {
    const fieldValue = event.currentTarget.value;
    const fieldName = event.currentTarget.name;

    const checked = !event.currentTarget.checked
      ? this.state[fieldName].filter((check: string) => check !== fieldValue)
      : [...this.state[fieldName], fieldValue];

    // @ts-ignore
    this.setState({ [fieldName]: checked });
  };

  handleRadio = (event: React.FormEvent<HTMLInputElement>) => {
    const fieldValue = event.currentTarget.value;
    const fieldName = event.currentTarget.name;

    // @ts-ignore
    this.setState({ [fieldName]: fieldValue });
  };

  render() {
    const {
      ingredients,
      title,
      description,
      category: selectedCategory,
      type: selectedType,
    } = this.state;
    return (
      <div>
        <div>
          Titel: <br />
          <input type="text" name="title" value={title} onChange={this.handleInput} />
        </div>
        <div>
          Beschrijving: <br />
          <textarea
            cols={30}
            rows={4}
            value={description}
            name="description"
            onChange={this.handleInput}
          />
        </div>
        <div>
          Ingredienten (komma gescheiden): <br />
          <input type="text" name="ingredients" value={ingredients} onChange={this.handleInput} />
        </div>
        <div>
          Categorie: <br />
          {Object.keys(RecipeCategory).map((category, index) => (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  onChange={this.handleCheckbox}
                  value={category}
                  checked={selectedCategory.includes(category as RecipeCategory)}
                />
                {RecipeCategory[category]}
              </label>
            </div>
          ))}
        </div>
        <div>
          Type: <br />
          {Object.keys(RecipeType).map((type, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  name="type"
                  onChange={this.handleRadio}
                  value={type}
                  checked={!!selectedType && selectedType === type}
                />
                {RecipeType[type]}
              </label>
            </div>
          ))}
        </div>
        <button disabled={this.props.isSubmitting} onClick={this.handleSubmit}>
          Submit
        </button>
        {this.state.formMessage && <span>{this.state.formMessage}</span>}
      </div>
    );
  }
}

export default CreateRecipeForm;
