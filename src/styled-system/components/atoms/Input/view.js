/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import COLOR from '../../../styles/color';

const INPUT_HEIGHT = '50px';
const LABEL_HEIGHT = '17px';

const cssShrinkLabel = css`
  transform: translateY(-50%) scale(0.7);
`;

const cssContainer = css`
  position: relative;
  display: flex;
  align-items: center;
  height: ${INPUT_HEIGHT};
  padding: 0 12px;

  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.01);
  border: 2px solid ${COLOR.BORDER};

  &:focus-within {
    background-color: #fff;
    border: 2px solid ${COLOR.BORDER_DARK};

    label {
      ${cssShrinkLabel}
    }
  }
`;

const cssState = {
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
  transition: all 250ms ease;

  color: ${COLOR.PLACEHOLDER};
`;

const cssInput = css`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 8px;

  color: ${COLOR.INPUT_TEXT};
  background-color: transparent;
  border: none;
  outline: none;
`;

const InputView = ({
  label,
  id,
  leftIcon,
  rightIcon,
  clearable,
  value,
  onChange,
  onClickClearButton,
  isSuccess,
  isError,
  ...rest
}) => {
  return (
    <div
      css={[
        cssContainer,
        isSuccess && cssState.success,
        isError && cssState.error,
      ]}
    >
      {leftIcon && <div>{leftIcon}</div>}

      <div css={cssSubContainer}>
        <label css={[cssLabel, value.length && cssShrinkLabel]} htmlFor={id}>
          {label}
        </label>
        <input
          css={cssInput}
          id={id}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </div>

      {clearable && <button onClick={onClickClearButton}>x</button>}
      {rightIcon && <div>{rightIcon}</div>}
    </div>
  );
};

export default InputView;
