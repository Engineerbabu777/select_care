import IconComponent from "./IconComponent";
import {
	BiDotsVertical,
	GrClearOption,
	BiEdit,
	BiSolidTrash,
} from "@/icons/icons";
import useRole from "@/hooks/role.hooks";
import useEmployee from "@/hooks/employee.hooks";
import { motion } from 'framer-motion';

type Props = {
	edit: boolean;
	setEdit: any;
	selectedOne: any;
	deleteFunction: any;
	setShowDelete: any;
	role?: boolean;
	showDelete: any;
};

export default function EditDeleteMenus({
	edit,
	setEdit,
	selectedOne,
	deleteFunction,
	setShowDelete,
	role = false,
	showDelete,
}: Props) {

	const {clearSelectedRole} = useRole();
	const {clearSelectedEmployee} = useEmployee();

	return (
		<>
			{/* WILL MAKE THE COMPONENT MUCH SIMPLER BUT */}
			<>
				<div className="border-b flex items-center justify-between px-2 py-3 border-gray-300 text-2xl text-semibold text-gray-700 flex">
					<h1>
						{edit && <>Edit Mode</>}

						{!edit && (
							<>
								{/* BECAUSE ROLE HAS TITLE! */}
								{role && <>{selectedOne?.title}</>}
								{/* BECAUSE EMPLOYEE HAS NAME! */}
								{!role && (
									<>
										{selectedOne?.firstName}&nbsp;
										{selectedOne?.lastName}
									</>
								)}
							</>
						)}
					</h1>
					<div className="flex items-center gap-2 ">
						<p className="font-semibold text-orange-500 text-sm">DETAILS</p>
						<IconComponent
							aside
							icon={
								<BiDotsVertical className="w-5 h-5 font-semibold text-blue-600" />
							}
							isClickable
							onClick={() => {
								setShowDelete(!showDelete);
							}}
						/>
						{showDelete && (
							<div
								className="absolute bg-gray-300  rounded-md overflow-hidden shadow-sm 
							lg:-ml-6 lg:mt-32 right-12 md:mt-24 mt-20 "
							>
								<p
									className=" flex gap-2 transition-all duration-500 items-center cursor-pointer text-green-500 bg-green-100 hover:bg-green-300 font-semibold text-sm px-8 py-2"
									onClick={() => {
										setEdit(true); // SO W E CAN ED IT INSTEAD OF VIEW!
										setShowDelete(!showDelete); // CLOSE THE MENU!
									}}
								>
									<BiEdit className="w-5 h-5 text-green-500" />
									Edit
								</p>
								<p
									className="flex gap-2 transition-all duration-500 items-center cursor-pointer text-red-500 bg-red-100 hover:bg-red-300 font-semibold text-sm px-8 py-2"
									onClick={() => {
										deleteFunction(selectedOne._id); // DELETING SELECTED ID!
										setShowDelete(!showDelete); // CLOSE THE MENU!
									}}
								>
									<BiSolidTrash className="w-5 h-5 text-red-500" />
									Delete
								</p>
								<p
									className="flex gap-2 transition-all duration-300 items-center cursor-pointer text-gray-500 bg-gray-100 hover:bg-gray-300 font-semibold text-sm px-8 py-2"
									onClick={() => {
										if (role) {
											// RIGHT NOW WE HAVE OPEN ROLE!!
											clearSelectedRole();
										} else {
											// ELSE WE OPEN ANY EMPLOYEE
											clearSelectedEmployee();
										}
										// CLEAR SELECTED ONE!
										setShowDelete(!showDelete); // CLOSE THE MENU!
									}}
								>
									<GrClearOption className="w-5 h-5 text-gray-500" />
									Clear
								</p>
							</div>
						)}
					</div>
				</div>
			</>
		</>
	);
}
