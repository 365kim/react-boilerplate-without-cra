import { ReactNode, useState } from 'react';

import * as css from './css';

interface Prop {
  id: string;
  children?: ReactNode;
  defaultValue?: boolean;
}

export const Checkbox = ({ id, children, defaultValue = false, ...rest }: Prop) => {
  const [isChecked, setIsChecked] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div css={css.container}>
      <input
        css={css.input}
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
      <label css={[css.label, isFocused && css.emphasis]} htmlFor={id}>
        <span css={[css.checkMark, isChecked && css.checkMarkShow]}></span>
        {children}
      </label>
    </div>
  );
};
