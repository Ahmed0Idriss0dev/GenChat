import {  Fullscreen, X } from 'lucide-react'
import logo from '../assets/logo.svg'
const Frame = () => {


  function CloseScreen(){
    window.electronAPI.CloseApp()
  }
  function FullScreen(){
    window.electronAPI.FullScreen()
  }
  
  return (
    <div className='flex drag border-b   p-3 justify-between items-center w-full h-14'>
         <div className="flex justify-start gap-1 items-center">
        <img className='w-11 h-11' src={logo} />
        <p className='text-transparent bg-clip-text text-2xl bg-gradient-to-tr from-red-400 to-blue-600'>GenChat</p>
         </div>
        <div className="flex justify-start gap-2 items-center">
         
        <button  onClick={FullScreen}  className='opacity-35 noddarg cursor-pointer w-11 h-11 flex justify-center items-center'>
          <Fullscreen/>
        </button>
        <button  onClick={CloseScreen}  className='opacity-35 noddarg cursor-pointer w-11 h-11 flex justify-center items-center'>
          <X/>
        </button>
        </div>
    </div>
  )
}

export default Frame