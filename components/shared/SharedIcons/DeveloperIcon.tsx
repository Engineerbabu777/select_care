import React from "react";
import IconComponent from "../IconComponent";
import { IoIosAddCircle, MdEngineering } from "@/icons/icons";

type Props = {
	display: any;
	aside: any;
	header: any;
	setDisplay?: any;
};

export default function DeveloperIcon({
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
					onClick={() => setDisplay({ right: "", display: "DEV" })}
					aside={aside}
					header={header}
					icon={
						<MdEngineering
							className={
								// WILL MAKE CLASSNAMES MUCH SIMPLER!
								aside // IF SIDEBAR IS TRUE THEN CLASSES WILL BE DIFFERENT!
									? "w-6 h-6 m-2 " +
									  (display?.display === "DEV" ? "text-orange-800" : "")
									: "w-5 h-5  " + // IF SIDEBAR IS FALSE THEN CLASSES WILL BE DIFFERENT!
									  (display?.display === "DEV" ? " text-blue-600 " : "")
							}
						/>
					}
				/>
			</div>
		</>
	);
}
