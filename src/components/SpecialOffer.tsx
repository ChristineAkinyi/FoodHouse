import Image from "next/image"
import dishoffer from "../Images/creative.png"
import cristio from "../Images/cristio.jpeg"
import srah from "../Images/cristio.jpeg"
export const SpecialOffer = () => {
    return(
        <section className="mt-[190px]">

            

             <div className=" flex justify-evenly">
                <div className="mt-36">
                <p className="bg-yellow-200 rounded-lg p-[6px] w-[60px] text-center">-50%</p>

                <h1 className="text-7xl font-bold mt-5 text-gray-800">Our Special Offer</h1>
             <p className="text-gray-500 mt-5 text-xl">Best cooks and best delivery guys all at your</p>
             <p className="text-gray-500 text-xl">service. Hot tasty food will reach you in 60 minutes.</p>
             <button className="bg-amber-400 text-white text-2xl py-4 px-8 rounded-lg mt-5">See All Menu</button>
                </div>

                {/* <button className="bg-amber-400 text-white text-2xl py-4 px-8 rounded-lg mt-5 */}

                
                {/* <div> */}

                    <div className="relative w-[500px] h-[500px]">

                    <Image src={dishoffer} alt="Dish offer" layout="fill" objectFit="cover" className="z-0"/>

                        <button className="absolute top-8 bg-white p-2 rounded shadow-lg z-10 flex items-center">
                            {/* <div> */}
                            <Image src={cristio} alt="" className="w-12"/>
                            {/* </div> */}

                            <div className="ml-2 text-left">
                                <h3 className="font-bold">Cristio Maria</h3>
                                <p>Healthy and delicious pizza</p>
                                <p>&#11088; &#11088; &#11088; &#11088; &#11088;</p>
                            </div>                           
                        </button>

                        <button className="absolute bottom-16 right-10 bg-neutral-100 p-2 rounded shadow-lg z-10 flex items-center">
                <Image src={srah} alt="Srah ali khan" className="w-12" />

                <div className="ml-2 text-left">
                    <h3 className="font-bold">Srah ali khan</h3>
                    <p>Healthy and delicious pizza</p>
                    <p>&#11088; &#11088; &#11088; &#11088; &#11088;</p>
                </div>
            </button>
                    </div>
                   
             </div>
        </section>
    )
}






