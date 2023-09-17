

import { React } from "react";


type Props = {
	icon: React.ReactNode;
	hidden?: Boolean;
};


export default function IconComponent({ icon }: Props) {
	return (
		<>
			<div className="p-1 py-1 rounded-full hover:bg-gray-100 cursor-pointer hover:text-red-700 
               transition-all duration-300">
                {icon}
            </div>
		</>
	);
}
