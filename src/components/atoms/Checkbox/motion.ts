import { keyframes } from '@emotion/react';

import { COLOR } from 'styles';

const CHECKBOX_HEIGHT = '0.7em';
const CHECKBOX_WIDTH = '0.3em';

export const checkMotion = keyframes`
  0% {
    border-color: ${COLOR.ON_PRIMARY};
  }
  33% {
    width: ${CHECKBOX_WIDTH};
  }
  100% {
    width: ${CHECKBOX_WIDTH};
    height: ${CHECKBOX_HEIGHT};
    border-color: ${COLOR.ON_PRIMARY};
    transform: translateY(calc(-${CHECKBOX_HEIGHT})) rotate(45deg);
  }
`;
