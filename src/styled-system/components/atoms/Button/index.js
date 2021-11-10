/** @jsx jsx */
import { jsx } from '@emotion/react';

import * as css from './style';

const Button = ({ color, size, shape, disabled, shine, ...rest }) => {
  return (
    <button
      css={[
        css.button,
        css.color[color ?? 'primary'],
        css.size[size ?? 'md'],
        css.shape[shape ?? 'default'],
        disabled && css.state.disabled,
        shine && css.effect.shine,
      ]}
      {...rest}
    ></button>
  );
};

export default Button;
