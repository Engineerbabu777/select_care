import { employeeState } from "@/recoil/employeeState";
import { roleState } from "@/recoil/roleState";
import { useRecoilState } from "recoil";
import { useState } from "react";
import useEmployee from "@/hooks/employee.hooks";
import { onChangeHandlerEdit } from "@/utils/user/edit-view-change-handler";
import CardHeading from "./CardHeading";
import EmployeeInputs from "./EmployeeInputs";
import ActionButtons from "./ActionButtons";

export default function EmployeeDetail() {
	const [employee, setEmployee] = useRecoilState(employeeState);
	const [roles, setRoles] = useRecoilState(roleState);
	const { deleteEmployee, editEmployee } = useEmployee();

	// MAKE THIS TO ONE STATE!
	const [showDelete, setShowDelete] = useState(false); // THIS WILL SHOW DELETE/EDIT MENU!
	const [edit, setEdit] = useState(false); // SHOW WILL SHOW VIEW/EDIT STATE OF EMPLOYEE!

	// ONCHANGE HANDLER FUNCTION!
	const onChangeData = (
		e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
	) => {
		onChangeHandlerEdit(e, setEmployee, employee, edit);
	};

	return (
		<>
			<CardHeading
				employee={employee}
				edit={edit}
				setEdit={setEdit}
				setShowDelete={setShowDelete}
				showDelete={showDelete}
			/>

			{employee?.selectedOne && (
				<>
					{/* WILL MAKE THIS TO CHUNKS! */}
					<div className="h-full w-full ">
						{/* CARD-HEADER */}
						<CardHeading
							single
							employee={employee}
							edit={edit}
							setEdit={setEdit}
							setShowDelete={setShowDelete}
							showDelete={showDelete}
							deleteEmployee={deleteEmployee}
						/>

						{/* USER DETAILS TEXT! */}
						<div className="p-3 mt-2">
							<h2 className="font-semibold text-sm text-[#8e8e8e]">
								USER DETAILS
							</h2>
							<div className="border-t border-gray-300"></div>
						</div>

						{/* MAIN_BODY! */}
						<div className="p-4 flex flex-col gap-8">
							{/* ALL INPUTS COMPONENTS! */}
							<EmployeeInputs onChangeData={onChangeData} employee={employee} />

							<div className="flex flex-col gap-1">
								<label className="text-gray-600 text-sm" htmlFor="role">
									Active Role ?
								</label>
								<select
									value={employee.selectedOne.role?._id}
									onChange={onChangeData}
									name={"role"}
									id="role"
									className="cursor-pointer overflow-auto text-gray-500 font-medium text-sm border-b-2 focus:ring-b-2 focus:ring-gray-500 border-gray-300 focus:border-gray-400 focus:border-b-2 outline-none focus:outline-none py-1 "
								>
									<option
										value=""
										className="bg-gray-100 hover:bg-400 text-black hover:text-gray-700"
									>
										No-Role
									</option>
									{roles?.roles.length > 0 &&
										roles?.roles?.map((r: any) => (
											<>
												<option
													value={r?._id}
													className=" bg-gray-100 hover:bg-400 text-black hover:text-gray-700"
												>
													{r?.title}
												</option>
											</>
										))}
								</select>
							</div>

							{/* BUTTONS COMPONENT! */}

							<ActionButtons
								employee={employee}
								setEmployee={setEmployee}
								setEdit={setEdit}
								edit={edit}
								editEmployee={editEmployee}
							/>

						</div>
					</div>
				</>
			)}
		</>
	);
}
