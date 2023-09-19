

import { validateRoleData } from "@/utils/role/dataValidations";


export default function useRole() {

    // CREATE NEW ROLE!
    const createNewRole = async(role:any) => {

        try {
        
            // VALIDATE DATA!
            const validator = validateRoleData(role.title, role.description, role.isActive);

            
            if (validator) {
                const data = await fetch('/api/role', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json',
                    },
                    body: JSON.stringify(role),
                });

                console.log(data);
                return { success: true};
            }

        } catch (err: any) {
            console.log("HELLO FROM USE ROLE HOOK!");
            return { error: err.message };
        }
        
    }

    // DELETE ANY ROLE!
    const deleteRole = () => { }

    // EDIT ANY ROLE!
    const editRole = () => { }

    // GET ALL ROLES!
    const getRoles = () => { }




    return {createNewRole, deleteRole, editRole, getRoles}
}