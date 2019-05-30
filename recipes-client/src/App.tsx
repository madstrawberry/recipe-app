import * as React from 'react';
import AddRecipeFormModal from './components/AddRecipeFormModal';
import AllRecipes from './components/AllRecipes';
import Button from './components/common/Button';
import EditRecipeFormModal from './components/EditRecipeFormModal';
import styled from './styles/styled';
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
        <AddRecipeBlock>
          <Button primary inverted fullWidth onClick={this.toggleAddRecipeModal}>
            Voeg recept toe
          </Button>
        </AddRecipeBlock>

        <AllRecipes />

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

const AddRecipeBlock = styled.div(({ theme }) => ({
  background: theme.primary.main,
  padding: theme.gaps.sm,
}));

export default App;
