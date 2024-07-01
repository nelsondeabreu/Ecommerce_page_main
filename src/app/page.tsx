import { Card } from "@/components/card";
import Image from "next/image";
import { Header } from "@/components/header";
import image_prouct2 from '../../public/image-product-2.jpg'
import image_prouct3 from '../../public/image-product-3.jpg'
import image_prouct4 from '../../public/image-product-4.jpg'
import image_prouct1 from '../../public/image-product-1.jpg'
import { ShoppingCart } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <div className="flex flex-col items-center justify-center gap-6">
        <Header/>

        <div className="flex gap-10">
          <div className="flex flex-col gap-4">
            <Card/>
            <ul className="flex gap-4 items-center justify-center">
              <li>            
                <Image src={image_prouct1} alt="image card" className="h-[5rem] w-[5rem] rounded  opacity-50 border-2 border-yellow-600"/>
              </li>
              <li>            
                <Image src={image_prouct2} alt="image card" className="h-[5rem] w-[5rem] rounded"/>
              </li>
              <li>            
                <Image src={image_prouct3} alt="image card" className="h-[5rem] w-[5rem] rounded"/>
              </li>
              <li>            
                <Image src={image_prouct4} alt="image card" className="h-[5rem] w-[5rem] rounded"/>
              </li>
            </ul>
          </div>
          
          <div className="w-[28rem] flex flex-col items-left justify-center gap-4">
            <span className="text-xs">SNEAKER COMPANY</span>
            <h1 className="text-4xl font-extrabold">Fall Limited Edition Sneakers</h1>
            <p className="text-sm text-gray-500">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they´ll withstand everything the weather can offer.
            </p>
            <ul className="flex gap-4">
              <li className="font-extrabold">
                  $125.00
              </li>
              <li className="bg-black text-white px-1 rounded">
                50%
              </li>
            </ul>
            <span className="line-through text-gray-500">$250.00</span>
            <div className="flex gap-4">
              <ul className="flex gap-2 bg-gray-200 px-4 py-1 rounded">
                <li className="font-extrabold text-yellow-500"> - </li>
                <li> 0 </li>
                <li className="font-extrabold text-yellow-500"> + </li>
              </ul>
              <button className="flex gap-2 bg-yellow-500 px-4 py-1 rounded font-extrabold"> <ShoppingCart /> <span>Add to cart</span> </button>
            </div>
          </div>

        </div>
      
      </div>
    </main>
  );
}
