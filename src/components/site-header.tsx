import Link from "next/link"
import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import Image from "next/image"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center ">
            <Image src={'/images/logo.png'} alt="0" width={70} height={100}/>
            <h1 className="text-2xl font-bold">Furniro</h1>
          </div>
        </Link>
        <nav className=" md:flex items-center space-x-6">
          <Link href="/" className="font-medium">
            Home
          </Link>
          <Link href="/shop1" className="font-medium">
            Shop
          </Link>
          <Link href="/blog" className="font-medium">
            Blog
          </Link>
          <Link href="/contact" className="font-medium">
            Contact
          </Link>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <User className="h-5 w-5" />
          <Search className="h-5 w-5" />
          <Heart className="h-5 w-5" />
          <Link href={'/cart'}><ShoppingCart className="h-5 w-5" /></Link>
        </div>
      </div>
    </header>
  )
}

