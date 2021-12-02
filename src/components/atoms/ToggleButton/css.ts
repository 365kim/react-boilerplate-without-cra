import { css } from '@emotion/react';
import { COLOR } from 'styles';

type Size = 'sm' | 'md';

/*
  MARGIN = CONTAINER_HEIGHT - ROUND_DIAMETER / 2
  MOVEMENT = CONTAINER_WIDTH - ROUND_DIAMETER - MARGIN * 2
*/
const SIZE = {
  sm: {
    CONTAINER_WIDTH: '60px',
    CONTAINER_HEIGHT: '30px',
    ROUND_DIAMETER: '22px',
    MARGIN: `calc((30px - 22px) / 2)`,
    MOVEMENT: `calc(60px - 22px - 4px * 2)`,
    TEXT_MOVEMENT: `-22px`,
    TEXT_WIDTH: '22px',
  },
  md: {
    CONTAINER_WIDTH: '100px',
    CONTAINER_HEIGHT: '30px',
    ROUND_DIAMETER: '22px',
    MARGIN: '4px',
    MOVEMENT: `calc(100px - 22px - 4px * 2)`,
    TEXT_MOVEMENT: `-30px`,
    TEXT_WIDTH: '56px',
  },
};

export const container = (size: Size) => css`
  position: relative;
  width: ${SIZE[size].CONTAINER_WIDTH};
  height: ${SIZE[size].CONTAINER_HEIGHT};

  border-radius: 50px;
  background-color: ${COLOR.PARAGRAPH_LIGHT};
  cursor: pointer;
`;

export const containerChecked = css`
  background-color: ${COLOR.PRIMARY_LIGHT};
`;

export const input = css`
  position: absolute;
  top: -9999px;
  left: -9999px;
  width: 0;
  height: 0;
`;

export const round = (size: Size) => css`
  position: absolute;
  top: ${SIZE[size].MARGIN};
  left: ${SIZE[size].MARGIN};
  width: ${SIZE[size].ROUND_DIAMETER};
  height: ${SIZE[size].ROUND_DIAMETER};

  border-radius: 50%;
  background-color: ${COLOR.ON_PRIMARY};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 200ms ease;
`;

export const roundChecked = (size: Size) => css`
  transform: translateX(${SIZE[size].MOVEMENT});
`;

export const text = (size: Size) => css`
  position: absolute;
  top: calc(${SIZE[size].MARGIN} + 4px);
  right: calc(${SIZE[size].MARGIN} + 4px);
  transform: translateX(0);
  min-width: ${SIZE[size].TEXT_WIDTH};

  text-align: center;
  font-size: 10px;
  color: ${COLOR.ON_PRIMARY};
`;

export const textChecked = (size: Size) => css`
  transform: translateX(${SIZE[size].TEXT_MOVEMENT});
`;
