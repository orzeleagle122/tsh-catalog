import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {GrClose} from 'react-icons/gr';
import {IProduct} from "../../model/product";
import {CloseButton, DescriptionWrapper, ModalWrapper, OpacityBackground, ImageWrapper} from './Modal.styles';

interface ModalProps {
    handleCloseModal: () => void;
    productInModal: IProduct | null;
}

const modalContainer = document.getElementById('modal-container');

const disableScroll = () => {
    document.body.style.overflow = 'hidden';
};

const enabledScroll = () => {
    document.body.style.overflow = 'auto';
};


const Modal = ({ handleCloseModal,productInModal}:ModalProps) => {
    const modalNode = document.createElement('div');

    useEffect(() => {
        // @ts-ignore
        modalContainer.appendChild(modalNode);
        disableScroll();
        return () => {
            // @ts-ignore
            modalContainer.removeChild(modalNode);
            enabledScroll();
        };
    }, [modalNode]);


    return ReactDOM.createPortal(
        <OpacityBackground
            onClick={() => {
                handleCloseModal();
            }}
        >
            <ModalWrapper onClick={(e) => e.stopPropagation()}>
                <ImageWrapper>
                    <CloseButton onClick={handleCloseModal}>
                        <GrClose />
                    </CloseButton>
                    <img src={productInModal?.image} alt={productInModal?.name}/>
                </ImageWrapper>
                <DescriptionWrapper>
                    <h2>
                        {productInModal?.name}
                    </h2>
                    <p>{productInModal?.description}</p>
                </DescriptionWrapper>
            </ModalWrapper>
        </OpacityBackground>,
        modalNode
    );
};

export default Modal;