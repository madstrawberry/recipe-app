import * as Modal from 'react-modal';
import * as React from 'react';
import CreateRecipeForm from './CreateRecipeForm';
import { CREATE_RECIPE_MUTATION } from '../mutations/create-recipe-mutation';
import { CreateRecipe, CreateRecipeVariables } from '../generated';
import { Mutation } from 'react-apollo';

interface Props {
  onClickCloseModal: () => void;
}

class RecipeFormModal extends React.Component<Props> {
  render() {
    const { onClickCloseModal } = this.props;

    return (
      <Modal
        ariaHideApp={false}
        isOpen={true}
        onRequestClose={onClickCloseModal}
        contentLabel="Add recipe"
        style={modalStyle}
      >
        <Mutation<CreateRecipe, CreateRecipeVariables> mutation={CREATE_RECIPE_MUTATION}>
          {(createRecipe, { loading, error }) => {
            if (error) {
              return 'Something went wrong';
            }

            return (
              <CreateRecipeForm
                createRecipe={data => createRecipe({ variables: data })}
                isSubmitting={loading}
              />
            );
          }}
        </Mutation>
      </Modal>
    );
  }
}

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: 'rgba(0,0,0,0.4)',
  },
};

export default RecipeFormModal;
