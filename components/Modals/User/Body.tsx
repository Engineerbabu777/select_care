'use client';
import CloseButton from "@/components/shared/CloseButton";
import Input from "@/components/shared/Input";
import SaveButton from "@/components/shared/SaveButton";
import useEmployee from "@/hooks/employee.hooks";
import { roleState } from "@/recoil/roleState";
import { onChangeHandler } from "@/utils/user/onChangeHandler";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { onSubmitHandlerEmployee } from "@/utils/user/onSubmitHandler";

type Props = {
	closeModal: () => void; // FUNCTION TO CLOSE MODAL!
};

export default function UserModalBody({ closeModal }: Props) {
	const [role, setRole] = useRecoilState(roleState);
	const [loading, setLoading] = useState(false);

	const { createNewEmployee } = useEmployee();

	// STATES!
	const [user, setUser] = useState<{
		firstName: string;
		lastName: string;
		email: string;
		role: string | undefined | null;
	}>({
		firstName: "",
		lastName: "",
		email: "",
		role: null,
	});

	// WILL CHANGE ANY TYPES LATER!

	// SUBMIT HANDLER! 
	const onSubmitHandler = async () => {
		onSubmitHandlerEmployee(createNewEmployee,setLoading,setUser,closeModal,user);
	};

	return (
		<div className="flex flex-col mx-2 my-4 gap-4">
			{/* FIRST NAME! */}
			<Input
				label={"First Name"}
				name={"firstName"}
				placeholder={"Glenn"}
				require={true}
				type={"text"}
				onChange={(e: any) => onChangeHandler(e, setUser, user)}
			/>

			{/* LAST NAME */}
			<Input
				label={"Last Name"}
				name={"lastName"}
				placeholder={"Maxwell"}
				require={true}
				onChange={(e: any) => onChangeHandler(e, setUser, user)}
				type={"text"}
			/>

			{/* EMAIL! */}
			<Input
				label={"Email Address"}
				name={"email"}
				placeholder={"maxwell32@gmail.com"}
				require={true}
				type={"email"}
				onChange={(e: any) => onChangeHandler(e, setUser, user)}
			/>

			{/* GIVEN ROLE! (DROP DOWN!) */}
			<div className="">
				<div className="flex flex-col gap-2">
					<label className="text-md font-semibold text-gray-500" htmlFor="role">
						Choose Current Role
					</label>
					<select
						onChange={(e: any) => onChangeHandler(e, setUser, user)}
						name="role"
						id="role"
						className="cursor-pointer overflow-auto text-blue-500 font-medium text-sm rounded-md shadow-sm bg-gray-200  hover:bg-gray-300 outline-none focus:outline-none px-3 py-1 focus:ring-blue-500 focus:ring-2"
					>
						<option
							value=""
							className="bg-gray-100 hover:bg-400 text-black hover:text-gray-700"
						>
							No-Role
						</option>
						{role?.roles?.length > 0 &&
							role?.roles?.map((r: any) => {
								if (r?.isActive === 'false') return; // THAT MEANS THE ROLE IS UNAVAILABLE!
								// ELSE RETURN THE AVAILABLE ROLES!
								return(
									<>
										<option
											value={r?._id}
											className=" bg-gray-100 hover:bg-400 text-black hover:text-gray-700"
										>
											{r?.title}
										</option>
									</>
								)
							})}
					</select>
				</div>
			</div>

			{/* BUTTONS! */}
			<div className="flex items-center justify-between w-full mt-6 gap-2">
				<CloseButton onClick={closeModal} />
				<SaveButton
					loading={loading}
					setLoading={setLoading}
					onClick={() => {
						onSubmitHandler();
					}}
				/>
			</div>
		</div>
	);
}
