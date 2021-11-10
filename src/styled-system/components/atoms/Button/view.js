/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import COLOR from '../../../styles/color';

const cssColor = {
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

const cssSize = {
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

const cssShape = {
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

const cssState = {
  disabled: css`
    background-color: ${COLOR.PRIMARY_LIGHT};
  `,
};

const ButtonView = ({ color, size, shape, disabled, ...rest }) => {
  return (
    <button
      css={[
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
