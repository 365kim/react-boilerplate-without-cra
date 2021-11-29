import { css } from '@emotion/react';

import { BREAK_POINT, MOTION, Z_INDEX } from 'styles';

export const dimmer = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: ${Z_INDEX.MODAL};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const visibility = {
  visible: MOTION.FADE_IN,
  invisible: MOTION.FADE_OUT,
};

export const slide = {
  top: {
    slideIn: MOTION.TOP_SLIDE_IN,
    slideOut: MOTION.TOP_SLIDE_OUT,
  },
  bottom: {
    slideIn: MOTION.BOTTOM_SLIDE_IN,
    slideOut: MOTION.BOTTOM_SLIDE_OUT,
  },
  left: {
    slideIn: MOTION.LEFT_SLIDE_IN,
    slideOut: MOTION.LEFT_SLIDE_OUT,
  },
  right: {
    slideIn: MOTION.RIGHT_SLIDE_IN,
    slideOut: MOTION.RIGHT_SLIDE_OUT,
  },
  center: {
    slideIn: MOTION.SCALE_IN,
    slideOut: null,
  },
  none: {
    slideIn: null,
    slideOut: null,
  },
};

export const content = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  max-width: 70%;
  max-height: 95%;

  line-height: 1.5;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 8px 8px 8px rgb(0 0 0 / 9%);

  @media (max-width: ${BREAK_POINT.TABLET_MD}) {
    max-width: 95%;
  }
`;

export const size = {
  base: css`
    min-width: 420px;
    min-height: 160px;
    @media (max-width: ${BREAK_POINT.TABLET_MD}) {
      min-width: 240px;
      max-width: 416px;
    }
  `,
  sm: css`
    min-width: 340px;
    min-height: 120px;
    @media (max-width: ${BREAK_POINT.TABLET_MD}) {
      min-width: 240px;
      max-width: 340px;
    }
  `,
  lg: css`
    min-width: 420px;
    height: 580px;
    @media (max-width: ${BREAK_POINT.TABLET_MD}) {
      min-width: 240px;
      max-width: 416px;
    }
  `,
};

export const closeButton = css`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px;

  & svg {
    width: 20px;
    height: 20px;
  }
`;
