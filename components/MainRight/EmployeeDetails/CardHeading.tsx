import Heading from "@/components/shared/Heading";
import IconComponent from "@/components/shared/IconComponent";
import { BiDotsVertical } from "@/icons/icons";

type Props = {
	employee: any;
	edit: boolean;
	setEdit: any;
	setShowDelete: any;
	showDelete: boolean;
    single?: boolean;
    deleteEmployee?:(id:string) => void,
};

export default function CardHeading({
	employee,
	edit,
	setEdit,
	setShowDelete,
    showDelete,
    single=false,
    deleteEmployee,
}: Props) {
	return (
		<>
			{/* // IF NO USER IS SELECTED! */}
			{!employee?.selectedOne && (
				<>
					<div className="h-full w-full">
						<Heading heading={'Select an Employee'} />
						<p className="px-1 py-2 text-sm text-gray-700">
							Select a user to see its details here.
						</p>
					</div>
				</>
			)}

			{/* // IF USER IS SELECTED! */}
			{employee.selectedOne && single && (
				<>
					<div className="border-b flex items-center justify-between px-2 py-3 border-gray-300 text-2xl text-semibold text-gray-700 flex">
						<h1>
							{edit && <>Edit Mode</>}

							{!edit && (
								<>
									{employee?.selectedOne?.firstName}&nbsp;
									{employee?.selectedOne?.lastName}
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
								<div className="absolute bg-gray-300 rounded-md overflow-hidden shadow-sm mt-24">
									<p
										className="cursor-pointer text-green-500 bg-green-100 hover:bg-green-200 font-semibold text-sm px-6 py-2"
										onClick={() => {
											setEdit(true); // SO W E CAN ED IT INSTEAD OF VIEW!
											setShowDelete(!showDelete); // CLOSE THE MENU!
										}}
									>
										Edit
									</p>
									<p
										className="cursor-pointer text-red-500 bg-red-100 hover:bg-red-200 font-semibold text-sm px-6 py-2"
										onClick={() => {
											deleteEmployee(employee.selectedOne._id); // DELETING SELECTED ID!
											setShowDelete(!showDelete); // CLOSE THE MENU!
										}}
									>
										Delete
									</p>
								</div>
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
}
