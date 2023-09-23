import React from "react";
import IconComponent from "../IconComponent";
import { FaIdCardClip } from "@/icons/icons";

type Props = {
	display: any;
	aside: any;
	header: any;
	setDisplay?: any;
};

export default function ShowRolesIcon({
	display,
	aside,
    header,
    setDisplay,
}: Props) {
	return (
		<>
			<div className="">
				<IconComponent
					isClickable
					onClick={() => setDisplay({ right: "", display: "ROLE" })}
					aside={aside}
					header={header}
					icon={
						<FaIdCardClip
							className={
								// WILL MAKE CLASSNAMES MUCH SIMPLER!
								aside // IF SIDEBAR IS TRUE THEN CLASSES WILL BE DIFFERENT!
									? "w-6 h-6 m-2 " +
									  (display?.display === "ROLE" && display?.right === ""
											? "text-orange-800"
											: "")
									: "w-6 h-6  p-1 " + // IF SIDEBAR IS FALSE THEN CLASSES WILL BE DIFFERENT!
									  (display?.display === "ROLE" && display?.right === ""
											? " text-blue-600"
											: "")
							}
						/>
					}
				/>
			</div>
		</>
	);
}
