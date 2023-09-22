'use client';
import { useRecoilState } from "recoil";
import { employeeState } from "@/recoil/employeeState";
import { roleState } from "@/recoil/roleState";
import { useState } from "react";
import useRole from "@/hooks/role.hooks";
import CardHeading from "../EmployeeDetails/CardHeading";
import ActionButtons from "../EmployeeDetails/ActionButtons";
import SelectAny from "@/components/shared/SelectAny";
import { onChangeHandlerEdit } from "@/utils/role/edit-view-handler-onchange";
import Field from "./Fields";

export default function RoleDetail({}) {
	const [employee, setEmployee] = useRecoilState(employeeState);
	const [roles, setRoles] = useRecoilState(roleState);
	const { editRole, deleteRole } = useRole();

	// MAKE THIS TO ONE STATE!
	const [showDelete, setShowDelete] = useState(false); // THIS WILL SHOW DELETE/EDIT MENU!
	const [edit, setEdit] = useState(false); // SHOW WILL SHOW VIEW/EDIT STATE OF ROLE!

	return (
		<>
			<div className="h-full w-full overflow-scroll no-scroll">
				{/* HEADING! */}

				{/* // MAKE IT SINGLE HEADING IF NO ROLE IS SELECTED! */}
				{!roles.selectedRole && (
					<SelectAny
						title={"Select Role"}
						desc={"Select any role to see details here"}
					/>
				)}

				{/*  BUT ON SELECTED ROLE*/}
				{roles?.selectedRole && (
					<>
						{/* WILL MAKE THIS TO CHUNKS! */}
						<div className="h-full w-full flex flex-col ">
							{/* CARD-HEADER */}
							<CardHeading
								role={roles}
								roleView
								employee={employee}
								edit={edit}
								setEdit={setEdit}
								setShowDelete={setShowDelete}
								showDelete={showDelete}
								deleteFunction={deleteRole}
							/>

							{/* USER DETAILS TEXT! */}
							<div className="p-3 mt-2">
								<h2 className="font-semibold text-sm text-[#8e8e8e]">
									ROLE DETAILS
								</h2>
								<div className="border-t border-gray-300"></div>
							</div>

							{/* MAIN_BODY! */}
							<div className="p-4 flex flex-col gap-8 flex-1">
								{/* ALL INPUT COMPONENTS! */}
								<Field roles={roles} setRoles={setRoles} edit={edit} />

								{/* BUTTONS COMPONENT! */}

								{/* <div> */}
								<ActionButtons
									editRole={editRole}
									roleMode
									employee={employee}
									setEmployee={setEmployee}
									setEdit={setEdit}
									edit={edit}
									editEmployee={editRole}
									setRole={setRoles}
									role={roles}
								/>
								{/* </div> */}
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}
