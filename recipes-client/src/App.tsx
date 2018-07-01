import * as React from 'react';
import AddRecipeButton from './components/OpenRecipesButton';
import AddRecipeFormModal from './components/AddRecipeFormModal';
import AllRecipes from './components/AllRecipes';
import EditRecipeFormModal from './components/EditRecipeFormModal';
import { ClientState } from './apolloClientSetup';
import { EDIT_MODAL_QUERY } from './queries/edit-modal-query';
import { EditModal } from './generated';
import { Query } from 'react-apollo';

interface State {
  isAddRecipeModalOpen: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    isAddRecipeModalOpen: false,
  };

  toggleAddRecipeModal = () =>
    this.setState({ isAddRecipeModalOpen: !this.state.isAddRecipeModalOpen });

  render() {
    return (
      <div>
        <h1>Alle Recepten</h1>
        <AllRecipes />

        <h2>Voeg Recept toe</h2>
        <AddRecipeButton onClick={this.toggleAddRecipeModal} />
        {this.state.isAddRecipeModalOpen && (
          <AddRecipeFormModal onClickCloseModal={this.toggleAddRecipeModal} />
        )}
        <Query<EditModal> query={EDIT_MODAL_QUERY}>
          {({ data, client }) =>
            data &&
            data.editModal.isEditModalOpen && (
              <EditRecipeFormModal
                recipeId={data.editModal.recipeId}
                onClickCloseModal={() =>
                  client.writeData<Partial<ClientState>>({
                    data: {
                      editModal: {
                        isEditModalOpen: false,
                        recipeId: null,
                        __typename: 'editModal',
                      },
                    },
                  })
                }
              />
            )
          }
        </Query>
      </div>
    );
  }
}

export default App;
