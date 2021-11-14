import { css } from '@emotion/react';

import { COLOR } from 'styles';

const INPUT_HEIGHT = '50px';
const LABEL_HEIGHT = '17px';

export const shrinkLabel = css`
  transform: translateY(-50%) scale(0.7);
`;

export const container = css`
  position: relative;
  display: flex;
  align-items: center;
  height: ${INPUT_HEIGHT};
  margin: 4px 0;
  padding: 0 12px;

  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.02);
  border: 2px solid ${COLOR.BORDER};
  box-shadow: rgb(0 0 0 / 10%) 1px 4px 4px;

  &:focus-within {
    background-color: #fff;
    border: 2px solid ${COLOR.BORDER_DARK};

    label {
      ${shrinkLabel}
    }
  }
`;

export const state = {
  success: css`
    &:focus-within {
      border-color: ${COLOR.PRIMARY};

      label {
        color: ${COLOR.PRIMARY};
      }
    }
  `,
  error: css`
    border-color: ${COLOR.ERROR};
    label {
      color: ${COLOR.ERROR};
    }
    &:focus-within {
      border-color: ${COLOR.ERROR_DARK};
    }
  `,
};

export const subContainer = css`
  position: relative;
  flex-grow: 1;
  height: 100%;
`;

export const label = css`
  position: absolute;
  top: calc((${INPUT_HEIGHT} - ${LABEL_HEIGHT}) / 2);
  left: 0;
  width: 100%;

  transform-origin: left top;
  transition: all 250ms ease;

  color: ${COLOR.PLACEHOLDER};
`;

export const input = css`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 8px;

  color: ${COLOR.INPUT_TEXT};
  background-color: transparent;
  border: none;
  outline: none;
`;
