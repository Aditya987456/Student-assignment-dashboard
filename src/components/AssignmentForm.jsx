import { useState } from "react"


export const AssignmentForm=({ onCreate })=>{


    //track the new assign with usestate firstly empty look like assignment then we put things in this.
    const [formData, setFormData]=useState({
        title:'',
        description:'',
        dueDate:'',
        driveLink:'',
    })


/*
---------------------------------------------------------------------------------
****How it “knows” what to replace
Because when two keys have the same name in an object literal,
the last one wins in JavaScript.
---------------------------------------------------------------------------------
---means when data is filling in form for creating assignment.
*/
    function HandleInputChange(e) {
        setFormData( (previousFormData)=>({
            ...previousFormData,
            [e.target.name]: e.target.value
        } ))
    }



    function CreateNewAssignment(e) {
        e.preventDefault();

        //title check
        if (!formData.title.trim()) {
            alert('Title required')
            return
        }

        //duedate check
        if (!formData.dueDate.trim()) {
            alert('dueDate required')
            return
        }

        //description --> optional.


    const fixedLink = "https://docs.google.com/forms/d/e/1FAIpQLSfXAtlAOnqU4k84tNLWJgK_nQgmS7EhTZ_wNozSaNXq9n44Hw/viewform";

    const finalData = {
        ...formData,
        driveLink: fixedLink,
    };

    onCreate(finalData); // use of this func in adminDashboard
   

    //--if all test passed then-
        alert(" Assignment created successfully!");


        //form data clearing
          setFormData({
            title: "",
            dueDate: "",
            description: "" ,
            driveLink:""
        });

    }





    return(
        <div>
            <form
            onSubmit={CreateNewAssignment}
            className="bg-white p-6 rounded-lg shadow-md mb-10 border border-gray-200"
            >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                type="text"
                name="title"
                //using this way - can send alert like title should be less than 100 words in realtime
                value={formData.title}   //starting me ""
                onChange={HandleInputChange}
                placeholder="Assignment Title *"
                className="border rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none"
                />

                <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={HandleInputChange}
                className="border rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none"
                />

                <input
                type="url"
                name="driveLink"
                value={formData.driveLink}
                onChange={HandleInputChange}
                placeholder="Google Drive Link (optional)"
                className="border rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none col-span-1 md:col-span-2"
                />

                <textarea
                name="description"
                value={formData.description}
                onChange={HandleInputChange}
                placeholder="Assignment Description"
                rows="3"
                className="border rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none col-span-1 md:col-span-2"
                />
            </div>

            <button
                type="submit"
                className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
            >
                Create Assignment
            </button>
            </form>
        </div>
    )
}