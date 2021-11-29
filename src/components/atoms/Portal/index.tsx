import { useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';

interface Prop {
  id: string;
  children: JSX.Element[] | JSX.Element;
}

const getDOMElement = (id: string) => {
  let $portal = document.getElementById(id);

  if ($portal === null) {
    $portal = document.createElement('div');
    $portal.setAttribute('id', id);
    document.body.appendChild($portal);
  }

  return $portal;
};

export const Portal = ({ id, children }: Prop) => {
  const $portal = getDOMElement(id);
  const portalRef = useRef(createPortal(children, $portal));

  return portalRef.current;
};
