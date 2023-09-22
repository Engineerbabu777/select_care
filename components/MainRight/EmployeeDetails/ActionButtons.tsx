"use client";

import { reset } from "@/utils/reset-all-fields";

type Props = {
	setEmployee?: any;
	setEdit: any;
	setRole?: any;
	role?: any;
	employee: any;
	edit: boolean;
	editEmployee: () => void;
	roleMode?: boolean;
	editRole?: any;
};

export default function ActionButtons({
	setEmployee,
	employee,
	edit,
	setEdit,
	editEmployee,
	roleMode = false,
	setRole,
	role,
	editRole,
}: Props) {
	return (
		<>
			<div className="flex w-full h-full justify-between items-end">
				<div className="flex justify-between items-center w-full">
					<button
						className=" text-blue-500 bg-blue-100 hover:bg-blue-200 uppercase font-semibold rounded-full tracking-[0.08rem] px-4 py-1"
						type="button"
						onClick={() => {
							reset(roleMode, role, setRole, employee, setEdit, setEmployee);
						}}
					>
						Reset
					</button>
					<button
						className="rounded-full font-semibold text-green-500 bg-green-100 hover:bg-green-200 tracking-[0.08rem] px-4 py-1"
						type="button"
						onClick={() => {
							if (roleMode) {
								editRole();
							}
							editEmployee();
							setEdit(false);
						}} // DATA IS ALREADY IN OUR STATE!
					>
						Save
					</button>
				</div>
			</div>
		</>
	);
}
