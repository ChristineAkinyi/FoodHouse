import Image from "next/image"
import dishone from "../Images/dishone.png";
import dishtwo from "../Images/dishtwo.png";
import dishthree from "../Images/dishthree.png";
import pizza from "../Images/dishfour.png";

export const PopularFoods = () => {
    return(
        <section>
            <h2>Online Store</h2>
            <h1>Popular Foods</h1>

            <div className="flex ">
                <div>
                    <Image src={dishone} alt=""/>
                    <h2>Fruit Dish</h2>
                    <p>Dinko Food</p>
                    <button className="bg-amber-400 text-white font-bold py-2 px-4 rounded">Add to Cart $696</button>

                </div>

                <div>
                    <Image src={dishtwo} alt=""/>
                    <h2>Fruit Dish</h2>
                    <p>Dinko Food</p>
                    <button className="bg-amber-400 text-white font-bold py-2 px-4 rounded">Add to Cart $696</button>

                </div>

                <div>
                    <Image src={dishthree} alt=""/>
                    <h2>Sea fish dish</h2>
                    <p>Dinko Food</p>
                    <button className="bg-amber-400 text-white font-bold py-2 px-4 rounded">Add to Cart $696</button>
                </div>

                <div>
                    <Image src={pizza} alt=""/>
                    <h2>Pizza</h2>
                    <p>Dinko Food</p>
                    <button className="bg-amber-400 text-white font-bold py-2 px-4 rounded">Add to Cart $696</button>
                </div>
            </div>
        </section>
    )

}