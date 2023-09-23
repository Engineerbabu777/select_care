


import { atom } from "recoil";



interface Modal {
    isOpen: Boolean;
}


const ModalInitialState: Modal = {
    isOpen: false,
}


export const ModalState = atom<Modal>({
    default: ModalInitialState,
    key: 'MODAL_KEY_STATE',
});