import Image from "next/image"

// import homedish from "../Images/homedish.png";
import chicken from "/Images/chicken.png";
 export const Homepage= () => {
    return(
        <section>
            <div className="flex justify-evenly">
            <div className="mt-20">
                
                <h1 className="font-bold text-5xl mt-[30px]">Enjoy Delicious</h1>
                <h1 className="text-3xl font-bold mb-9 text-5xl">Food in <span className="text-amber-400 text-4xl font-bold">Healthy Life</span></h1>
               
            
               <p className="mt-[70px]">Tandoori Masala is an Indian space blend consisting of a</p>
                <p>variety of spices. Tandoori masalais a Indian space blend</p>
                <p className="mb-5">consisting of a variety of spices</p>

                <button className="bg-amber-400 text-white font-bold py-2 px-4 rounded mt-[30px]">ORDER NOW</button>
               {/* </div> */}
                
            </div>

            <div className="">
                <img src="/chicken.png" alt="chickenpic" className=""/>
            </div>
            </div>
        </section>
    )
 }