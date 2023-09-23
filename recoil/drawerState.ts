import { atom } from "recoil";



interface Drawer {
    open: Boolean;
}


const DrawerInitialState: Drawer = {
    open: false,
}


export const DrawerState = atom<Drawer>({
    default: DrawerInitialState,
    key: 'DRAWER_KEY_STATE',
});