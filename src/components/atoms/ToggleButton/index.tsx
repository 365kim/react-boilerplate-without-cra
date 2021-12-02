import { useState } from 'react';
import * as css from './css';

interface Prop {
  on?: string;
  off?: string;
  defaultValue?: boolean;
  size?: 'sm' | 'md';
}

export const ToggleButton = ({ on = '', off = '', defaultValue = false, size = 'sm', ...rest }: Prop) => {
  const [isChecked, setIsChecked] = useState(defaultValue);

  return (
    <label css={[css.container(size), isChecked && css.containerChecked]} {...rest}>
      <input css={css.input} type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />
      <div css={[css.round(size), isChecked && css.roundChecked(size)]} />
      <div css={[css.text(size), isChecked && css.textChecked(size)]}>{isChecked ? on : off}</div>
    </label>
  );
};
