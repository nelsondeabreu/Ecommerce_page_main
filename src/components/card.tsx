import Image from "next/image";
import image_product_1 from '../../public/image-product-1.jpg'

export function Card() {
    return(
        <div>
            <Image src={image_product_1} alt="image card" className="h-[24rem] w-[24rem] rounded-2xl"/>
        </div>
    )
}