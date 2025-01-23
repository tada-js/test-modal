'use client';

import { useState } from 'react';
import ModalPortal from './_components/ModalPortal';
import Modal from './_components/Modal';
import ModalHeader from './_components/ModalHeader';
import ModalBody from './_components/ModalBody';
import ModalFooter from './_components/ModalFooter';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>상세보기</button>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque
        doloremque assumenda rerum, laudantium nulla, quo expedita nobis omnis
        optio unde fugit dolorem voluptatem repellat laboriosam nisi autem ipsa
        recusandae!
      </div>
      {isOpen && (
        <ModalPortal>
          <Modal
            onClose={() => setIsOpen(false)}
            modalHeader={<ModalHeader>모달 제목: 금요일 좋아요</ModalHeader>}
            modalBody={<ModalBody>냉무 내공냠냠</ModalBody>}
            modalFooter={
              <ModalFooter>
                <button onClick={() => setIsOpen(false)}>닫기</button>
              </ModalFooter>
            }
          ></Modal>
        </ModalPortal>
      )}
    </>
  );
}
