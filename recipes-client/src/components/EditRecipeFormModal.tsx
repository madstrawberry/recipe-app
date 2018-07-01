import * as React from 'react';
import Modal from './Modal';

interface Props {
  onClickCloseModal: () => void;
  recipeId: string;
}

class EditRecipeFormModal extends React.Component<Props> {
  render() {
    const { onClickCloseModal } = this.props;

    return <Modal onClickCloseModal={onClickCloseModal}>{this.props.recipeId}</Modal>;
  }
}

export default EditRecipeFormModal;
