import React from 'react'
 
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className=" h-[98vh] flex items-center justify-center">
         <div className="p-4 w-2/6 rounded bg-gray-700">
            <div className='text-xl font-semibold'>SignUp</div>
            <input type="text" 
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
  <div className='w-full flex items-center justify-between'>
            <button className='bg-blue-400 text-l font-semibold text-black px-2 py-1 rounded'>SignUp</button>
            <Link to='/login' className='text-gray-400 hover:text-gray-200'>Already having an account? Login here</Link>

            </div>         
            </div>
         </div>
  )
}

export default Signup