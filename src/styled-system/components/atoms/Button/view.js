/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import COLOR from '../../../styles/color';

const cssButton = css`
  margin: 4px 0;
  transition: all 600ms ease;
  box-shadow: rgb(0 0 0 / 14%) 1px 4px 4px, rgb(0 0 0 / 12%) 1px 1px 8px;
`;

const cssColor = {
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
  tertiary: css`
    background-color: ${COLOR.TERTIARY};
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

const cssSize = {
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

const cssShape = {
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

const cssState = {
  disabled: css`
    background-color: ${COLOR.PRIMARY_LIGHT};
  `,
};

const ButtonView = ({ color, size, shape, disabled, ...rest }) => {
  return (
    <button
      css={[
        cssButton,
        cssColor[color ?? 'primary'],
        cssSize[size ?? 'md'],
        cssShape[shape ?? 'default'],
        disabled && cssState.disabled,
      ]}
      {...rest}
    ></button>
  );
};

export default ButtonView;
