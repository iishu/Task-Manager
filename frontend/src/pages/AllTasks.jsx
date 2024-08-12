import React from 'react'
import Cards from '../components/Home/Cards'
import { IoIosAdd } from "react-icons/io";
import InputData from "../components/Home/InputData";
const AllTasks = () => {
  
  return (
   <>
    <div> 
      <div className="w-full flex justify-end px-4 py-2">
        <button> 
        <IoIosAdd className='text-4xl text-gray-300 hover:text-gray-100 transition-all duration-300'/>
        </button>
        </div>
      <Cards home={"true"}/>
    </div>
    <InputData />
    </>
  )
}

export default AllTasks