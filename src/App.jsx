import { useState, useEffect } from "react"
//import { SelectNewRole } from "./components/SelectRoleDropdown"
import StudentDashboard from "./pages/studentDashboard"
import AdminDashboard from "./pages/adminDashboard"
import { AssignmentForm } from "./components/AssignmentForm"
import Navbar from "./components/Navbar"
//import AdminDashboard from "./pages/adminDashboard"


function App() {


  const [ role, setRole ]=useState(localStorage.getItem("role") || "student-1")

  const [ assignments, setAssignments]=useState([])

//when app firstly runs load assignment from local storage and if not there then show this bydefault
  useEffect(() => {
    const savedAssignments = localStorage.getItem("assignments");

    if (savedAssignments) {
      setAssignments(JSON.parse(savedAssignments));
    } else {
      setAssignments([
        {
          id: "demo-1",
          title: "Maths Unit - 8",
          description:
            "Solve all previous year questions of Coordinate Geometry (JEE Mains).",
          dueDate: "2025-12-12",
          driveLink: "",
          submitted_Students: {
            "student-1": true,
            "student-2": false,
            "student-3": true,
            "student-4": false,
          },
        },
        {
          id: "demo-2",
          title: "Physics Chapter - 6",
          description:
            "Complete derivations from NCERT and watch lecture 3 on oscillations.",
          dueDate: "2025-12-15",
          driveLink: "",
          submitted_Students: {
            "student-1": false,
            "student-2": false,
            "student-3": false,
            "student-4": false,
          },
        },
      ]);
    }
  }, []);


useEffect(() => {
    localStorage.setItem("role", role);
  }, [role]);


//if change in assignments.
    useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);



//function for changing dashboard according to the role selected--> it will runs when role will change.
  function HandleRoleChange(newSelectedRole) {
    setRole(newSelectedRole)
  }

//this funtion for decide title and pass to navbar
   const getDashboardTitle = () => {
    if (role === "admin") return "👨‍🏫 Admin Dashboard";
    return `🎓 Student Dashboard`;
  };



//----------------- when assignment created -- admin ------------------------------------
  const handleCreateAssignment = (newAssignment) => {
    setAssignments((prev) => [
      ...prev,
      {
        ...newAssignment, 
        //since new assignment has only title, description, drive now we the id and student_submitted all these things is same in all the new assignments therefore we adding here
         id: Date.now().toString(),    //timestamp will be the unique id.
        submitted_Students: {
          "student-1": false,
          "student-2": false,
          "student-3": false,
          "student-4": false,
        },
      },
    ]);
  };




//------------------ when assignment submit  -- for student---------------------------------
const handleSubmit = (assignmentId, studentName) => {


  setAssignments((prevAssignments) => {


    return prevAssignments.map((assignment) => {

      // check kya aisa koi assignment hai jo submit hua hai abhi .
      if (assignment.id === assignmentId) {
        return {
          ...assignment, //all is same only update student submission.

          submitted_Students: {
            ...assignment.submitted_Students, // here also all is same only update that student who submitted
            [studentName]: true,
          },
        };
      }

     //if no assignment like that is there.
      return assignment;
    });
  });
};









  return (
//     <div>
//       {/* <Navbar OnRoleGetsChanged={HandleRoleChange}/> */}
//       {/* <StudentDashboard studentName="student-3"  OnRoleGetsChanged={HandleRoleChange} /> */}
// <AdminDashboard OnRoleGetsChanged={HandleRoleChange}/>

//     </div>
    <div className="min-h-screen bg-gray-50 flex flex-col">
  
      <Navbar title={getDashboardTitle()} OnRoleGetsChanged={HandleRoleChange} />


      <div className="p-6 max-w-6xl mx-auto w-full">
        {role === "admin" ?
         (
          <AdminDashboard
            assignments={assignments}
            onAddAssignment={handleCreateAssignment}
          />
        ) 

        : 

        (
          <StudentDashboard
            studentName={role}
            assignments={assignments}
            handleSubmit={handleSubmit}
          />
        )
        
        }
      </div>
    </div>
  )
}

export default App
