import { SVGAttributes } from 'react';

import * as css from './style';
import * as path from './path';

interface Props extends SVGAttributes<SVGSVGElement> {
  readonly type: 'arrowUp' | 'arrowLeftSimple' | 'check';
  readonly size?: number;
  readonly color?: 'default' | 'primary' | 'secondary' | 'white';
  readonly hasHoverColor?: boolean;
  readonly hasActiveColor?: boolean;
}

const Icon = ({
  type,
  size = 24,
  color = 'default',
  hasHoverColor = false,
  hasActiveColor = false,
  ...rest
}: Props): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      css={[css.color[color], hasHoverColor && css.hoverColor[color], hasActiveColor && css.activeColor[color]]}
      {...rest}
    >
      {path[type]}
    </svg>
  );
};

export default Icon;
