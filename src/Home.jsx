import { useState } from 'react'
import Navbar from './Navbar'
import WatchCard from './WatchCard'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black w-full h-screen overflow-y-auto'>
      <Navbar/>
      <div className=' h-[300px] w-full bg-slate-500'>poster part with slide motion  </div>
      <div className='flex bg-white h-[200px] justify-between '>
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
