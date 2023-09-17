



// UPDATING STATE FUNCTION FOR MAIN PART OF PAGE!
export const updateState = (isTrue:Boolean, onClick:()=>void) => {

    // CHECKING IF ONCLICK AVAILABLE OR NOT!
    if(!isTrue) return; // RETURN IF BUTTON IS NOT CLICKABLE!
        
    // RUNNING THE PROVIDED FUNCTION!
    onClick();

};