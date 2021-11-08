import React from 'react';
import styled, { css } from 'styled-components';

import COLOR from '../../../styles/color';

const colors = {
  primary: css`
    background-color: ${COLOR.PRIMARY};
    &:active {
      background-color: ${COLOR.PRIMARY_DARK};
    }
    &:hover {
      background-color: ${COLOR.PRIMARY_LIGHT};
    }
  `,
  secondary: css`
    background-color: ${COLOR.SECONDARY};
    &:active {
      background-color: ${COLOR.SECONDARY_DARK};
    }
    &:hover {
      background-color: ${COLOR.SECONDARY_LIGHT};
    }
  `,
  tertiary: css`
    background-color: ${COLOR.TERTIARY};
  `,
};

const sizes = {
  xs: css`
    padding: 1px 5px;
    font-size: 12px;
    line-height: 1.5;
  `,
  sm: css`
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
  `,
  md: css`
    padding: 6px 14px;
    font-size: 16px;
    line-height: 1.5;
  `,
  lg: css`
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.5;
  `,
};

const shapes = {
  default: css`
    width: 6rem;
  `,
  square: css`
    width: 10rem;
  `,
  pill: css`
    border-radius: 2.5rem;
  `,
  circle: css`
    border-radius: 50%;
  `,
};

const states = {
  disabled: css``,
};

const StyledButton = styled.button`
  ${(props) => colors[props.color]}
  ${(props) => sizes[props.size]}
  ${(props) => shapes[props.shape]}
  ${(props) => props.disabled && states.disabled}
`;

const Button = (props) => {
  return <StyledButton {...props}></StyledButton>;
};

Button.defaultProps = {
  color: 'primary',
  size: 'md',
  shape: 'default',
};

export default Button;
