import { useState } from 'react';

import * as css from './css';

interface Prop {
  on: string;
  off: string;
  defaultValue?: boolean;
}

export const ToggleButton = ({ on, off, defaultValue = false, ...rest }: Prop) => {
  const [isChecked, setIsChecked] = useState(defaultValue);

  return (
    <div className="button r" id="button-3">
      {/* <input
        css={css.input}
        type="checkbox"
        className="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        {...rest}
      />
      <div css={[css.knobs, isChecked && css.knobsChecked]} className="knobs"></div>
      <div css={css.container} className="layer"></div> */}
    </div>
  );
};
