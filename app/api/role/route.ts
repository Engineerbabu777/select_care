

import { databaseConnect } from "@/database/mongooseConnect";
import { roleModel } from "@/models/role.model";
import { NextResponse } from "next/server";


// HERE IN THIS FUNCTION WE WILL BE HANDLE POST REQUEST POST REQUEST!
export async function POST(request:Request){


    const body = await request.json();  
    const {title, description, isActive} = body;

    // WILL PUT THINGS IN TRY CATCH LATER!
    
    
    // SAVING DATA IN OUR DATABASE!
    databaseConnect();

    // CREATING NEW DOCUMENT!
    const newDoc = await roleModel.create({
        title, description, isActive
    });

    
    return NextResponse.json({success:true,data:newDoc});

}