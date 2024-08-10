import React from 'react'
import {CgNotes} from "react-icons/cg";
import {MdLabelImportant} from "react-icons/md";
import {FaCheckDouble} from "react-icons/fa6";
import {TbNotebookOff} from "react-icons/tb";

const Sidebar = () => {
const data=[
    {
        title: 'All tasks',
        icon: <CgNotes/>,
    },
    {
        title: 'Important tasks',
        icon: <MdLabelImportant/>,
    },
    {
        title: 'Completed tasks',
        icon: <FaCheckDouble/>,
    },
    {
        title: 'Incompleted tasks',
        icon: <TbNotebookOff/>,
    },

];
  return (
    <>
        <div>
        <h2 className="text-xl font-semibold">The code master</h2>
        <h4 className="mb-1 text-gray-400">ishika@gmail.com</h4>
        <hr/>
    </div>
    <div>
        {data.map((items,i)=> (
            <div className="my-2 flex items-center gap-2 hover:bg-gray-600 p-2 rounded transition-all duration-300">{items.icon} {items.title}</div>
        ))}
    </div>
    <div><button className='bg-gray-500 w-full p-2 rounded'>Log Out</button>
    </div>
    </>

  )
}

export default Sidebar