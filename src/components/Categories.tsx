import Image from "next/image"
import swaifish from "../Images/swaifish.jpeg";
import fries from "../Images/fries.jpeg";
import seafish from "../Images/seafish.jpeg";
import pizza from "../Images/pizzadinko.jpeg";

export const PopularFoods = () => {
    return(
        <section>
            <h2 className="text-center font-serif font-bold mt-[190px] text-2xl">Online Store</h2>
            <h1 className="text-center text-5xl ml-5 font-bold">Popular Foods</h1>

            <div className="flex justify-center gap-[100px] ">
                <div className="mt-16">
                    <Image src={swaifish} alt="" className="w-60 h-60 rounded-full ml-[20px]"/>

                    <div className="text-center justify-center">
                    <h2 className="font-extrabold text-3xl text-center mb-[10px] mt-[10px]">Fruit Dish</h2>
                    <p className="mb-[10px] text-xl">Dinko Food</p>
                    <p className="mb-[10px]"> &#11088; &#11088; &#11088; &#11088;</p>
                    <button className="bg-amber-400 text-white font-bold py-2 px-10 rounded-full"><span className="text-xs">Add to Cart $696</span></button>
                    </div>
                   
                </div>

                <div className="mt-16 items-center justify-center space-x-4">
                    <Image src={fries} alt="" className="w-60 h-60 rounded-full ml-[30px]"/>

                    <div className="text-center">
                    <h2 className="font-extrabold text-3xl text-center mb-[10px] mt-[10px]">Fruit Dish</h2>
                    <p className="mb-[10px] text-xl">Dinko Food</p>
                    <p className="mb-[10px]"> &#11088; &#11088; &#11088; &#11088;</p>
                    <button className="bg-amber-400 text-white font-bold py-2 px-10 rounded-full"><span className="text-xs">Add to Cart $696</span></button>
                    </div>                  

                </div>

                <div className="mt-16 items-center justify-center space-x-4">
                    <Image src={seafish} alt="" className="w-60 h-60 rounded-full ml-[30px]"/>

                    <div className="text-center">
                    <h2 className="font-extrabold text-3xl text-center mb-[10px] mt-[10px]">Sea fish dish</h2>
                    <p className="mb-[10px] text-xl">Dinko Food</p>
                    <p className="mb-[10px]"> &#11088; &#11088; &#11088; &#11088;</p>
                    <button className="bg-amber-400 text-white font-bold py-2 px-10 rounded-full"><span className="text-xs">Add to Cart $696</span></button>

                    </div>
                   
                </div>

 
        <div className="mt-16 items-center justify-center space-x-4">
            <Image src={pizza} alt="Pizza" className="w-60 h-60 rounded-full ml-[30px]" />

            <div className="text-center">
                <h2 className="font-extrabold text-3xl mb-[10px] mt-[10px]">Pizza</h2>
                <p className="mb-[10px] text-xl">Dinko Food</p>
                <p className="mb-[10px]"> &#11088; &#11088; &#11088; &#11088;</p>
                <button className="bg-amber-400 text-white font-bold py-2 px-10 rounded-full"><span className="text-3xl">Add to Cart $696</span></button>
            </div>
            </div>                    
            </div>
        </section>
    )

}