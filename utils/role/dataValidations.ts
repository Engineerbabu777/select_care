



export const validateRoleData = (title:string, description:string, active:boolean) => {

    // CHECK IF TITLE IS LESS THAN 2!
    if (title.length<2) {
        throw new Error('Your title is too small!');     
    }

    // CHECK IF DESCRIPTION IS LESS THAN 15!
    if (description.length < 10) {
        throw new Error('Your description length must be 10');
    }

    // RETURN TRUE!
    return true; // MEANS ALL OK!
}