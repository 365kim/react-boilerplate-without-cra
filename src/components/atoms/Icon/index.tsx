import { SVGAttributes } from 'react';

import * as css from './style';

interface Props extends SVGAttributes<SVGSVGElement> {
  icon: JSX.Element;
  size?: number;
  color?: 'default' | 'primary' | 'secondary' | 'white';
  hasHoverColor?: boolean;
  hasActiveColor?: boolean;
}

export const Icon = ({
  icon,
  size = 24,
  color = 'default',
  hasHoverColor = false,
  hasActiveColor = false,
  ...rest
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 24 24"
      css={[css.color[color], hasHoverColor && css.hoverColor[color], hasActiveColor && css.activeColor[color]]}
      {...rest}
    >
      {icon}
    </svg>
  );
};
