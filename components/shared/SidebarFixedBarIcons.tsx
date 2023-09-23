import { useRecoilState } from "recoil";
import { displayStateAtom } from "@/recoil/display-state";
import { ModalState } from "@/recoil/modelState";
import AddIcon from "./SharedIcons/AddIcon";
import ShowEmployeesIcon from "./SharedIcons/ShowEmployeesIcon";
import ShowRolesIcon from "./SharedIcons/ShowRolesIcon";
import DivideEmployeesIcon from "./SharedIcons/DivideEmployeesIcon";
import DeveloperIcon from "./SharedIcons/DeveloperIcon";

type Props = {
	aside?: boolean;
	header?: boolean;
};

export default function SidebarFixedBarIcons({
	aside = false,
	header = false,
}: Props) {

	const [display, setDisplay] = useRecoilState(displayStateAtom);
	const [modalState, setModalState] = useRecoilState(ModalState);

	// FUNCTION FOR SHOW/NO-SHOW MODAL! (WILL MOVE THIS TO UTILS!)
	const toggleModal = () => {
		setModalState({ ...modalState, isOpen: !modalState.isOpen }); // TOGGLING THE STATE!
	};


	return (
		<>
			{/* {TO ADD USERS/ROLES!} */}
			<AddIcon
				toggleModal={toggleModal}
				aside={aside}
				header={header}
				display={display.display}
			/>

			{/* ONLY FOR SIDEBAR!! */}
			{aside && <hr className=" bg-gray-500 w-8" />}

			{/*TO DISPLAY USERS IN LEFT SECTION! */}
			<ShowEmployeesIcon
				aside={aside}
				header={header}
				display={display}
				setDisplay={setDisplay}
			/>

			{/*TO DISPLAY ROLES IN LEFT SECTION */}
			<ShowRolesIcon
				aside={aside}
				header={header}
				display={display}
				setDisplay={setDisplay}
			/>

			{/* WILL SHOW FOR USER SIGNED/UNSIGNED ON RIGHT-SIDE! */}
			<DivideEmployeesIcon
				aside={aside}
				header={header}
				display={display}
				setDisplay={setDisplay}
			/>

			{/* DEVELOPER INFO! */}
			<DeveloperIcon
				aside={aside}
				header={header}
				display={display}
				setDisplay={setDisplay}
			/>
		</>
	);
}
