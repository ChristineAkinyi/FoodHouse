import Image from "next/image"
import offerpic from "../Images/offerpic.png"
export const SpecialOffer = () => {
    return(
        <section>
            <button>-50%</button>
             <div className="">
                <div>
                <h1>Our Special Offer</h1>
             <p>Best cooks and best delivery guys all at your</p>
             <p>service. Hot tasty food will reach you in 60 minutes.</p>
             <button>See All Menu</button>
                </div>
                <div>
                    <Image src={offerpic} alt=""/>
                </div>
             </div>
        </section>
    )
}






