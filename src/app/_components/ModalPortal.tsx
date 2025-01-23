import React from 'react';
import reactDom from 'react-dom';

interface Props {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  if (typeof window === 'undefined') {
    // 서버 환경에서는 window, document 객체가 없기 때문에 document.getElementById('portal')를 찾지 못함
    return null;
  }

  const portal = document.getElementById('portal') as Element;
  return reactDom.createPortal(children, portal);
};

export default ModalPortal;
