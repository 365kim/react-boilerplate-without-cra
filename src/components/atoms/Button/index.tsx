import { ButtonHTMLAttributes } from 'react';

import * as css from './style';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly color?: 'primary' | 'primaryOutline' | 'secondary' | 'secondaryOutline' | 'gradient';
  readonly size?: 'xs' | 'sm' | 'md' | 'lg';
  readonly shape?: 'default' | 'square' | 'pill' | 'circle';
  readonly disabled?: boolean;
  readonly shine?: boolean;
}

export const Button = ({
  color = 'primary',
  size = 'md',
  shape = 'default',
  disabled = false,
  shine = false,
  ...rest
}: Props): JSX.Element => {
  return (
    <button
      css={[
        css.common,
        css.color[color],
        css.size[size],
        css.shape[shape],
        disabled && css.state.disabled,
        shine && css.effect.shine,
      ]}
      {...rest}
    ></button>
  );
};
