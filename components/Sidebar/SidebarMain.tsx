'use client';


import Card from "../Card";
import IconComponent from "../IconComponent";
import {
	AiOutlineLine,
	FaIdCardClip,
	IoIosAddCircle,
	MdEngineering,
	RiGroup2Fill,
} from "@/icons/icons";
import {useRecoilState} from 'recoil';
import { displayStateAtom } from "@/recoil/display-state";

export default function SidebarMain(){

	// WILL REMOVE DIVISIONS AT END AS WELL CREATE COMPONENT FOR ICON-DIV!
	const [display, setDisplay] = useRecoilState(displayStateAtom);

	return (
		<>
			<div className="w-full max-w-[3rem] mx-auto h-full flex">
				<Card>
					<div className="mt-4 px-1 gap-2 flex flex-col items-center  ">
						
                        {/* TO ADD USERS/ROLES! */}
						<div className="">
							<IconComponent
							   
								aside
								icon={
									<IoIosAddCircle className={"w-8 m-1 h-8 text-[#016A70]"} />
								}
							/>
						</div>

						<hr className=" bg-gray-500 w-8" />

						{/* DISPLAY USERS IN LEFT SECTION! */}
						<div className="-mb-1">
							<IconComponent
							    isClickable
							    onClick={() => setDisplay({...display,display:'USER'})}
								aside
								icon={<RiGroup2Fill className={"w-7 h-7 m-1.5"} />}
							/>
						</div>

						{/* DISPLAY ROLES IN LEFT SECTION */}
						<div className="">
							<IconComponent
							    isClickable
							    onClick={() => setDisplay({...display,display:'ROLE'})}
								aside
								icon={<FaIdCardClip className={"w-6 h-6 m-2"} />}
							/>
						</div>

						<div className="">
							<IconComponent
							    isClickable
							    onClick={() => setDisplay({...display,display:'DEV'})}
								aside
								icon={<MdEngineering className={"w-6 h-6 m-2"} />}
							/>
						</div>
					</div>
				</Card>
			</div>
		</>
	);
}
