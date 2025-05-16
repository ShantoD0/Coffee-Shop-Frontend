import { RiCupLine } from 'react-icons/ri'
import PopularCard from './PopularCard'

function PopularProduct() {
  return (
    <section className='bg-[url("/more/1.png")] space-y-4 text-center mt-20 bg-cover bg-center bg-no-repeat'>
        <p>---slip & savor---</p>
        <h3 className='text-6xl text-stone-800'>Our Popular Products</h3>
        <button className='btn btn-primary text-white border-2 hover:bg-gray-300 text-shadow-lg border-stone-800 outline-stone-800'>Add Coffee<RiCupLine color='#331A15' size={20}/></button>
        <div className='grid xl:grid-cols-2 justify-items-center 2xl:px-72 xl:px-44 gap-8 mt-10'>
            <PopularCard/>
            <PopularCard/>
            <PopularCard/>
            <PopularCard/>
            <PopularCard/>
            <PopularCard/>
        </div>
    </section>
  )
}

export default PopularProduct