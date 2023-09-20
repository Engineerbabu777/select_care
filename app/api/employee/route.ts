import { databaseConnect } from '@/database/mongooseConnect'
import { employeeModel } from '@/models/employee.model'
import { roleModel } from '@/models/role.model'
import { NextResponse } from 'next/server'

export async function POST (request: Request) {
  try {
    // CREATING CONNECTION WITH DATABASE!
    databaseConnect()

    const body = await request.json()

    const { lastName, firstName, email, role } = body

    // ADD EMPLOYEE TO DATABASE!
    const newDoc = await employeeModel.create({
      firstName,
      lastName,
      email,
      role
    })

    console.log('HELLO FROM SERVER:-> ', body)

    return NextResponse.json({ success: true, newDoc })
  } catch (err: any) {
    console.log(err.message)
    return NextResponse.json({ error: true, message: err.message })
  }
}

export async function GET (request: Request) {
    try {
        // CREATING CONNECTION WITH DATABASE!
        databaseConnect();

        // FETCHING DATA!
        const emp = await employeeModel.find({}).populate('role',{path:roleModel});

        console.log(emp);

        return NextResponse.json({ success: true, employees: emp });


    } catch (err: any) {
        console.log(err?.message);
        return NextResponse.json({error:true, message:err?.message});
        
    }
}
