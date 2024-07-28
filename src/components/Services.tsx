import Image from "next/image"
import restaurant from "../Images/orangehouse.jpeg"
import quality from "../Images/goodquality.png"
import discount from "../Images/discount.jpeg"
import delivery from "../Images/cycle.jpeg"

export const Services =() => {
    return(
        <section>
            <h1 className="text-3xl text-center font-semibold">Our Service</h1>

            <div className="flex justify-evenly">

            <div className="">
                <div>
                    <Image src={restaurant} alt="orange" className="w-20"/>
                </div>

                <div>
                    <p className="font-semibold"> 55+ Restaurants</p>
                </div>
            </div>

            <div className="">
                <div>
                    <Image src={quality} alt="" className="w-20"/>
                </div>

                <div>
                    <p className="font-semibold">Good Quality</p>
                </div>
            </div>

            <div className="">
                <div>
                    <Image src={discount} alt="" className="w-20"/>
                </div>

                <div>
                    <p className="font-semibold">Discount System</p>
                </div>

            </div>

            <div className="">
                <div>
                    <Image src={delivery} alt="" className="w-20"/>
                </div>

                <div>
                    <p className="font-semibold">Fast Delivery</p>
                </div>

            </div>
            </div>
        </section>

    )
}