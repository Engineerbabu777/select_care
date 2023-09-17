
'use client';

import {useRecoilState} from 'recoil';
import { displayStateAtom } from "@/recoil/display-state";
import UserMain from '../MainView/Users/UserMain';
import RoleMain from '../MainView/Roles/RolesMain';



export default function Main() {

    const [display, setDisplay] = useRecoilState(displayStateAtom);


    return(<>

    {/* HERE WE WILL DISPLAY USERS / ROLES DEPENDS UPON SELECTED OPTIONS */}
     { display.display === 'USER' && <UserMain /> }
     { display.display === 'ROLE' && <RoleMain/> }
     { display.display === 'DEV' && <>DEVELOPER INFORMATION: ENGINEER BABU (TURKISH DEV)</> }
    </>)
}