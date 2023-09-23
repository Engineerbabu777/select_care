"use client";

import { useRecoilState } from "recoil";
import Card from "../shared/Card";
import { displayStateAtom } from "@/recoil/display-state";
import EmployeeDetail from "./EmployeeDetails/Employee";
import RoleDetail from "./RoleDetails/RoleDetail";
import EmpTabsMain from "./Assign-N-notAssign-Employees/EmpTabsMain";
import DeveloperInfo from "./DeveloperInfo/DeveloperInfo";

export default function MainRight() {
	const [display, setDisplay] = useRecoilState(displayStateAtom);

	return (
		<>
			<div className="h-full w-full flex ">
				<Card>
					<div className="w-full h-full ">
						{/* SEE IF DISPLAY STATE IS USER! */}
						{display?.display === "USER" && display?.right === "" && (
							<>
								<EmployeeDetail />
							</>
						)}

						{/* CHECK IF DISPLAY-STATE IS USER THEN SHOW SIGNED UNSIGNED! */}
						{display?.display === "USER" && display?.right === "SUNSUSER" && (
							<>
								<EmpTabsMain />
							</>
						)}

						{/* EXTRAS THAN ASSIGNMENT! */}

						{/* SEE IF DISPLAY STATE IS ROLE! */}
						{display?.display === "ROLE" && display?.right === "" && (
							<>
								<RoleDetail />
							</>
						)}

						{display?.display === "DEV" && (
							<>
								<DeveloperInfo />
							</>
						)}

						{/* CHECK IF DISPLAY-STATE IS ROLE THEN SHOW ALL ROLES WITH ASSIGNED EMPLOYEES (JUST NUMBER) (OPTIONAL)! */}
					</div>
				</Card>
			</div>
		</>
	);
}
