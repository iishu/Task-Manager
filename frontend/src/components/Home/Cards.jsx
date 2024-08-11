import React from 'react';
import { IoHeartOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";



const Cards = () => {
  const data=[
    {
        title: "The best Coding channel",
        desc:"I have to create my channel the best ever coding channel in hindi for those who do not understand english properly.",
    },
    {
        title: "CPP concepts",
        desc:"I need to clear basics of CPP.",
    },
    {
        title: "Assignment",
        desc:"My assignment on march 20. I have to complete it.",
    },
    {
        title: "Projects",
        desc:"For projects I need to see some desiging tutorials for better theme and template ideas",
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
                <button className="bg-red-400  p-2 rounded w-3/6">
                    In Complete
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
     <div  className="flex flex-col justify-between bg-gray-700 rounded-sm p-4">
            <h2>Add tasks</h2>
            
        </div>

    </div>
  )
}

export default Cards