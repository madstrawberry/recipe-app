import * as React from 'react';

interface Props {
  onClick: () => void;
}

const AddRecipeButton: React.SFC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>Voeg recept toe</button>;
};

export default AddRecipeButton;
