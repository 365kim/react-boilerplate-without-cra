import { useRef, useState, InputHTMLAttributes, ChangeEvent, SVGAttributes } from 'react';

import * as css from './style';
import { getID } from 'utils';

type Icon = SVGAttributes<SVGSVGElement>;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  readonly label?: string;
  readonly leftIcon?: Icon;
  readonly rightIcon?: Icon;
  readonly clearable?: boolean;
  readonly isSuccess?: boolean;
  readonly isError?: boolean;
  readonly defaultValue?: string;
}

export const Input = ({
  label,
  leftIcon,
  rightIcon,
  clearable,
  isSuccess,
  isError,
  defaultValue = '',
  ...rest
}: Props) => {
  const [value, setValue] = useState(defaultValue);
  const hasValue = value.length > 0;
  const id = useRef(getID());
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleClickClearButton = () => setValue('');

  return (
    <div css={[css.container, isSuccess && css.state.success, isError && css.state.error]}>
      {leftIcon && <div>{leftIcon}</div>}

      <div css={css.subContainer}>
        <label css={[css.label, hasValue && css.shrinkLabel]} htmlFor={id.current}>
          {label}
        </label>
        <input css={css.input} id={id.current} value={value} onChange={handleChange} {...rest} />
      </div>

      {clearable && <button onClick={handleClickClearButton}>x</button>}
      {rightIcon && <div>{rightIcon}</div>}
    </div>
  );
};
