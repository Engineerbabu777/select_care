"use client";

import { useRecoilState } from "recoil";
import { displayStateAtom } from "@/recoil/display-state";
import UserMain from "../MainView/Users/UserMain";
import RoleMain from "../MainView/Roles/RolesMain";
import Developer from "../MainView/Dev/Developer";

export default function Main() {
	const [display, setDisplay] = useRecoilState(displayStateAtom);

	return (
		<>
			{/* HERE WE WILL DISPLAY USERS / ROLES DEPENDS UPON SELECTED OPTIONS */}
			{display.display === "USER" && <UserMain />}
			{display.display === "ROLE" && <RoleMain />}

			{/* {(display.display === 'USER') && <>TEST STATE!</>} */}

			{display.display === "DEV" && (
				<>
					<Developer />
				</>
			)}
		</>
	);
}
