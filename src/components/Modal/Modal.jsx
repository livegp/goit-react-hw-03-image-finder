import React, { Component } from 'react';

import { Modal, Overlay } from './Modal.styled';

class ModalWindow extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleOutsideClick = event => {
    const { onClose } = this.props;
    if (this.modalRef && !this.modalRef.contains(event.target)) {
      onClose();
    }
  };

  handleKeyPress = event => {
    const { onClose } = this.props;
    if (event.key === 'Escape') {
      onClose();
    }
  };

  setModalRef = element => {
    this.modalRef = element;
  };

  render() {
    const { src, alt } = this.props;
    return (
      <Overlay>
        <Modal ref={this.setModalRef}>
          <img src={src} alt={alt} />
        </Modal>
      </Overlay>
    );
  }
}

export default ModalWindow;
