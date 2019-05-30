import styled from '../../styles/styled';

const IconButton = styled.button(() => ({
  border: 0,
  background: 'none',
  '> svg': {
    display: 'block',
  },
}));

export default IconButton;
