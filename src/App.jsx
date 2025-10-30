import { useState } from "react"
import { SelectNewRole } from "./components/SelectRoleDropdown"

function App() {


  const [ role, setRole ]=useState('student')


  //function for changing dashboard according to the role selected--> it will runs when role will change.
  function HandleRoleChange(newSelectedRole) {
    setRole(newSelectedRole)
  }


  return (
    <div>
      <h1 className="bg-green-300">hello ji</h1>
      <SelectNewRole OnRoleGetsChanged={HandleRoleChange}/>
    </div>
  )
}

export default App
