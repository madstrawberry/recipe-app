import styled from '../../styles/styled';

interface Props {
  primary?: boolean;
  secondary?: boolean;
}

const Button = styled.button<Props>(({ theme, primary, secondary }) => ({
  border: 0,
  borderRadius: 2,
  padding: theme.gaps.xs,
  textTransform: 'uppercase',
  fontWeight: theme.fontWeight.bold,
  boxShadow: '0 1px 0 rgba(0,0,0,0.2)',
  background: primary ? theme.primary.main : secondary ? theme.secondary.main : theme.grey[300],
  '&:hover': {
    background: primary ? theme.primary.dark : secondary ? theme.secondary.dark : theme.grey[400],
    cursor: 'pointer',
  },
  '& + &': {
    marginLeft: theme.gaps.xs,
  },
}));

export default Button;
