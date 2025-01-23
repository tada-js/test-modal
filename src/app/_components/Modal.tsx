'use client';

import React from 'react';
import styled from 'styled-components';

interface Props {
  onClose: () => void;
  modalHeader: React.ReactNode;
  modalBody: React.ReactNode;
  modalFooter: React.ReactNode;
}

const Modal = ({ onClose, modalHeader, modalBody, modalFooter }: Props) => {
  return (
    <ModalContainer
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <ModalHeader>{modalHeader}</ModalHeader>
      <ModalBody>{modalBody}</ModalBody>
      <ModalFooter>{modalFooter}</ModalFooter>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  opacity: 0.8;
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 30px;
  background-color: #555;
`;

const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 200px;
  background-color: #999;
`;

const ModalFooter = styled.footer`
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 30px;
`;

export default Modal;
