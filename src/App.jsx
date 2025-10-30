import { useState } from "react"
import { SelectNewRole } from "./components/SelectRoleDropdown"
import StudentDashboard from "./pages/studentDashboard"
import Navbar from "./components/Navbar"


function App() {


  const [ role, setRole ]=useState('student-1')


  //function for changing dashboard according to the role selected--> it will runs when role will change.
  function HandleRoleChange(newSelectedRole) {
    setRole(newSelectedRole)
  }


  return (
    <div>
      {/* <Navbar OnRoleGetsChanged={HandleRoleChange}/> */}
      <StudentDashboard studentName="student-3"  OnRoleGetsChanged={HandleRoleChange} />

    </div>
  )
}

export default App
