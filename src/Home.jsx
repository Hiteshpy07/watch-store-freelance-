// import { useState } from 'react'
// import Navbar from './Navbar'
// import WatchCard from './WatchCard'


// function Home() {
//   const [Cartopen, setCartopen] = useState(false)

//   return (
//     <div className='bg-black w-full h-screen overflow-y-auto relative'>
//       <Navbar/>
//       <div className=' h-[300px] w-full bg-slate-500'>poster part with slide motion  </div>
//       <div className='flex bg-slate-400 h-[200px] justify-between '>
//         {/* for watches category in gender */}
//         <div  className='bg-slate-700 w-[48%] m-4'>
//           men
//         </div>
//         <div className='bg-slate-800 w-[48%] m-4'>
//           women
//         </div>
//       </div>
//       <WatchCard/>
      
      
//     </div>

    
//   )
// }

// export default Home

// // {/* <div className={` w-[70vh] ${cartopen?"overflow:auto translate-x-0":"translate-x-full"} h-[100%] bg-amber-50 fixed top-0 right-0 shadow-xl p-2 rounded-lg transition duration-150`}>
// //     {/* this is for the cart... */}
// //     <div className='flex justify-between '>
// //     <span className='text-xl mt-1 ml-2 font-semibold'>Order items</span>
// //     <span className='cursor-pointer font-bold text-xl mt-2 mr-2 ' onClick={()=>setcartopen(false)}><RxCross1 /></span>
// //     </div> */}




import { useState } from 'react'
import Navbar from './Navbar'
import WatchCard from './WatchCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from "react-router-dom";
import FilterSidebar from "./FilterSidebar";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const [filters, setFilters] = useState({});
  const handleFilterChange = (newFilters) => {
    console.log("Applied Filters:", newFilters);
    setFilters(newFilters);
    // Apply filtering logic for products here
  };

  const brands = [
  {
    name: "Fastrack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Fastrack-logo.png",
  },
  {
    name: "Sonata",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b1/Sonata_Logo.svg",
  },
  {
    name: "Titan",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Titan_Company_Logo.svg",
  },
];

  return (
    <div className='bg-gray-50 w-full min-h-screen overflow-y-auto relative'>
      <Navbar />

      

      <div className='relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full bg-gradient-to-r from-blue-100 to-gray-100 overflow-hidden'>
        <div className='relative w-full h-full'>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-r from-black/40 to-transparent' />
            </div>
          ))}

          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='text-center text-white px-4'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg'>
                Timeless Elegance
              </h2>
              <p className='text-base sm:text-lg md:text-xl mb-4 sm:mb-6 drop-shadow-lg'>
                Discover our exclusive collection
              </p>
              <button className='bg-white text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base'>
                Shop Now
              </button>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className='absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all'
          >
            <ChevronLeft className='text-gray-900' size={20} />
          </button>
          <button
            onClick={nextSlide}
            className='absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all'
          >
            <ChevronRight className='text-gray-900' size={20} />
          </button>

          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2'>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-5 text-center'>
          Shop by Category
        </h2>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
          <div className='flex-1 relative h-[200px] sm:h-[250px] rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow'>
            <img
              src='https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Men watches'
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
            <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
              <h3 className='text-2xl sm:text-3xl font-bold mb-1'>Men's Collection</h3>
              <p className='text-sm sm:text-base text-gray-200'>Explore masculine elegance</p>
            </div>
          </div>

          <div className='flex-1 relative h-[200px] sm:h-[250px] rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow'>
            <img
              src='https://images.pexels.com/photos/3731219/pexels-photo-3731219.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Women watches'
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
            <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
              <h3 className='text-2xl sm:text-3xl font-bold mb-1'>Women's Collection</h3>
              <p className='text-sm sm:text-base text-gray-200'>Discover refined beauty</p>
            </div>
          </div>
        </div>
      </div>
    <div>
      {/* shod by brand section */}
      <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Shop by Brand
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition hover:scale-105 cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-32 h-16 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {brand.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
       </div>



      <div className='flex h-screen overflow-hidden'>
        {/* main div of the filter and all watch caard */}

        {/* filter div */}
    <div className="w-64 flex-shrink-0 h-screen sticky top-0">
      <FilterSidebar onFilterChange={handleFilterChange} />
    </div>

      <div className='flex-1 overflow-y-auto bg-gray-50 p-6'>
        {/* watch card div */}
      <Link to="/product-page">
      <WatchCard />
      </Link>
      </div>
      </div>
    </div>

    
  )
}

export default Home
