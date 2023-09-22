


import toast from "react-hot-toast";

// INSTEAD OF PUTTING INLINE/IN-COMPONENT WE DO THIS! THAT WILL INCREASE (READABILITY OF CODE)!
export const onChangeHandlerEdit = (
    e: React.ChangeEvent<HTMLInputElement>,
    setRoles: any,
    roles: any,
    edit: boolean
) => {

    
    // CAN'T EDIT!
    if (!edit) {
        toast("You are in a viewing mode!", {
            icon: "👏",
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });
        return;
    }

    // CAN EDIT!

    setRoles({
        ...roles,
        selectedRole: {
            ...roles.selectedRole, // SPREADING PREVIOUS!
            [e.target.name]: e.target.value, // CHANGING CURRENT TARGET!
        },
    });
};
