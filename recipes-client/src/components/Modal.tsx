import * as ModalBox from 'react-modal';
import * as React from 'react';

interface Props {
  onClickCloseModal: () => void;
}

const Modal: React.SFC<Props> = ({ onClickCloseModal, children }) => {
  return (
    <ModalBox
      ariaHideApp={false}
      isOpen={true}
      onRequestClose={onClickCloseModal}
      style={modalStyle}
    >
      {children}
    </ModalBox>
  );
};

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: 'rgba(0,0,0,0.4)',
  },
};

export default Modal;
