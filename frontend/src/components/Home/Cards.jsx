import React from 'react';
import { IoHeartOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
 




const Cards = ({home, setInputDiv}) => {
  const data=[
    {
        title: "The best Coding channel",
        desc:"I have to create my channel the best ever coding channel in hindi for those who do not understand english properly.",
        status:"In Complete",
    },
    {
        title: "CPP concepts",
        desc:"I need to clear basics of CPP.",
        status:"Complete",
    },
    {
        title: "Assignment",
        desc:"My assignment on march 20. I have to complete it.",
        status:"In Complete",
    }, 
    {
        title: "Projects",
        desc:"For projects I need to see some desiging tutorials for better theme and template ideas",
        status:"In Complete",
    },
  ];
   return (
    <div className="grid grid-cols-3 gap-4 p-4">
        {data && data.map((items, i) =>(
        <div  className="flex flex-col justify-between bg-gray-700 rounded-sm p-4">
        <div >
            <h3 className="text-xl font-semibold">{items.title}</h3>
            <p className="text-gray-300 my-2"> {items.desc}</p>
            </div>
            <div className="mt-4 w-full flex items-center">
                <button className={`${items.status==="In Complete" ? "bg-red-400 " :"bg-green-700"} p-2 rounded w-3/6`}>
                    {items.status}
                </button>
                <div className="text-white   p-2 w-3/6 text-2xl font-semibold flex justify-around">
                <button>
                <IoHeartOutline/>
                </button>
                <button>
                    <FaEdit/>
                </button>
                <button>
                <MdOutlineDeleteOutline />
                </button>
                </div>
            </div>     
        </div>
        ))}
      {home==="true" &&(
          <button className="flex flex-col justify-center items-center bg-gray-700 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300" onClick={()=>setInputDiv("fixed")}>
          <IoIosAdd className='text-5xl' />
          <h2 className="text-2xl  mt-4">Add Task</h2>
                 
             </button>
      )}
       
     
    </div>
  )
}

export default Cards