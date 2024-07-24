import Image from 'next/image';
import burger from '../Images/burger.jpeg'
import salad from "../Images/salad.png"
import location from '../Images/location.png'
const BestOffer = () => {
    return(
        <div className="">
           <p>Quality Food</p>
           <h4>Get The Best Offers</h4>
           <p>The food at your doorstep.Why starve when you have us.You hunger
            <br/>partner.Straight out of the oven to your doorstep.
           </p>

           <div className=''>
            <div className='flex'>
                <h5>Any day <br/>offers</h5>
                <p>New phenominal<br/>Burger taste</p>
                <p>$12.90</p>
                <div>
                    <Image src={burger} alt="burger food"/>
                    </div>
                <div className='flex'>
                    <div>
                        <h5>Other <br/>flavors</h5>
                        <p>save room.We<br/>made salats </p>
                        <p>$12.90</p>
                        <div>
                        <Image src={salad} alt="salad dish"/>
                        </div>
                    </div>
                    <div>
                        <h5>Find a poco store near you</h5>
                        <div>
                        <Image src={location} alt="location pin"/>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}
export default BestOffer;