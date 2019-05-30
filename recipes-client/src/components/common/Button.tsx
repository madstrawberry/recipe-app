import styled from '../../styles/styled';
import { darken } from 'polished';
import { Theme } from '../../styles/theme';

interface Props {
  primary?: boolean;
  secondary?: boolean;
  inverted?: boolean;
  fullWidth?: boolean;
  small?: boolean;
}

const Button = styled.button<Props>(
  ({ theme, primary, secondary, inverted, fullWidth, small }) => ({
    border: 0,
    borderRadius: 2,
    padding: small ? theme.gaps.xs : theme.gaps.sm,
    textTransform: 'uppercase',
    color: inverted ? theme.text.inverted : theme.text.main,
    fontWeight: theme.fontWeight.bold,
    boxShadow: '0 1px 0 rgba(0,0,0,0.2)',
    width: fullWidth ? '100%' : 'inherit',
    fontSize: small ? 12 : theme.fontSize.body,
    background: getBgColor(theme, primary, secondary, inverted),
    '&:hover': {
      background: getHoverColor(theme, primary, secondary, inverted),
      cursor: 'pointer',
    },
    '& + &': {
      marginLeft: theme.gaps.xs,
    },
  })
);

const getBgColor = (
  theme: Theme,
  primary: boolean = false,
  secondary: boolean = false,
  inverted: boolean = false
) => {
  if (inverted)
    return primary ? theme.primary.dark : secondary ? theme.secondary.dark : theme.grey[700];

  return primary ? theme.primary.main : secondary ? theme.secondary.main : theme.grey[300];
};

const getHoverColor = (
  theme: Theme,
  primary: boolean = false,
  secondary: boolean = false,
  inverted: boolean = false
) => {
  if (inverted)
    return primary
      ? darken(0.05, theme.primary.dark)
      : secondary
      ? darken(0.05, theme.secondary.dark)
      : theme.grey[800];

  return primary ? theme.primary.dark : secondary ? theme.secondary.dark : theme.grey[400];
};

export default Button;
