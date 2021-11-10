/** @jsx jsx */
import { useRef, useState } from 'react';
import { jsx } from '@emotion/react';
import { getID } from '../../../../utils/generatorOfID';

import * as css from './style';

const Input = ({
  label,
  leftIcon,
  rightIcon,
  clearable,
  isSuccess,
  isError,
  defaultValue = '',
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue);
  const hasValue = value.length > 0;
  const id = useRef(getID());

  const onChange = (e) => setValue(e.target.value);
  const onClickClearButton = () => setValue('');

  return (
    <div
      css={[
        css.container,
        isSuccess && css.state.success,
        isError && css.state.error,
      ]}
    >
      {leftIcon && <div>{leftIcon}</div>}

      <div css={css.subContainer}>
        <label
          css={[css.label, hasValue && css.shrinkLabel]}
          htmlFor={id.current}
        >
          {label}
        </label>
        <input
          css={css.input}
          id={id.current}
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

export default Input;
