import Image from 'next/image';
import burger from '../Images/burger.jpeg'
import salad from "../Images/salad.png"
import location from '../Images/location.png'
const BestOffer = () => {
    return(
        <div className="">
           <p className='text-center text-gray-500'>Quality Food</p>
           <h4 className='text-center font-bold text-4xl'>Get The Best Offers</h4>
           <p className='text-gray-500 text-center'>The food at your doorstep.Why starve when you have us.You hunger</p>
            <p className='text-gray-500 text-center'>partner.Straight out of the oven to your doorstep.</p>
           

           {/* <div className=''> */}
            <div className='flex'>
              <div className='flex'>
                <div>
                <h5>Any day</h5>
                <h5>offers</h5>
                <p className='text-gray-500'>New phenomenon</p>
                <p className='text-gray-500'>Burger taste</p>
                <p className='text-amber-400'>$12.90</p>
                </div>

                <div>
                <Image src={burger} alt='burger'/>
                </div>
                </div>

               <div className='flex'>
                <div>
                <h5>Other</h5>
                <h5>flavors</h5>
                <p>Save room. We</p>
                <p>made salats</p>
                <p className='text-amber-400'>$12.90</p>
                </div>

                <div>
                    <Image src={salad} alt='salad'/>
                </div>
              </div>
                
            
            <div className='flex'>
                <div>
                    <h5>Find a poco</h5>
                    <h5>store near</h5>
                    <h5>you</h5>
                </div>

                    <div>
                        <Image src={location} alt="location pin"/>
                    </div>
                </div>

           </div>
         </div>
    )
}
export default BestOffer;