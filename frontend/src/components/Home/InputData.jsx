import React from 'react'

const InputData = () => {
  return (
    <>
    <div className="fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full"></div>
    <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full">
         <div className="w-3/6 bg-gray-900 p-4  rounded">
            <input type="text" placeholder="Title" name="title"></input>
         </div>
    </div>
   
        </>
  )
}

export default InputData