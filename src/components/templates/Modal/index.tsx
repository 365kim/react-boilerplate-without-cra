import { MouseEvent, KeyboardEvent, useState, ButtonHTMLAttributes } from 'react';

import { Icon, Portal } from 'components';
import { Close } from 'icons';
import * as css from './css';

interface InitialState {
  id?: string;
  isOpenInitially?: boolean;
}

interface Prop {
  size?: 'base' | 'sm' | 'lg';
  slideDirection?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'none';
  hasCloseButton?: boolean;
  CloseButton?: any;
  willCloseOnDimmerClick?: boolean;
  willCloseOnEsc?: boolean;
  closeSideEffect?: () => void;
  children: JSX.Element;
}

const DefaultCloseButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button css={css.closeButton} {...props}>
    <Icon icon={Close} />
  </button>
);

export const useModal = ({ id = 'modal', isOpenInitially = false }: InitialState) => {
  const [isOpen, setIsOpen] = useState<boolean>(isOpenInitially);
  const [willClose, setWillClose] = useState<boolean>(false);

  const open = () => {
    setWillClose(false);
    setIsOpen(true);
  };
  const close = () => {
    setWillClose(true);
    setTimeout(() => setIsOpen(false), 300);
  };

  const Modal = ({
    size = 'base',
    slideDirection = 'none',
    hasCloseButton = false,
    CloseButton = DefaultCloseButton,
    willCloseOnDimmerClick = true,
    willCloseOnEsc = true,
    closeSideEffect = () => {},
    children,
  }: Prop) => {
    const handleClickDimmer = ({ target, currentTarget }: MouseEvent) => {
      if (target !== currentTarget) return;
      if (!willCloseOnDimmerClick) return;
      close();
      closeSideEffect();
    };

    const handleKeyDownEsc = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      e.stopPropagation();
      if (!willCloseOnEsc) return;
      close();
      closeSideEffect();
    };

    if (!isOpen) {
      return null;
    }

    return (
      <Portal id={id}>
        <div
          css={[css.dimmer, willClose ? css.visibility.invisible : css.visibility.visible]}
          onClick={handleClickDimmer}
        >
          <div
            css={[
              css.content,
              css.size[size],
              willClose ? css.slide[slideDirection].slideOut : css.slide[slideDirection].slideIn,
            ]}
            onKeyDown={handleKeyDownEsc}
          >
            {hasCloseButton && <CloseButton onClick={close} />}
            {children}
          </div>
        </div>
      </Portal>
    );
  };

  return {
    isOpen,
    open,
    close,
    Modal,
  };
};
