import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../context/shopContext'
import MiniCart from './MiniCart'
import Image from 'next/image'
import Button from './atoms/Button'

export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext)

  let cartQuantity = 0
  cart.map(item => {
    return (cartQuantity += item?.variantQuantity)
  })

  return (
    <header className="fixed w-full top-0 z-20 bg-transparent">
      <div className="grid grid-cols-3 items-center max-w-6xl pt-4 pb-2 px-5 mx-auto lg:max-w-screen-xl">
        {/* Left Column */}
        <div></div>
        {/* Center Column */}
        <Link href="/" passHref >
            <Image
              src="/logo_main.svg"
              alt="Rascal Wear"
              width={100}
              height={100}
              className="cursor-pointer"
            />
        </Link>
        {/* Right Column */}
        <div className='flex items-center justify-end gap-3xs'>
          <Button 
            className="text-md font-bold cursor-pointer text-white heading"
            onClick={() => setCartOpen(!cartOpen)}
            text={`Cart (${cartQuantity})`}
          />
          <Button href="/" className="" text="Shop" />
          <MiniCart cart={cart} />
        </div>
      </div>
    </header>
  )
}
