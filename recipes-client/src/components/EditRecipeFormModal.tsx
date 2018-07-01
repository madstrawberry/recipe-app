import * as React from 'react';
import Modal from './Modal';
import RecipeForm from './RecipeForm';
import { EDIT_RECIPE_MUTATION } from '../mutations/edit-recipe-mutation';
import { EDIT_RECIPE_QUERY } from '../queries/edit-recipe-query';
import { Mutation, Query } from 'react-apollo';
import {
  EditRecipe,
  EditRecipeVariables,
  GetEditRecipe,
  GetEditRecipeVariables,
} from '../generated';

interface Props {
  onClickCloseModal: () => void;
  recipeId: string;
}

class EditRecipeFormModal extends React.Component<Props> {
  render() {
    const { onClickCloseModal, recipeId } = this.props;

    return (
      <Modal onClickCloseModal={onClickCloseModal}>
        <Query<GetEditRecipe, GetEditRecipeVariables>
          query={EDIT_RECIPE_QUERY}
          variables={{ id: recipeId }}
        >
          {({ data, loading, error }) => {
            if (error) return 'Something went wrong';

            if (loading) return 'Loading...';

            return (
              <Mutation<EditRecipe, EditRecipeVariables> mutation={EDIT_RECIPE_MUTATION}>
                {(editRecipe, { loading, called }) => {
                  if (called) return 'Recipe has been edited!';

                  return (
                    <RecipeForm
                      initialData={data ? data.recipe : undefined}
                      submitForm={data => editRecipe({ variables: { id: recipeId, ...data } })}
                      isSubmitting={loading}
                    />
                  );
                }}
              </Mutation>
            );
          }}
        </Query>
      </Modal>
    );
  }
}

export default EditRecipeFormModal;
