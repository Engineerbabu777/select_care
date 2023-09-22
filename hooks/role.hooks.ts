'use client';

import { validateRoleData } from "@/utils/role/dataValidations";
import { roleState } from "@/recoil/roleState";
import { useRecoilState } from "recoil";
import toast from "react-hot-toast";
import { useEffect } from 'react';

export default function useRole() {
	// REQUIRED STATES!
	const [role, setRole] = useRecoilState(roleState);

	// GET ALL ROLES!
	const getRoles = async () => {
		setRole({ ...role, loadingRoles: true });

		// MAKE A GET REQUEST! (PUT IN TRY CATCH AT LAST!)!
		fetch("/api/role")
			.then((response: any) => {
				response.json().then((data: any) => {
					setRole({
						roles: data?.roles,
						totalNumberOfRoles: data?.roles?.length,
						loadingRoles: false,
						selectedRole: null,
					});
				});
			})
			.catch((err: any) => {
				setRole({ ...role, loadingRoles: false });
				// WILL WRITE HERE LATER  MORE !!!
			});

		// VALIDATE IF ERROR EXITS OR NOT !!
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
			console.log("HELLO FROM USE ROLE HOOK!");
			return { error: err.message };
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

			toast.success("DELETION SUCCESSFUL!");

			// THAT MEANS EVERYTHING IS OK FETCH REFRESH DATA!
		} catch (error: any) {
			console.log("DELETION ERROR:-> ", error.message);
		}
	};

	// EDIT ANY ROLE!
	const editRole = () => {
		const { _id, title, description, isActive } = role?.selectedRole;
		try {
			const validator = validateRoleData(title, description, isActive);

			const body = { title, description, isActive, _id };

			// EVERTING IS OK!
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
			toast.success("EDIT SUCCESSFUL!");
			getRoles(); // GETTING FRESH ROLES!
			return { success: true, message: "Roles updated successfully!" };
		} catch (err: any) {}
	};

	return {
		createNewRole,
		deleteRole,
		editRole,
		getRoles,
	};
}
