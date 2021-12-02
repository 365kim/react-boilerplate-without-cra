import { css } from '@emotion/react';

import { COLOR } from 'styles';

export const common = css`
  position: relative;
  margin: 4px 0;
  box-shadow: rgb(0 0 0 / 14%) 1px 4px 4px, rgb(0 0 0 / 12%) 1px 1px 8px;
  border: 2px solid transparent;
`;

export const color = {
  primary: css`
    color: ${COLOR.ON_PRIMARY};
    background-color: ${COLOR.PRIMARY};
    &:active {
      background-color: ${COLOR.PRIMARY_DARK};
    }
    &:hover {
      background-color: ${COLOR.PRIMARY_LIGHT};
    }
  `,
  primaryOutline: css`
    color: ${COLOR.PRIMARY};
    background-color: ${COLOR.ON_PRIMARY};
    border-color: ${COLOR.PRIMARY};
    &:active {
      background-color: ${COLOR.PRIMARY_LIGHT};
    }
    &:hover {
      background-color: ${COLOR.PRIMARY_BACKGROUND};
    }
  `,
  secondary: css`
    color: ${COLOR.ON_SECONDARY};
    background-color: ${COLOR.SECONDARY};
    &:active {
      background-color: ${COLOR.SECONDARY_DARK};
    }
    &:hover {
      background-color: ${COLOR.SECONDARY_LIGHT};
    }
  `,
  secondaryOutline: css`
    color: ${COLOR.SECONDARY};
    background-color: ${COLOR.ON_SECONDARY};
    border-color: ${COLOR.SECONDARY};
    &:active {
      background-color: ${COLOR.SECONDARY_LIGHT};
    }
    &:hover {
      background-color: ${COLOR.SECONDARY_BACKGROUND};
    }
  `,
  gradient: css`
    color: ${COLOR.ON_GRADIENT};
    background-image: ${COLOR.GRADIENT};
    &:active {
      background-image: ${COLOR.GRADIENT_DARK};
    }
    &:hover {
      background-image: ${COLOR.GRADIENT_LIGHT};
    }
  `,
};

export const size = {
  xs: css`
    width: 80px;
    padding: 1px 5px;
    font-size: 12px;
    line-height: 1.5;
  `,
  sm: css`
    width: 100px;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
  `,
  md: css`
    width: 120px;
    padding: 6px 14px;
    font-size: 16px;
    line-height: 1.5;
  `,
  lg: css`
    width: 200px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.5;
  `,
};

export const shape = {
  default: css`
    border-radius: 4px;
  `,
  square: css`
    border-radius: 0;
  `,
  pill: css`
    border-radius: 40px;
  `,
  circle: css`
    border-radius: 50%;
  `,
};

export const state = {
  disabled: css`
    background-color: ${COLOR.PRIMARY_LIGHT};
  `,
};
