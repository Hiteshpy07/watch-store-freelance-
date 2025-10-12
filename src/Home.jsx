import { useState } from 'react'
import Navbar from './Navbar'
import WatchCard from './WatchCard'


function Home() {
  const [Cartopen, setCartopen] = useState(false)

  return (
    <div className='bg-black w-full h-screen overflow-y-auto relative'>
      <Navbar/>
      <div className=' h-[300px] w-full bg-slate-500'>poster part with slide motion  </div>
      <div className='flex bg-slate-400 h-[200px] justify-between '>
        {/* for watches category in gender */}
        <div  className='bg-slate-700 w-[48%] m-4'>
          men
        </div>
        <div className='bg-slate-800 w-[48%] m-4'>
          women
        </div>
      </div>
      <WatchCard/>
      
      
    </div>

    
  )
}

export default Home

// {/* <div className={` w-[70vh] ${cartopen?"overflow:auto translate-x-0":"translate-x-full"} h-[100%] bg-amber-50 fixed top-0 right-0 shadow-xl p-2 rounded-lg transition duration-150`}>
//     {/* this is for the cart... */}
//     <div className='flex justify-between '>
//     <span className='text-xl mt-1 ml-2 font-semibold'>Order items</span>
//     <span className='cursor-pointer font-bold text-xl mt-2 mr-2 ' onClick={()=>setcartopen(false)}><RxCross1 /></span>
//     </div> */}