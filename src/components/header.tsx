import Image from 'next/image'
import logo from '../../public/logo.svg'
import Avatar from '../../public/image-avatar.png'
import { ShoppingCart } from 'lucide-react'
export function Header() {
    return(
        <div className="flex justify-center items-center gap-96 pb-6 border-b-2 border-gray-50">
            <div className='flex gap-10'>
                <Image src={logo} alt='logo' className='h-6'/>
                <ul className='flex gap-6 justify-center items-center text-gray-500 text-sm'>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div>
                <ul className='flex gap-6 justify-center items-center'>
                    <li> <ShoppingCart /> </li>
                    <li>
                        <Image src={Avatar} alt='Avatar' className='w-8 h-8'/>
                    </li>
                </ul>
            </div>
        </div>
    )
}