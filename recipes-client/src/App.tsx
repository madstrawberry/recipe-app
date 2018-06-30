import * as React from 'react';
import AddRecipeButton from './components/OpenRecipesButton';
import AddRecipeFormModal from './components/AddRecipeFormModal';
import AllRecipes from './components/AllRecipes';

interface State {
  isAddRecipeModalOpen: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    isAddRecipeModalOpen: false,
  };

  toggleModal = () => this.setState({ isAddRecipeModalOpen: !this.state.isAddRecipeModalOpen });

  render() {
    return (
      <div>
        <h1>Alle Recepten</h1>
        <AllRecipes />

        <h2>Voeg Recept toe</h2>
        <AddRecipeButton onClick={this.toggleModal} />
        {this.state.isAddRecipeModalOpen && (
          <AddRecipeFormModal onClickCloseModal={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
