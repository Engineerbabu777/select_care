

import Input from "@/components/shared/Input";
import React from "react";

type Props = {
	closeModal: () => void; // FUNCTION TO CLOSE MODAL!
};

export default function UserModalBody({ closeModal }: Props) {
	// MAY BE WE NEED REUSEABLE-COMPONENT FOT INPUTS AS WELL!

	return (
		<div className="flex flex-col mx-2 my-4 gap-4">
			{/* FIRST NAME! */}
			<Input
				label={"First Name"}
				name={"firstName"}
				placeholder={"Glenn"}
				require
				type={"text"}
			/>

			{/* LAST NAME */}
			<Input
				label={"Last Name"}
				name={"lastName"}
				placeholder={"Maxwell"}
				require
				type={"text"}
			/>

			{/* EMAIL! */}
			<Input
				label={"Email Address"}
				name={"email"}
				placeholder={"maxwell32@gmail.com"}
				require
				type={"email"}
			/>

      {/* GIVEN ROLE! (DROP DOWN!) */}
      

		</div>
	);
}
