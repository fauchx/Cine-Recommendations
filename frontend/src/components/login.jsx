import React from 'react'

export default function Login() {
  return (
    <div className=' w-full flex'>
            <div className="justify-center flex flex-col items-center h-screen w-1/2">
            <label className='text-xl text-neutral-600 my-4 '>Login</label>
            <div className='flex flex-row gap-x-8 my-4 items-start'>
                <input type='email' required id='email' className='border text-xs rounded-md  text-wrap w-1/2 p-2 text-black border-purple-400'/>
                <label id='email_input' htmlFor='email'>
                    Email</label> 
            </div>
            <div className='flex flex-row gap-x-8 my-4 items-start'>
                <input type='password' required id='password' className='border text-xs  rounded-md w-1/2 p-2 text-black border-purple-400'/>
                <label id='email_input' htmlFor='email'>
                    Password</label> 
            </div>
            <button className='my-4 rounded-md text-black bg-purple-400 border border-black hover:scale-105 transition-all ease-in px-4 py-2'>
                Entrar
            </button>
            <button className='my-4 rounded-md text-black bg-purple-400 border border-black hover:scale-105 transition-all ease-in px-4 py-2'>
                No tienes cuenta?
            </button>
        </div>
        <div className="justify-center flex flex-col items-center h-screen w-1/2 bg-slate-600">
         <p className='text-4xl text-red-600 hover:scale-110'> IMAGEN</p>
    </div>
    </div>
    
  )
}
