import { useEffect, useState } from "react"

export function SelectNewRole({OnRoleGetsChanged}) {

    const [ role, setRole ]=useState(localStorage.getItem('role') || 'student-1')   //if first time then by default student

    useEffect( ()=>{
        localStorage.setItem("role", role)
        OnRoleGetsChanged(role)    //--> ab main app.jsx ke handlerolechange ko call karega.
    }, [role])

    return(
        <div>
            <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="p-2.5 border border-gray-300 rounded-lg bg-white text-gray-800 font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 cursor-pointer shadow-sm transition-all duration-200 ease-in-out"
                >
                    <option  value="admin">🧑‍💼 Admin</option>
                    
                <optgroup label="🎓 Students">
                    <option value="student-1">Student 1</option>
                    <option value="student-2">Student 2</option>
                    <option value="student-3">Student 3</option>
                    <option value="student-4">Student 4</option>
                </optgroup>

                {/* <option value="student">🎓 Student</option> */}

            </select>

        </div>
    )

    
}