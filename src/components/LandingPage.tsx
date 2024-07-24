import Image from "next/image"

import homedish from "../Images/homedish.png";
 export const Homepage= () => {
    return(
        <section>
            <div className="flex space-x-20 ">
            <div className="mt-20">
                <h1>Enjoy Delicious Food in <span className="text-amber-400">Healthy Life</span></h1>

                <p>Tandoori Masala is an Indian space blend consisitng of a</p>
                <p>variety of spices. Tandoori masalais a Indian space blend</p>
                <p>consisiting of a variety of spices</p>

                <button className="bg-amber-400 text-white font-bold py-2 px-4 rounded">ORDER NOW</button>
            </div>

            <div className="">
                <Image src={homedish} alt="chickenpic" className="w-px"/>
            </div>
            </div>
        </section>
    )
 }