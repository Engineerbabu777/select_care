import EditDeleteMenus from "@/components/shared/EditDeleteMenus";
import Heading from "@/components/shared/Heading";
import IconComponent from "@/components/shared/IconComponent";
import { BiDotsVertical } from "@/icons/icons";

type Props = {
	employee?: any;
	role?: any;
	edit: boolean;
	setEdit: any;
	setShowDelete:  any;
	showDelete: boolean;
	single?: boolean;
	deleteFunction: (id: string) => void;
	roleView?: boolean;
	employeeView?: boolean;
};

export default function CardHeading({
	employee,
	role,
	edit,
	setEdit,
	setShowDelete,
    showDelete,
	deleteFunction,
	roleView = false,
	employeeView=false,
}: Props) {

	console.log("HY-> ",role);
	return (
		<>
			{/* // IF USER/ROLE IS SELECTED! */}

			{/* ROLE-VIEW! */}
			{roleView && (
				<>
					<EditDeleteMenus
						edit={edit}
						setEdit={setEdit}
						selectedOne={role?.selectedRole}
						deleteFunction={deleteFunction}
						setShowDelete={setShowDelete}
						role
						showDelete={showDelete}
					/>
				</>
			)}

			{/* EMPLOYEE VIEW! */}
			{employeeView && (
				<>
					<EditDeleteMenus
						edit={edit}
						setEdit={setEdit}
						selectedOne={employee?.selectedOne}
						deleteFunction={deleteFunction}
						setShowDelete={setShowDelete}
						showDelete={showDelete}
					/>
				</>
			)}
		</>
	);
}
