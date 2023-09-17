
import { React } from "react";

type Props = {
	icon: React.ReactNode;
	hidden?: Boolean;
	header?: Boolean;
	aside?: Boolean;
};

export default function IconComponent({ icon, header, aside }: Props) {
	return (
		<>
			<div
				className={`p-1 py-1 rounded-full cursor-pointer  transition-all duration-300 
			  ${header ? "hover:text-red-700 hover:bg-gray-100" : ""} 
			  ${aside ? "hover:text-red-700 hover:bg-gray-200" : ""}`}
			>
				{icon}
			</div>
		</>
	);
}
