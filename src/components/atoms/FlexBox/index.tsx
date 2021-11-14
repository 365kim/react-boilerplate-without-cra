import { css } from '@emotion/react';

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
  m?: LengthUnit;
  mr?: LengthUnit;
  ml?: LengthUnit;
  mt?: LengthUnit;
  mb?: LengthUnit;
  p?: LengthUnit;
  pr?: LengthUnit;
  pl?: LengthUnit;
  pt?: LengthUnit;
  pb?: LengthUnit;
  children: JSX.Element[];
}

export const FlexBox = ({
  dir = 'row',
  wrap = 'wrap',
  justify = 'center',
  align = 'center',
  width = '100%',
  height = 'fit-content',
  m = 0,
  mr = 0,
  ml = 0,
  mt = 0,
  mb = 0,
  p = 0,
  pr = 0,
  pl = 0,
  pt = 0,
  pb = 0,
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
        width: ${width};
        height: ${height};
        margin: ${m};
        margin-right: ${mr};
        margin-left: ${ml};
        margin-top: ${mt};
        margin-bottom: ${mb};
        padding: ${p};
        padding-right: ${pr};
        padding-left: ${pl};
        padding-top: ${pt};
        padding-bottom: ${pb};

        & > * + * {
          margin-left: ${gap};
        }
      `}
      {...rest}
    >
      {children}
    </div>
  );
};
