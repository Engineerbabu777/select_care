

import { employeeState } from "@/recoil/employeeState";
import { employeeValidation } from "@/utils/user/employeeValidations";
import { useRecoilState } from "recoil";
import toast from "react-hot-toast";

export default function useEmployee() {
	const [employees, setEmployees] = useRecoilState(employeeState); // CHANGE TO EMPLOYEE!

	// GET ALL EMPLOYEES!
	const getEmployees = async () => {
		setEmployees({ ...employees, loadingEmployees: true });
		try {
			// MAKE A GET REQUEST! !
			fetch("/api/employee")
				.then((response: any) => {
					response.json().then((data: any) => {
						setEmployees({
							employees: data?.employees, // SETTING ALL EMPLOYEES
							totalNumberOfEmployee: data?.employees?.length, // SETTING TOTAL NUMBER OF EMPLOYEES!
							loadingEmployees: false, // LOADING STATE!
							selectedOne: null, // SELECTED EMPLOYEE INITIAL STATE!
							assigned: data?.employees?.filter(
								(emp: any) => emp?.role !== null
							), // ANY ROLE!
							nonAssigned: data?.employees?.filter(
								(emp: any) => emp?.role === null
							), // NO-ROLE EMPLOYEES
						});
					});
				})
				.catch((err: any) => {
					// GIVING ERROR NOTIFICATION!
					toast.error("FETCHING ERROR-> ", err.message);

					setEmployees({ ...employees, loadingEmployees: false });
					// WILL WRITE HERE LATER  MORE !!!
				});
		} catch (err: any) {
			// GIVING ERROR NOTIFICATION!
			toast.error("FETCHING ERROR-> ", err.message);
		}

		// VALIDATE IF ERROR EXITS OR NOT !!
	};

	// CREATE NEW EMPLOYEE!
	const createNewEmployee = async (user: any) => {
		try {
			// VALIDATING DATA!
			const validator = employeeValidation(
				user.firstName,
				user.lastName,
				user.email
			);

			// MAKE A POST REQUEST TO SAVE DATA IN OUR DATABASE!
			if (validator) {
				const result = await fetch("/api/employee", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						accept: "application/json",
					},
					body: JSON.stringify(user),
				});

				const data = await result.json();

				// IF ERROR THEN RETURN ERROR!
				if(data.error){
					return { error: true, message: data.message };
				}
				
				getEmployees(); // AFTER CREATING NEW EMPLOYEE GETTING FRESH EMPLOYEES DATA!
				return { success: true, message: "Employee created successfully!" }; // RETURNING SUCCESS MESSAGE!
			}
		} catch (err: any) {
			// GIVING TOAST NOTIFICATION!
			toast.error(err.message)
			console.log('ERROR WHILE CREATING NEW EMPLOYEE-> ',err);
			return { error: true, message: err.message };
		}
	};

	// DELETE ANY EMPLOYEE!
	const deleteEmployee = (id: string) => {
		try {
			// DELETE FROM STATE!
			setEmployees({
				...employees,
				employees: employees?.employees.filter((u: any) => u._id !== id),
				selectedOne: null,
			}); // THAT WILL REMOVE DELETION ID AND MAKE SELECTED NULL ON RIGHT SIDE!

			// WE CAN ALSO CHECK FROM OUR STATE THAT IF ID IS AVAILABLE THEN REMOVE FROM DATABASE OTHERWISE NOT MAKE A DELETE REQUEST! (IN FUTURE!) !

			// OTHERWISE DELETE REQUEST!
			fetch("/api/employee?id=" + id, { method: "DELETE" }).then(
				(response: any) =>
					response.json().then((data: any) => console.log(data))
			);

			toast.success("DELETION SUCCESSFUL!");

			// THAT MEANS EVERYTHING IS OK FETCH REFRESH DATA!
			// getEmployees();
		} catch (error: any) {
			console.log("DELETION ERROR:-> ", error.message);
		}
	};

	// EDIT ANY EMPLOYEE
	
	const editEmployee = async () => {

		const { firstName, lastName, email, role, _id } = employees.selectedOne; // DESTRUCTURING SELECTED-ONE OBJECT!


		try {
			// VALIDATING DATA!
			const validator = employeeValidation(firstName, lastName, email);
			const body = {
				firstName,
				lastName,
				email,
				role,
				_id,
			};
			// EVERTING IS OK!
			// PUT REQUEST!
			if (validator) {
				fetch("/api/employee", {
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

			// GIVING SUCCESS NOTIFICATION!
			toast.success("EDIT SUCCESSFUL!");
			getEmployees(); // GETTING FRESH EMPLOYEES!
			return { success: true, message: "Employee updated successfully!" };
		} catch (error: any) {
			toast.error(error.message); // GIVING TOAST ERROR!
			// console.log('ERROR: ', error.message);
		}
	};

	// CLEAR SELECTED ROLE!
	const clearSelectedEmployee = () => {
		setEmployees({ ...employees, selectedOne: null });
	};

	return {
		createNewEmployee,
		employees,
		getEmployees,
		deleteEmployee,
		editEmployee,
		clearSelectedEmployee,
	};
}
