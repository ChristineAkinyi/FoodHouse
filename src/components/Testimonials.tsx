import Image from "next/image"
import personone from "../Images/personone.jpeg"
import person from "../Images/person3.jpeg"
import personfour from "../Images/personone.jpeg"
import quotes from "../Images/quotes.png"


export const Testimonial = () => {
    return(
        <section>
            <h3 className="text-center font-semibold mt-[180px]">Testimonial</h3>

            <h1 className="text-center font-bold text-4xl ">What Our Clients Say</h1>

            <Image src={quotes} alt="" className="ml-[500px]"/>

           <div className="text-center mb-px">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <p>ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <p>ullamco laboris nisi ut aliquip ex ea commodo</p>
           </div>
           

            <div className="flex justify-center gap-px">
                <div>
                    <Image src={personone} alt="" className="rounded-full size-14"/>
                </div>

                <div>
                    <Image src={person} alt="" className="rounded-full size-14"/>
                </div>

                <div>
                    <Image src={person} alt="" className="rounded-full size-14"/>
                </div>

                <div>
                    <Image src={personfour} alt="" className="rounded-full size-14" />
                </div>
            </div>

            <h2 className="text-center ">Mitchell Marsh</h2>
            <p className="text-center ">CEO, Bexon Agency</p>
        </section>
        

    )
}