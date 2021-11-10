import React, { useRef, useState } from 'react';
import { getID } from '../../../../utils/generatorOfID';

import InputView from './view';

const Input = (prop) => {
  const [value, setValue] = useState(prop?.defaultValue ?? '');
  const IDref = useRef(getID());

  const newProp = {
    value,
    id: IDref.current,
    onChange(e) {
      setValue(e.target.value);
    },
    onClickClearButton() {
      setValue('');
    },
  };

  return <InputView {...prop} {...newProp}></InputView>;
};

Input.defaultProps = {
  color: 'primary',
  size: 'md',
  shape: 'default',
};

export default Input;
