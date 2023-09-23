import React from "react";
import IconComponent from "../IconComponent";
import { RiGroup2Fill } from "@/icons/icons";

type Props = {
    display: any;
	aside: any;
	header: any;
	setDisplay?: any;
};

export default function ShowEmployeesIcon({
	display,
	aside,
    header,
    setDisplay,
}: Props) {
    return (
			<>
				<div className={aside ? "-mb-1" : ""}>
					<IconComponent
						isClickable
						onClick={() => setDisplay({ right: "", display: "USER" })}
						aside={aside}
						header={header}
						icon={
							<RiGroup2Fill
								className={
									// WILL MAKE CLASSNAMES MUCH SIMPLER!
									aside // IF SIDEBAR IS TRUE THEN CLASSES WILL BE DIFFERENT!
										? "w-7 h-7 m-1.5 " +
										  (display?.display === "USER" && display?.right === ""
												? "text-orange-800"
												: "")
										: "w-7 h-7  p-1 " + // IF SIDEBAR IS FALSE THEN CLASSES WILL BE DIFFERENT!
										  (display?.display === "USER" && display?.right === ""
												? " text-blue-600 "
												: "")
								}
							/>
						}
					/>
				</div>
			</>
		);
}
