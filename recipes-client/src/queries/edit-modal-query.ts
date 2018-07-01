import gql from 'graphql-tag';

export const EDIT_MODAL_QUERY = gql`
  query EditModal {
    editModal @client {
      isEditModalOpen
      recipeId
    }
  }
`;
