import { displayStateAtom } from "@/recoil/display-state";
import { useRecoilState } from "recoil";
import {
	FaIdCardClip,
	IoIosAddCircle,
	MdCompost,
	MdEngineering,
	RiGroup2Fill,
} from "@/icons/icons";
import IconComponent from "../shared/IconComponent";
import { ModalState } from "@/recoil/modelState";
import Modal from "../shared/Modal";
import UserModalBody from "../Modals/User/Body";
import RoleModalBody from "../Modals/Role/Body";
import Card from "../shared/Card";
import SidebarFixedBarIcons from "../shared/SidebarFixedBarIcons";

export default function FixedNavbar() {
	const [display, setDisplay] = useRecoilState(displayStateAtom);
	const [modalState, setModalState] = useRecoilState(ModalState);

	// FUNCTION FOR SHOW/NO-SHOW MODAL! (WILL MOVE THIS TO UTILS!)
	const toggleModal = () => {
		setModalState({ ...modalState, isOpen: !modalState.isOpen }); // TOGGLING THE STATE!
	};

	return (
		<>
			{/* SHOW MODAL IF NEEDED! */}
			<Modal
				showModal={modalState.isOpen}
				header={
					// HEADING OF MODAL BASED ON CURRENT DISPLAY STATE!
					display.display === "USER" ? "Create New User" : "Create New Role"
				}
				body={
					// BODY OF MODAL BASED ON CURRENT DISPLAY STATE!
					display.display === "USER" ? (
						<UserModalBody closeModal={toggleModal} />
					) : (
						<RoleModalBody closeModal={toggleModal} />
					)
				}
			/>
			<div className="mx-4">
				<Card>
					<div className="flex gap-1 px-4 justify-between items-center">
						<SidebarFixedBarIcons header />
					</div>
				</Card>
			</div>
		</>
	);
}
