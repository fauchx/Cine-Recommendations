import React , { useState }from 'react'
import { RiMailLine, RiLockPasswordLine, RiUser3Fill, RiEyeFill, RiEyeOffLine  } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Register() {
    const[showPass, setShowPass] = useState(false)
    const onClickShow = () =>{
        setShowPass(!showPass)
    }
  return (
    <div className="bg-[whitesmoke] h-screen flex justify-center items-center font-sans">
    <div className="bg-purple-300 w-60 sm:w-96  p-6 rounded-lg shadow-md">
      <div className="justify-center flex flex-col items-center">
        <label className="text-4xl text-slate-500  my-4 font-bold">Registro</label>
        <form className=''>
            
    <div className="w-full justify-center items-center flex flex-col my-4 space-y-4">
        <div className="relative">
            <RiUser3Fill  className="absolute -translate-y-1/2 left-2 top-1/2" />
            <input
              type="text"
              required
              id="name"
              placeholder="Nombre"
              className="border pl-10 pr-4 text-xs rounded-md outline-none w-full py-2 text-black border-purple-400"
            />
          </div>
          <div className="relative">
            <RiMailLine className="absolute -translate-y-1/2 left-2 top-1/2" />
            <input
              type="email"
              required
              id="email"
              placeholder="Correo"
              className="border pl-10 pr-4 text-xs rounded-md outline-none w-full py-2 text-black border-purple-400"
            />
          </div>
          <div className="relative">
            <RiLockPasswordLine className="absolute -translate-y-1/2 left-2 top-1/2" />
            <input
              type={showPass? "text" : "password"}
              required
              id="password"
              placeholder="Contraseña"
              className="border pl-10 pr-4 text-xs rounded-md outline-none w-full py-2 text-black border-purple-400"
            />
            {showPass? 
            <RiEyeOffLine className="absolute -translate-y-1/2 right-2 top-1/2" onClick={onClickShow}/>
            :
            <RiEyeFill className="absolute -translate-y-1/2 right-2 top-1/2" onClick={onClickShow}/>    
        }
          </div>
          <div className="relative">
            <RiLockPasswordLine className="absolute -translate-y-1/2 left-2 top-1/2" />
            <input
              type={showPass? "text" : "password"}
              required
              id="password"
              placeholder="Confirmar contraseña"
              className="border pl-10 pr-4 text-xs rounded-md outline-none w-full py-2 text-black border-purple-400"
            />
            {showPass? 
            <RiEyeOffLine className="absolute -translate-y-1/2 right-2 top-1/2" onClick={onClickShow}/>
            :
            <RiEyeFill className="absolute -translate-y-1/2 right-2 top-1/2" onClick={onClickShow}/>    
        }
          </div>
          
        <div className="flex flex-row justify-around gap-x-10">
          <Link to="/">
            <button className="my-4 text-wrap rounded-md text-black shadow-md bg-purple-400 border hover:scale-105 transition-all ease-in sm:px-4 sm:py-2 px-2 py-1">
                Registrar
            </button>
          </Link>
        </div>
        </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register