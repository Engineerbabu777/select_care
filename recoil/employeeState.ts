import { atom } from "recoil";

// INTERFACE!
interface EmployeeStateInterface {
	loadingEmployees: Boolean;
	totalNumberOfEmployee: Number;
	employees: any;
	selectedOne: any;
}

// INITIAL STATE!
const initialState: EmployeeStateInterface = {
	loadingEmployees: false,
	totalNumberOfEmployee: 0,
	employees: [],
	selectedOne: null,
};

// EXPORTING STATE!
export const employeeState = atom<EmployeeStateInterface>({
	default: initialState,
	key: "ENGINEER_BABU_ASSIGNMENT_2_EMPLOYEE",
});
