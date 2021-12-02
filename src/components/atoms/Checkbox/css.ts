import { css } from '@emotion/react';
import { COLOR } from 'styles';
import { checkMotion } from './motion';

export const container = css`
  width: fit-content;
  padding: 4px;
  cursor: pointer;
`;

export const input = css`
  position: absolute;
  top: -9999px;
  left: -9999px;
  width: 0;
  height: 0;
  cursor: inherit;
`;

/* onHover, onFocus */
export const emphasis = css`
  color: ${COLOR.PARAGRAPH};
  & > span {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const label = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px 0;

  font-size: 14px;
  color: ${COLOR.PARAGRAPH_LIGHT};
  cursor: inherit;
  transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);

  &:hover {
    ${emphasis}
  }
`;

export const checkMark = css`
  display: flex;
  margin-right: 10px;
  width: 22px;
  height: 22px;

  background: transparent;
  border: 2px solid ${COLOR.BORDER};
  border-radius: 1px;
  cursor: inherit;
  transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);

  &::before {
    content: '';
    position: absolute;
    top: 9px;
    left: 5px;
    width: 0;
    height: 0;

    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transform: translateY(0) rotate(45deg);
    transform-origin: 0% 100%;
  }
`;

export const checkMarkShow = css`
  border: 11px solid ${COLOR.PRIMARY};

  &::before {
    animation: ${checkMotion} 150ms 70ms cubic-bezier(0.4, 0, 0.23, 1) forwards;
  }
`;
