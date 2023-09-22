

import recoil from 'recoil';

export interface displayStateInterface {
    display: 'USER' | 'ROLE' | 'DEV';
    right: 'SUNSUSER' | '';
    
}


export const displayState:displayStateInterface = {
    display: 'USER',
    right: ''
}

export const displayStateAtom = recoil.atom({
    key: 'ENGINEER_BABU_ASSIGNMENT_2_DISPLAY',
    default: displayState
})