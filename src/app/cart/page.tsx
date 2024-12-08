import { TrashIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Features from "@/components/Pro";
// components/Cart.js
export default function Cart() {
  return (
    <div>
      <div className="relative h-[300px] w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/sp.png" 
          alt="Blog banner background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        
        <div className="absolute inset-0 "></div>
      </div>

      
      <div className="relative h-full max-w-6xl mx-auto px-4">
        
        <div className="flex justify-center pt-8">
          <svg 
            viewBox="0 0 24 24" 
            className="w-12 h-12 text-amber-500"
            fill="currentColor"
          >
            <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />
          </svg>
        </div>

        
        <div className="text-center text-black mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cart</h1>
          
          
          <nav className="flex justify-center items-center space-x-2 text-sm md:text-base">
            <Link href="/" className="hover:text-amber-500 transition-colors">
              Home
            </Link>
            <span className="text-black">›</span>
            <span className="text-black">Cart</span>
          </nav>
        </div>
      </div>
    </div> 
    <div className="  px-4 py-4 pt-10 pb-20 sm:px-8 lg:px-16">
      
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        
        <div className="w-full lg:w-2/3   p-6">
          <div className="hidden sm:flex justify-between bg-pink-50 pt-4 px-3 pb-4 ">
            <span className="font-medium text-gray-600 w-2/5">Product</span>
            <span className="font-medium text-gray-600 w-1/5 text-center">
              Price
            </span>
            <span className="font-medium text-gray-600 w-1/5 text-center">
              Quantity
            </span>
            <span className="font-medium text-gray-600 w-1/5 text-right">
              Subtotal
            </span>
          </div>

          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 ">
            <div className="flex items-center gap-4 w-full sm:w-2/5">
              <img
                src="/images/ct.png"
                alt="Asgaard sofa"
                className="w-16 h-16 rounded-md object-cover bg-pink-50"
              />
              <span className="text-gray-800">Asgaard sofa</span>
            </div>
            <div className="w-full sm:w-1/5 text-center text-gray-600">
              Rs. 250,000.00
            </div>
            <div className="w-full sm:w-1/5 text-center">
              <input
                type="number"
                defaultValue={1}
                className="w-12 p-1 border border-gray-300 rounded-md text-center focus:outline-none"
              />
            </div>
            <div className="w-full sm:w-1/5 text-right text-gray-600">
              Rs. 250,000.00
            </div>
            <button className="text-yellow-600 hover:text-yellow-800">
             <TrashIcon className="h-5 w-5" />
            </button>

          </div>
        </div>

        <div className="w-full lg:w-1/3 bg-pink-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Cart Totals</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-500">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-800 font-medium">Total</span>
            <span className="text-yellow-600 font-bold">Rs. 250,000.00</span>
          </div>
          <Link href={'/checkout'}><button className="w-full text-black border-2 border-black py-2 px-1 rounded-lg font-medium">
            Check Out
          </button></Link>
        </div>
      </div>
    </div>
    <Features/>
    </div>
  );
}
