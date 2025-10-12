// import React from 'react'
// import image1 from './assets/1_2-3072_SL01.jpg'
// import { Routes, Route, Link } from "react-router-dom";
// const WatchCard = () => {
//   return (
//     <Link to="/product-page">
//     <div className='bg-slate-700 w-[170px] h-[220px] mt-4 ml-3 rounded hover:scale-105 duration-200'>
//         <div className='w-[90%] h-[70%] ml-[5%] pt-2  '>
//             <img src={image1} className='rounded'/>
//         </div>
//         <div className='mt-5'>
//         <div className='text-white font-sans text-lg'>
//             Title
//         </div>
//         <div className='flex text-sm justify-between ml-2 mr-2 text-white'>
//             <div>
//                 Price
//             </div>
//             <div>
//                 Review
//             </div>
//         </div>
//         </div>
//       </div>
//       </Link>
//   )
// }

// export default WatchCard


import { Heart } from 'lucide-react'

function WatchCard() {
  const watches = [
    { id: 1, name: 'Classic Elegance', price: '$299', image: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, name: 'Sport Pro', price: '$399', image: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, name: 'Luxury Gold', price: '$599', image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, name: 'Modern Steel', price: '$349', image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ]

  return (
    <div className='bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>Featured Watches</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {watches.map((watch) => (
            <div key={watch.id} className='bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group'>
              <div className='relative overflow-hidden aspect-square'>
                <img
                  src={watch.image}
                  alt={watch.name}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                />
                
              </div>
              <div className='p-4'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>{watch.name}</h3>
                <div className='flex justify-between items-center'>
                  <span className='text-xl font-bold text-blue-600'>{watch.price}</span>
                  <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WatchCard
