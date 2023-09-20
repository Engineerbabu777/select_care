import { validateRoleData } from "@/utils/role/dataValidations";
import { roleState } from "@/recoil/roleState";
import { useRecoilState } from "recoil";


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
					});
				});
			})
			.catch((err: any) => {
				setRole({ ...role, loadingRoles: false });
				// WILL WRITE HERE LATER  MORE !!!
			});

		// VALIDATE IF ERROR EXITS OR NOT !!
	};

	// useEffect(() => {
	// 	getRoles();
	// }, []);

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
	const deleteRole = () => {};

	// EDIT ANY ROLE!
	const editRole = () => {};

	return {
		createNewRole,
		deleteRole,
		editRole,
		getRoles,
	};
}
