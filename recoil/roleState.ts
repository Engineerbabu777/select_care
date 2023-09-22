

import { atom } from "recoil";



// INTERFACE!
interface RoleStateInterface {
	loadingRoles: Boolean;
	totalNumberOfRoles: Number;
	roles: any;
	selectedRole: any;

	// FOR BOTTOM PAGINATION(MIGHT BE NEED)!
}

// INITIAL STATE!
const initialState: RoleStateInterface = {
	loadingRoles: false,
	totalNumberOfRoles: 0,
	roles: [],
	selectedRole:null,
};

// EXPORTING STATE!
export const roleState = atom<RoleStateInterface>({
	default: initialState,
	key: "ENGINEER_BABU_ASSIGNMENT_2_ROLE",
});
