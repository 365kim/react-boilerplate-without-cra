/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import COLOR from '../../../styles/color';

const INPUT_HEIGHT = '50px';
const LABEL_HEIGHT = '17px';

const cssContainer = css`
  position: relative;
  display: flex;
  align-items: center;
  height: ${INPUT_HEIGHT};
  padding: 0 12px;

  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.02);
  /* text-rendering: optimizeLegibility; */
  /* -webkit-box-align: center; */
  /* -webkit-font-smoothing: antialiased; */
  box-shadow: rgba(197, 204, 211, 0.5) 0px 0px 0px 2px inset;

  &:focus-within {
    background-color: rgb(255, 255, 255);

    label {
      transform: translateY(-50%) scale(0.7);
    }
  }
`;

const cssSubContainer = css`
  position: relative;
  flex-grow: 1;
  height: 100%;
`;

const cssLabel = css`
  position: absolute;
  top: calc((${INPUT_HEIGHT} - ${LABEL_HEIGHT}) / 2);
  left: 0;
  width: 100%;

  transform-origin: left top;
  transition: all 250ms ease 0s;

  color: ${COLOR.PLACEHOLDER};
`;

const cssInput = css`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 6px;

  color: ${COLOR.INPUT_TEXT};
  background-color: transparent;
  border: none;
  outline: none;
`;

const InputView = ({ label, leftIcon, rightIcon, clearable }) => {
  return (
    <div css={cssContainer}>
      {leftIcon && <div>{leftIcon}</div>}

      <div css={cssSubContainer}>
        <label css={cssLabel}>{label}</label>
        <input css={cssInput} />
      </div>

      {clearable && <button>x</button>}
      {rightIcon && <div>{rightIcon}</div>}
    </div>
  );
};

export default InputView;
