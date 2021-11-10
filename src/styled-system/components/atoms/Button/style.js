import { css } from '@emotion/react';

import COLOR from '../../../styles/color';

export const button = css`
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

export const effect = {
  shine: css`
    transition: all 600ms ease;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -50%;
      z-index: 2;
      width: 50%;
      height: 100%;

      background: -webkit-linear-gradient(
        left,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0.3) 100%
      );
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0.3) 100%
      );
    }
    &:hover::before {
      -webkit-animation: shine 0.75s;
      animation: shine 0.75s;
    }

    @-webkit-keyframes shine {
      0% {
        -webkit-transform: translateX(0) skewX(-25deg);
      }
      100% {
        -webkit-transform: translateX(400%) skewX(-25deg);
      }
    }
    @keyframes shine {
      0% {
        transform: translateX(0) skewX(-25deg);
      }
      100% {
        transform: translateX(400%) skewX(-25deg);
      }
    }
  `,
};
