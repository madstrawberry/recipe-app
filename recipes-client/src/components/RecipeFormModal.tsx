import * as Modal from 'react-modal';
import * as React from 'react';
import CreateRecipeForm from './CreateRecipeForm';
import { CREATE_RECIPE_MUTATION, CreateRecipeMutation } from '../mutations/create-recipe-mutation';

interface Props {
  onClickCloseModal: () => void;
}

class RecipeFormModal extends React.Component<Props> {
  render() {
    const { onClickCloseModal } = this.props;

    return (
      <Modal
        isOpen={true}
        onRequestClose={onClickCloseModal}
        contentLabel="Add recipe"
        style={modalStyle}
      >
        <CreateRecipeMutation mutation={CREATE_RECIPE_MUTATION}>
          {(mutate, { loading, error }) => {
            if (error) {
              return 'Something went wrong';
            }

            return (
              <CreateRecipeForm
                createRecipe={data => mutate({ variables: data })}
                isSubmitting={loading}
              />
            );
          }}
        </CreateRecipeMutation>
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
