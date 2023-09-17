

import recoil from 'recoil';

export interface displayStateInterface {
     display: 'USER' | 'ROLE' | 'DEV';
}


export const displayState:displayStateInterface = {
    display: 'USER'
}

export const displayStateAtom = recoil.atom({
    key: 'displayState123',
    default: displayState
})