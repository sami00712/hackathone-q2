import Product from "@/components/Product"
import Pro from "@/components/Pro"
import Image from "next/image"
import Link from "next/link"
import FilterBar from "@/components/FilterBar"
export default function Shop(){
    return(
        <>
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

        {/* Text Content */}
        <div className="text-center text-black mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop</h1>
          
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center space-x-2 text-sm md:text-base">
            <Link href="/" className="hover:text-amber-500 transition-colors">
              Home
            </Link>
            <span className="text-black">›</span>
            <span className="text-black">Shop</span>
          </nav>
        </div>
      </div>
    </div> 
    <FilterBar/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <div className="mt-12 text-center">
          <button className=" py-3 px-3 border bg-pink-50 mb-10 mr-3 hover:bg-[#B88E2F] hover:text-white transition-colors">
            1
          </button>
          <button className=" py-3 px-3 border bg-pink-50 mb-10 mr-3 hover:bg-[#B88E2F] hover:text-white transition-colors">
            2
          </button>
          <button className=" py-3 px-3 border bg-pink-50 mb-10 mr-3 hover:bg-[#B88E2F] hover:text-white transition-colors">
            3
          </button>
          <button className=" py-3 px-3 border bg-pink-50 mb-10 mr-3 hover:bg-[#B88E2F] hover:text-white transition-colors">
            Next
          </button>
        </div>
        <Pro/>
        
        </>
    )
}