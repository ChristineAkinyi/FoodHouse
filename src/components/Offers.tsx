import Image from 'next/image';
import burger from '../Images/burgerpic.png'
import salad from "../Images/leafysalad.png"
import location from '../Images/map.png'
const BestOffer = () => {
    return(
        <div className="mt-60 mb-80">
           <p className='text-center text-gray-700 font-bold mb-5'>Quality Food</p>
           <h4 className='text-center font-bold text-5xl font-semibold mb-7'>Get The Best Offers</h4>
           <p className='text-gray-500 text-center font-medium'>The food at your doorstep.Why starve when you have us.You hunger</p>
            <p className='text-gray-500 text-center font-medium mb-20'>partner.Straight out of the oven to your doorstep.</p>
           

            <div className='flex justify-center justify-evenly'>
              <div className='flex'>
                <div>
                <h5 className='text-4xl font-medium'>Any day</h5>
                <h5 className='text-4xl font-medium'>offers</h5>
                <p className='text-gray-500 font-semibold'>New phenomenon</p>
                <p className='text-gray-500 font-semibold'>Burger taste</p>
                <p className='text-amber-400 font-semibold text-xl'>$12.90</p>
                </div>

            <div className="h-40 w-40 flex items-center justify-center bg-orange-400 rounded-full ml-10">
                <Image src={burger} alt="burger" className="w-40 h-50 mr-20" />
            </div>
                </div>

               <div className='flex'>
                <div>
                <h5 className='text-4xl font-medium'>Other</h5>
                <h5 className='text-4xl font-medium'>flavors</h5>
                <p className='text-gray-500 font-semibold'>Save room. We</p>
                <p className='text-gray-500 font-semibold'>made salats</p>
                <p className='text-amber-400 text-amber-400 font-semibold text-xl'>$12.90</p>
                </div>

                <div className='h-40 w-40 flex items-center justify-center bg-orange-400 rounded-full ml-10'>
                    <Image src={salad} alt='salad' className='w-40 mr-20 w-44'/>
                </div>
              </div>
                
            
            <div className='flex'>
                <div>
                    <h5 className='text-4xl font-medium'>Find a poco</h5>
                    <h5 className='text-4xl font-medium'>store near</h5>
                    <h5 className='text-4xl font-medium'>you</h5>
                </div>

                    <div className='h-40 w-40 bg-slate-200 rounded-full ml-10'>
                        <Image src={location} alt="location pin" className='w-32'/>
                    </div>
                </div>

           </div>
         </div>
    )
}
export default BestOffer;