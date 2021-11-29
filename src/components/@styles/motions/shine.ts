import { css } from '@emotion/react';

export const SHINE = css`
  transition: all 600ms ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    z-index: 2;
    width: 50%;
    height: 100%;

    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 100%);
    background: linear-gradient(to right, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 100%);
  }
  &:hover::before {
    -webkit-animation: shine 0.75s;
    animation: shine 0.75s;
  }

  @-webkit-keyframes shine {
    0% {
      -webkit-transform: translateX(0) skewX(-25deg);
    }
    100% {
      -webkit-transform: translateX(400%) skewX(-25deg);
    }
  }
  @keyframes shine {
    0% {
      transform: translateX(0) skewX(-25deg);
    }
    100% {
      transform: translateX(400%) skewX(-25deg);
    }
  }
`;
