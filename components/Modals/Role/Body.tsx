"use client";

import CloseButton from "@/components/shared/CloseButton";
import Input from "@/components/shared/Input";
import SaveButton from "@/components/shared/SaveButton";
import React, { useState } from "react";
import TextArea from "@/components/shared/TextArea";
import { AiFillCheckCircle } from "@/icons/icons";
import useRole from "@/hooks/role.hooks";
import { onChangeHandler } from "@/utils/role/role-change-handler";

type Props = {
	closeModal: () => void; // FUNCTION TO CLOSE MODAL!
};

export default function RoleModalBody({ closeModal }: Props) {
	// CUSTOM ROLE HOOK!
	const { createNewRole, getRoles } = useRole();

	// STATES!
	const [role, setRole] = useState({
		title: "",
		description: "",
		isActive: true,
	});

	const onSubmit = async () => {
		const data = await createNewRole(role); // CALLING THE FUNCTION TO CREATE NEW ROLE!
		setRole({ title: "", description: "", isActive: true }); // RESET STATE!
		closeModal(); // CLOSE THE MODAL!

		// INSTEAD OF WAITING FOR DATA TO COME WE WILL UPDATE THE STATE DIRECTLY FROM OUR ROLE STATE
		//(IMPROVING UI INTERFACE FOR BETTER EXPERIENCE USER WON'T WAIT MUCH WAIT)!
	};

	return (
		<div className="flex flex-col mx-2 my-4 gap-4">
			{/* TITLE ! */}
			<Input
				label={"Title"}
				name={"title"}
				placeholder={"HR"}
				require
				type={"text"}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					onChangeHandler(e, setRole, role)
				}
			/>

			{/* DESCRIPTION (TEXT-AREA)  */}
			<TextArea
				label={"Description"}
				name={"description"}
				placeholder={
					"Human resources (HR) is a department in a company that is responsible for managing the company's workforce. This includes tasks such as recruiting, hiring, onboarding, training, and developing employees. HR is also responsible for ensuring that the company complies with employment laws and regulations, and that it provides a safe and healthy work environment for its employees"
				}
				require
				onChange={(e: any) => onChangeHandler(e, setRole, role)}
			/>

			{/* IS-ACTIVE SELECT BOX! (WILL PUSH TO NEW FILE) */}
			<div className="flex gap-3 flex-col">
				<p className="text-gray-500 font-semibold ">Role Active Status:</p>

				<div className="flex gap-2 items-center">
					<div
						onClick={() => setRole({ ...role, isActive: true })}
						className={
							"flex items-center gap-2 border-gray-200 border  rounded-md px-2 py-1 cursor-pointer transition-all duration-300 " +
							(role.isActive === true
								? " bg-gray-300 shadow-md shadow-gray-600 border-green-500 border "
								: " bg-gray-200 ")
						}
					>
						<span className="text-gray-600 font-semibold text-sm">Active</span>
						<AiFillCheckCircle className="w-5 h-5 text-green-500" />
					</div>

					<div
						onClick={() => setRole({ ...role, isActive: false })}
						className={
							"flex items-center gap-2 border-gray-200 border  rounded-md px-2 py-1 cursor-pointer transition-all duration-300 " +
							(role.isActive === false
								? " bg-gray-300 shadow-md shadow-gray-600 border-red-500 border "
								: " bg-gray-200 ")
						}
					>
						<span className="text-gray-600 font-semibold text-sm">
							UnActive
						</span>
						<AiFillCheckCircle className="h-5 w-5 text-red-500" />
					</div>
				</div>
			</div>

			<div className="flex items-center w-full mt-6 justify-between">
				<CloseButton onClick={closeModal} />
				{/* SUBMIT BUTTON! */}
				<SaveButton onClick={onSubmit} />
			</div>
		</div>
	);
}
