import { useState } from "react"


export const AssignmentForm=()=>{

    //on form submit-- like creating a new assignment.
    function CreateNewAssignment(e) {
        e.preventDefault()
        alert('Assignment Created successfully')
    }


    //track the new assign with usestate firstly empty look like assignment then we put things in this.
    const [formData, setFormData]=useState({
        title:'',
        description:'' | 'No description provided',
        dueDate:'',
        driveLink:'',
    })

    function HandleInputChange() {
        
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
                value={formData.title}
                onChange={handleChange}
                placeholder="Assignment Title *"
                className="border rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none"
                />

                <input
                type="date"
                name="dueDate"
                //   value={formData.dueDate}
                //   onChange={handleChange}
                className="border rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none"
                />

                <input
                type="url"
                name="driveLink"
                //   value={formData.driveLink}
                //   onChange={handleChange}
                placeholder="Google Drive Link (optional)"
                className="border rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none col-span-1 md:col-span-2"
                />

                <textarea
                name="description"
                //   value={formData.description}
                //   onChange={handleChange}
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