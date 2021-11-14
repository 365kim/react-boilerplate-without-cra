import { css } from '@emotion/react';
import { BREAK_POINT } from 'styles';

type Alignment = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
type LengthUnit = string | 0;

interface Props {
  dir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'wrap' | 'wrap-reverse' | 'nowrap';
  justify?: Alignment;
  align?: Alignment;
  gap?: LengthUnit;
  width?: LengthUnit;
  height?: LengthUnit;
  children: JSX.Element[];
}

export const FlexBox = ({
  dir = 'row',
  wrap = 'wrap',
  justify = 'center',
  align = 'center',
  width = '100%',
  height = '200px',
  gap = 0,
  children,
  ...rest
}: Props) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: ${dir};
        flex-wrap: ${wrap};
        align-items: ${align};
        justify-content: ${justify};
        gap: ${gap};
        width: ${width};
        height: ${height};
      `}
      {...rest}
    >
      {children}
    </div>
  );
};
