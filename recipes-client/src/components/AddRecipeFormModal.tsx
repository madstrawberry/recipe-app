import * as React from 'react';
import CreateRecipeForm from './CreateRecipeForm';
import Modal from './Modal';
import { ALL_RECIPES_QUERY } from '../queries/all-recipes-query';
import { AllRecipes, CreateRecipe, CreateRecipeVariables } from '../generated';
import { CREATE_RECIPE_MUTATION } from '../mutations/create-recipe-mutation';
import { Mutation } from 'react-apollo';

interface Props {
  onClickCloseModal: () => void;
}

class AddRecipeFormModal extends React.Component<Props> {
  render() {
    const { onClickCloseModal } = this.props;

    return (
      <Modal onClickCloseModal={onClickCloseModal}>
        <Mutation<CreateRecipe, CreateRecipeVariables>
          mutation={CREATE_RECIPE_MUTATION}
          update={(cache, { data }) => {
            if (!data) return;

            const allRecipesData = cache.readQuery<AllRecipes>({ query: ALL_RECIPES_QUERY });

            if (!allRecipesData) return;

            cache.writeQuery<AllRecipes>({
              query: ALL_RECIPES_QUERY,
              data: {
                allRecipes: allRecipesData.allRecipes.concat(data.createRecipe),
              },
            });
          }}
        >
          {(createRecipe, { loading, error, called }) => {
            if (error) {
              return 'Something went wrong';
            }

            if (called) {
              return 'Recipe has been added!';
            }

            return (
              <CreateRecipeForm
                submitForm={data => createRecipe({ variables: data })}
                isSubmitting={loading}
              />
            );
          }}
        </Mutation>
      </Modal>
    );
  }
}

export default AddRecipeFormModal;
