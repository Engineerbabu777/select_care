



// UPDATING STATE FUNCTION FOR MAIN PART OF PAGE!
export const updateState = (isTrue:boolean, onClick:()=>void) => {

    // CHECKING IF ONCLICK AVAILABLE OR NOT!
    if(!isTrue) return; // RETURN IF BUTTON IS NOT CLICKABLE!
        
    // RUNNING THE PROVIDED FUNCTION!
    onClick();

};