import React from "react";
import IconComponent from "../IconComponent";
import { MdCompost } from "@/icons/icons";

type Props = {
	display: any;
	aside: any;
	header: any;
	setDisplay: any;
};

export default function DivideEmployeesIcon({
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
						onClick={() => setDisplay({ right: "SUNSUSER", display: "USER" })}
						aside={aside}
						header={header}
						icon={
							<MdCompost
								className={
									// WILL MAKE CLASSNAMES MUCH SIMPLER!
									aside // IF SIDEBAR IS TRUE THEN CLASSES WILL BE DIFFERENT!
										? "w-6 h-6 m-2 " +
										  (display?.display === "USER" &&
										  display?.right === "SUNSUSER"
												? "text-orange-800"
												: "")
										: "w-7 h-7 p-1 " + // IF SIDEBAR IS FALSE THEN CLASSES WILL BE DIFFERENT!
										  (display?.display === "USER" &&
										  display?.right === "SUNSUSER"
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
