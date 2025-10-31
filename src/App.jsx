import { useState } from "react"
import { SelectNewRole } from "./components/SelectRoleDropdown"
import StudentDashboard from "./pages/studentDashboard"
// import AdminDashboard from "./pages/adminDashboard"
import { AssignmentForm } from "./components/AssignmentForm"
// import Navbar from "./components/Navbar"
// import AdminDashboard from "./pages/adminDashboard"


function App() {


  const [ role, setRole ]=useState('student-1')


  //function for changing dashboard according to the role selected--> it will runs when role will change.
  function HandleRoleChange(newSelectedRole) {
    setRole(newSelectedRole)
  }


  return (
    <div>
      {/* <Navbar OnRoleGetsChanged={HandleRoleChange}/> */}
      {/* <StudentDashboard studentName="student-3"  OnRoleGetsChanged={HandleRoleChange} /> */}
{/* <AdminDashboard on OnRoleGetsChanged={HandleRoleChange}/> */}
<AssignmentForm/>
    </div>
  )
}

export default App
