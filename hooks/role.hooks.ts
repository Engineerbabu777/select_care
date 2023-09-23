

import { validateRoleData } from "@/utils/role/dataValidations";
import { roleState } from "@/recoil/roleState";
import { useRecoilState } from "recoil";
import toast from "react-hot-toast";


export default function useRole() {

	// REQUIRED STATES!
	const [role, setRole] = useRecoilState(roleState);


	// GET ALL ROLES!
	const getRoles = async () => {
		setRole({ ...role, loadingRoles: true }); // THAT WILL SHOW LOADING!!

		// MAKE A GET REQUEST! (PUT IN TRY CATCH AT LAST!)!
		fetch("/api/role")
			.then((response: any) => {
				response.json().then((data: any) => {
					setRole({
						roles: data?.roles, // SETTING ROLES COMING FROM DB!
						totalNumberOfRoles: data?.roles?.length, // SETTING LENGTH OF ROLES FROM DB!
						loadingRoles: false, // THAT WILL STOP THE LOADING AND WILL MAP THROUGH ROLES TO B VIEW ON PAGE!
						selectedRole: null, // INITIALLY NON-ROLE IS SELECTED!
					});
				});
			})
			.catch((err: any) => {
				setRole({ ...role, loadingRoles: false });
				// WILL WRITE HERE LATER  MORE !!!
			});

	};


	// CREATE NEW ROLE!
	const createNewRole = async (role: any) => {
		try {

			// VALIDATE DATA!
			const validator = validateRoleData(
				role.title,
				role.description,
				role.isActive
			);

			// NO ERROR SO WE CAN MOVE FORWARD POST REQUEST!
			if (validator) {
				const data = await fetch("/api/role", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						accept: "application/json",
					},
					body: JSON.stringify(role),
				});

				const newDocs = await getRoles();

				console.log(data, newDocs);
				return { success: true };
			}
		} catch (err: any) {
			// IF ERROR WE WILL PRINT TO CONSOLE!
			console.log("HELLO FROM USE ROLE HOOK!");
			return { error: err.message }; // RETURNING ERROR WHILE CREATING ROLE!
		}
	};

	// DELETE ANY ROLE!
	const deleteRole = (id: string) => {
		try {
			// DELETE FROM STATE!
			setRole({
				...role,
				roles: role?.roles.filter((u: any) => u._id !== id),
				selectedRole: null,
			}); // THAT WILL REMOVE DELETION ID AND MAKE SELECTED NULL ON RIGHT SIDE!

			// WE CAN ALSO CHECK FROM OUR STATE THAT IF ID IS AVAILABLE THEN REMOVE FROM DATABASE OTHERWISE NOT MAKE A DELETE REQUEST! (IN FUTURE!) !!


			// OTHERWISE DELETE REQUEST!
			fetch("/api/role?id=" + id, { method: "DELETE" }).then((response: any) =>
				response.json().then((data: any) => console.log(data))
			);

			// GIVING TOAST NOTIFICATION OF SUCCESS!
			toast.success("DELETION SUCCESSFUL!");

			// THAT MEANS EVERYTHING IS OK FETCH REFRESH DATA!
		} catch (error: any) {
			// GIVING TOAST NOTIFICATION OF ERROR!
			toast.success("DELETION FAILED!");
			console.log("DELETION ERROR:-> ", error.message);
		}
	};

	// EDIT ANY ROLE!
	const editRole = () => {
		const { _id, title, description, isActive } = role?.selectedRole;
		try {
			// VALIDATING OUR DATA!
			const validator = validateRoleData(title, description, isActive);

			const body = { title, description, isActive, _id };

			// EVERTING IS OK NOW MOVE TO PUT REQUEST!
			if (validator) {
				// UPDATE DATA IN DATABASE!
				fetch("/api/role", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						accept: "application/json",
					},
					body: JSON.stringify(body),
				})
					.then((response: any) =>
						response.json().then((data: any) => console.log(data))
					)
					.catch((er: any) => console.log(er?.message));
			}
			// PUT REQUEST SUCCEED NOTIFICATION!
			toast.success("EDIT SUCCESSFUL!");
			getRoles(); // GETTING FRESH ROLES!
			return { success: true, message: "Roles updated successfully!" };
		} catch (err: any) {}
	};


	// CLEAR SELECTED ROLE!
	const clearSelectedRole = () => {
		setRole({...role,selectedRole:null})
	}

	return {
		createNewRole,
		deleteRole,
		editRole,
		getRoles,
		clearSelectedRole
	};
}
