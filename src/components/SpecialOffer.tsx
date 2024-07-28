import Image from "next/image"
import offerpic from "../Images/offerpic.png"
export const SpecialOffer = () => {
    return(
        <section className="mt-20">
            <button className="bg-amber-200 ml-20">-50%</button>
             <div className=" flex justify-evenly">
                <div>
                <h1 className="text-5xl font-bold mt-5">Our Special Offer</h1>
             <p className="text-gray-500 mt-5">Best cooks and best delivery guys all at your</p>
             <p className="text-gray-500">service. Hot tasty food will reach you in 60 minutes.</p>
             <button className="bg-amber-400 text-white p-2 rounded-md mt-5">See All Menu</button>
                </div>
                <div>
                    <Image src={offerpic} alt=""/>
                </div>
             </div>
        </section>
    )
}






