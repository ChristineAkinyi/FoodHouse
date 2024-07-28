import Image from "next/image"
import dishone from "../Images/dishone.png";
import dishtwo from "../Images/dishtwo.png";
import dishthree from "../Images/dishthree.png";
import pizza from "../Images/dishfour.png";

export const PopularFoods = () => {
    return(
        <section>
            <h2 className="text-center font-serif font-bold">Online Store</h2>
            <h1 className="text-center text-4xl ml-5">Popular Foods</h1>

            <div className="flex items-center justify-center ">
                <div>
                    <Image src={dishone} alt=""/>
                    <h2>Fruit Dish</h2>
                    <p>Dinko Food</p>
                    <p> &#11088; &#11088; &#11088; &#11088;</p>
                    <button className="bg-amber-400 text-white font-bold py-2 px-4 rounded"><span className="text-xs">Add to Cart $696</span></button>
                </div>

                <div className="mt-12">
                    <Image src={dishtwo} alt=""/>
                    <h2>Fruit Dish</h2>
                    <p>Dinko Food</p>
                    <p> &#11088; &#11088; &#11088; &#11088;</p>
                    <button className="bg-amber-400 text-white font-bold py-2 px-4 rounded"><span className="text-xs">Add to Cart $696</span></button>

                </div>

                <div className="mt-12">
                    <Image src={dishthree} alt=""/>
                    <h2>Sea fish dish</h2>
                    <p>Dinko Food</p>
                    <p> &#11088; &#11088; &#11088; &#11088;</p>
                    <button className="bg-amber-400 text-white font-bold py-2 px-4 rounded"><span className="text-xs">Add to Cart $696</span></button>
                </div>

                <div className="mt-12">
                    <Image src={pizza} alt=""/>
                    <h2>Pizza</h2>
                    <p>Dinko Food</p>
                    <p> &#11088; &#11088; &#11088; &#11088;</p>
                    <button className="bg-amber-400 text-white font-bold py-2 px-4 rounded"><span className="text-xs">Add to Cart $696</span></button>
                </div>
            </div>
        </section>
    )

}