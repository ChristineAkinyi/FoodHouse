import Image from "next/image"
import personone from "../Images/personone.jpeg"
import person from "../Images/person3.jpeg"
import personfour from "../Images/personone.jpeg"
import quotes from "../Images/double-quotes-r-svgrepo-com.svg"
import leftarrow from "../Images/left-arrow.svg"
import rightarrow from "../Images/right-arrow.svg"


export const Testimonial = () => {
    return(
        <section>
            <h3 className="text-center font-semibold mt-[180px]">Testimonial</h3>

            <h1 className="text-center font-bold text-4xl mb-[30px] ">What Our Clients Say</h1>

            <Image src={quotes} alt="" className="ml-[800px] w-16 mb-[30px]"/>

           <div className="text-center mb-[60px]">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <p>ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <p>ullamco laboris nisi ut aliquip ex ea commodo</p>
           </div>
           

            <div className="flex justify-center items-center gap-px mb-[30px]">
                <div>
                    <Image src={personone} alt="" className="rounded-full w-20 h-20"/>
                </div>

                <div>
                    <Image src={person} alt="" className="rounded-full w-20 h-20"/>
                </div>

                <div>
                    <Image src={person} alt="" className="rounded-full w-20 h-20"/>
                </div>

                <div>
                    <Image src={personfour} alt="" className="rounded-full w-20 h-20" />
                </div>
            </div>

            <h2 className="text-center ">Mitchell Marsh</h2>
            <p className="text-center ">CEO, Bexon Agency</p>

            <div className="flex justify-center gap-[20px] mt-6 ">
                <div>
                <Image src={leftarrow} alt="" className="w-10 p-[6px] bg-slate-200 rounded-md"/>
                </div>
                
                <div>
                <Image src={rightarrow} alt="" className=" w-10 p-[6px] bg-amber-300 rounded-md"/>
                </div>
               
            </div>
        </section>
        

    )
}