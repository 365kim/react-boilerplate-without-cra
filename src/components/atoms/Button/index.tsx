import { ButtonHTMLAttributes } from 'react';

import * as css from './style';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'primaryOutline' | 'secondary' | 'secondaryOutline' | 'gradient';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  shape?: 'default' | 'square' | 'pill' | 'circle';
  shine?: boolean;
}

const Button = ({
  color = 'primary',
  size = 'md',
  shape = 'default',
  disabled = false,
  shine = false,
  children,
  ...rest
}: Props) => {
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
    >
      {children}
    </button>
  );
};

export { Button };
