import { css } from '@emotion/react';

export const SHOW = css`
  opacity: 1;
  visibility: visible;
`;

export const HIDE = css`
  opacity: 0;
  visibility: hidden;
`;

export const FADE_IN = css`
  opacity: 1;
  visibility: visible;
  transition: opacity 200ms;
`;

export const FADE_OUT = css`
  opacity: 0;
  visibility: hidden;
  transition: opacity 300ms, visibility 300ms;
`;
