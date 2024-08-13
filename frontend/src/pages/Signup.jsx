import React from 'react'

const Signup = () => {
  return (
    <div className=" h-[98vh] flex items-center justify-center">
         <div className="p-4 w-2/6 rounded bg-gray-700">
            <div className='text-xl font-semibold'>Signup</div>
            <input type="username" 
            placeholder="username" 
            className="bg-gray-800 px-3 py-2 my-3 w-full rounded"
            name='username'
            />
            <input type="email" 
            placeholder="email" 
            className="bg-gray-800 px-3 py-2 my-3 w-full rounded"
            name='abc@example.com'
            required/>
            
            <input type="password" 
            placeholder="password" 
            className="bg-gray-800 px-3 py-2 my-3 w-full rounded"
            name='password'
            required />
            <button className='bg-blue-400 text-l font-semibold text-black px-2 py-1 rounded'>Signup</button>
         </div>
         </div>
  )
}

export default Signup