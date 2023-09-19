import CloseButton from "@/components/shared/CloseButton";
import Input from "@/components/shared/Input";
import SaveButton from "@/components/shared/SaveButton";
import React, { useState } from "react";

type Props = {
	closeModal: () => void; // FUNCTION TO CLOSE MODAL!
};

export default function UserModalBody({ closeModal }: Props) {
	
	// STATES!
	const [user, setUser] = useState<{
		firstName: string,
		lastName: string,
		email: string,
		role: string | undefined,
	}>({
		firstName: "",
		lastName: "",
		email: "",
		role: "",
	});

	// FUNCTION TO UPDATE STATES (MOVE THIS TO UTILS)!
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		//SPREADING PREVIOUS STATE BUT CHANGING CURRENT_TARGET!
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	// SUBMIT HANDLER!
	const onSubmitHandler = () => {
		// VALIDATIONS!
		// LOGIC!
	};

	return (
		<div className="flex flex-col mx-2 my-4 gap-4">
			{/* FIRST NAME! */}
			<Input
				label={"First Name"}
				name={"firstName"}
				placeholder={"Glenn"}
				require
				type={"text"}
				onChange={onChangeHandler}
			/>

			{/* LAST NAME */}
			<Input
				label={"Last Name"}
				name={"lastName"}
				placeholder={"Maxwell"}
				require
				onChange={onChangeHandler}
				type={"text"}
			/>

			{/* EMAIL! */}
			<Input
				label={"Email Address"}
				name={"email"}
				placeholder={"maxwell32@gmail.com"}
				require
				type={"email"}
				onChange={onChangeHandler}
			/>

			{/* GIVEN ROLE! (DROP DOWN!) */}

			{/* SUBMIT BUTTON! */}
			<div className="flex items-center w-full mt-6 gap-2">
				<CloseButton onClick={closeModal} />
				<SaveButton
					onClick={() => {
						onSubmitHandler();
					}}
				/>
			</div>
		</div>
	);
}
