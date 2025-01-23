import React from 'react';
import reactDom from 'react-dom';

interface Props {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const portal = document.getElementById('portal') as Element;
  return reactDom.createPortal(children, portal);
};

export default ModalPortal;
