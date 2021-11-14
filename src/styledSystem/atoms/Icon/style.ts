import { css } from '@emotion/react';

import COLOR from '@styles/color';

export const color = {
  default: css`
    & > path {
      fill: rgb(102, 102, 102);
    }
  `,
  primary: css`
    & > path {
      fill: ${COLOR.PRIMARY};
    }
  `,
  secondary: css`
    & > path {
      fill: ${COLOR.SECONDARY};
    }
  `,
  white: css`
    & > path {
      fill: rgb(255, 255, 255);
    }
  `,
};

export const hoverColor = {
  default: css`
    & > path {
      fill: rgb(102, 102, 102);
    }
  `,
  primary: css`
    & > path {
      fill: ${COLOR.PRIMARY_DARK};
    }
  `,
  secondary: css`
    & > path {
      fill: ${COLOR.SECONDARY_LIGHT};
    }
  `,
  white: css`
    & > path {
      fill: rgb(238, 238, 238);
    }
  `,
};

export const activeColor = {
  default: css`
    & > path {
      fill: rgb(34, 34, 34);
    }
  `,
  primary: css`
    & > path {
      fill: ${COLOR.PRIMARY_DARK};
    }
  `,
  secondary: css`
    & > path {
      fill: ${COLOR.SECONDARY_LIGHT};
    }
  `,
  white: css`
    & > path {
      fill: rgb(170, 170, 170);
    }
  `,
};
