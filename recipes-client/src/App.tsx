import * as React from 'react';
import AddRecipeButton from './components/OpenRecipesButton';
import AllRecipes from './components/AllRecipes';
import RecipeFormModal from './components/RecipeFormModal';

interface State {
  isModalOpen: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    isModalOpen: false,
  };

  toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

  render() {
    return (
      <div>
        <h1>Alle Recepten</h1>
        <AllRecipes />

        <h2>Voeg Recept toe</h2>
        <AddRecipeButton onClick={this.toggleModal} />
        {this.state.isModalOpen && <RecipeFormModal onClickCloseModal={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
