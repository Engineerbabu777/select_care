import React from "react";
import IconComponent from "../IconComponent";
import { IoIosAddCircle } from "@/icons/icons";

type Props = {
	display: 'ROLE' | 'USER' | 'DEV' | 'SUNSUSER';
	toggleModal: any;
	aside: any;
	header: any;
};

export default function AddIcon({
	display,
	toggleModal,
	aside,
	header,
}: Props) {
	return (
		<>
			<div className="">
				<IconComponent
					isClickable={display === "USER" || display === "ROLE"}
					onClick={toggleModal}
					aside={aside}
					header={header}
					icon={
						<IoIosAddCircle
							className={aside ? "w-8 m-1 h-8 text-[#016A70]" : "w-7 h-7 p-1"}
						/>
					}
				/>
			</div>
		</>
	);
}
