import Image from "next/image"
import restaurant from "../Images/orangehouse.jpeg"
import quality from "../Images/goodquality.png"
import discount from "../Images/discount.jpeg"
import delivery from "../Images/cycle.jpeg"

export const Services =() => {
    return(
        <section>
            <h1 className="text-5xl text-center font-semibold mb-[80px]">Our Service</h1>

            <div className="flex justify-evenly items-center">

            <div className="mb-5">
                <div>
                    <Image src={restaurant} alt="orange" className="w-40"/>
                </div>

                <div>
                    <p className="font-semibold text-center"> 55+ Restaurants</p>
                </div>
            </div>

            <div className="">
                <div>
                    <Image src={quality} alt="" className="w-36"/>
                </div>

                <div>
                    <p className="font-semibold text-center">Good Quality</p>
                </div>
            </div>

            <div className="">
                <div>
                    <Image src={discount} alt="" className="w-40"/>
                </div>

                <div>
                    <p className="font-semibold text-center">Discount System</p>
                </div>

            </div>

            <div className="mb-5">
                <div>
                    <Image src={delivery} alt="" className="w-40"/>
                </div>

                <div>
                    <p className="font-semibold text-center">Fast Delivery</p>
                </div>

            </div>
            </div>
        </section>

    )
}