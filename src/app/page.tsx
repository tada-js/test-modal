'use client';

import { useState } from 'react';
import ModalPortal from './_components/ModalPortal';
import Modal from './_components/Modal';

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
            modalHeader={<div>모달 제목: 금요일 좋아요</div>}
            modalBody={<div>냉무 내공냠냠</div>}
            modalFooter={<button onClick={() => setIsOpen(false)}>닫기</button>}
          ></Modal>
        </ModalPortal>
      )}
    </>
  );
}
