import Image from "next/image";
import Link from "next/link";
import Features from "@/components/Pro";
export default function Comp(){
    return(
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

        {/* Text Content */}
        <div className="text-center text-black mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Comparison</h1>
          
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center space-x-2 text-sm md:text-base">
            <Link href="/" className="hover:text-amber-500 transition-colors">
              Home
            </Link>
            <span className="text-black">›</span>
            <span className="text-black">Comparison</span>
          </nav>
        </div>
      </div>
    </div> 
            <div className="lg:flex justify-center lg:grid-cols-4 grid-cols-1 gap-20 py-10">
                <div className="text-2xl font-bold">
                    <h1>Go to Product</h1>
                    <h1>page for more</h1>
                    <h1>Products</h1>
                    <p className="text-gray-600 underline text-sm font-normal mt-7">View More</p>
                </div>
                <div>
                    <Image src={'/images/cmp2.png'} alt="pic" width={200} height={140} className="bg-pink-50"/>
                    <p className="text-xl font-medium">Asgaard Sofa</p>
                    <p>Rs.250,000.00</p>
                    <p>4.7 ⭐⭐⭐⭐ 
                        <span className="text-gray-600 text-sm">| 204 Reviews</span>
                    </p>
                </div>
                <div>
                    <Image src={'/images/cmp1.png'} alt="pic" width={170} height={100} className="bg-pink-50"/>
                    <p className="text-xl font-medium">Outdoor Sofa Set</p>
                    <p>Rs.224,000.00</p>
                    <p>4.2 ⭐⭐⭐⭐ 
                        <span className="text-gray-600 text-sm">| 114 Reviews</span>
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Add A Product</h1>
                    <select  className="bg-amber-500">
                        <option value="">Choose a Product</option>
                    </select>
                </div>
            </div>
            <div className="h-0.5 w-full bg-gray-600"></div>
            <div className="flex sm:grid-cols-2 lg:grid-cols-4 pb-5">
            <div className="w-1/4 text-xs text-center">
                <h1 className="font-semibold text-xl">General</h1>
                <ul className="space-y-5 mt-3">
                    <li>Sales Package</li>
                    <li>Model Number</li>
                    <li>Secondary Material</li>
                    <li>Configuration</li>
                    <li>Upholstery Material</li>
                    <li>Upholstery Color</li>
                </ul>
                <h1 className="font-semibold text-xl mt-8">Product</h1>
                <ul  className="space-y-5 mt-3">
                    <li>Filling Material</li>
                    <li>Finish Type</li>
                    <li>Adjustable Headrest</li>
                    <li>Maximum Load Capacity </li>
                    <li>Orgin of Manufacture</li>
                    
                </ul>
                <h1 className="font-semibold text-xl mt-8">Dimensions</h1>
                <ul  className="space-y-5 mt-3">
                    <li>Width</li>
                    <li>Height</li>
                    <li>Depth</li>
                    <li>Weight</li>
                    <li>Seal Height</li>
                    <li>Leg Height</li>
                </ul>
                <h1 className="font-semibold text-xl mt-8">Warranty</h1>
                <p className="py-5">Warranty Summary</p>
                <p className="pb-5">Warranty Service Type</p>
                <p className="pb-5">Covered in Warranty</p>
                <p className="pb-5">Not Covered in Warranty</p>
                <p>Domestic Warranty</p>
            </div>
            <div className="w-0.5 h-auto bg-gray-600"></div>
            <div className="w-1/4 text-xs text-center">
                <h1 className="font-semibold text-xl">General</h1>
                <ul className="space-y-5 mt-3">
                    <li>Sales Package</li>
                    <li>Model Number</li>
                    <li>Secondary Material</li>
                    <li>Configuration</li>
                    <li>Upholstery Material</li>
                    <li>Upholstery Color</li>
                </ul>
                <h1 className="font-semibold text-xl mt-8">Product</h1>
                <ul  className="space-y-5 mt-3">
                    <li>Filling Material</li>
                    <li>Finish Type</li>
                    <li>Adjustable Headrest</li>
                    <li>Maximum Load Capacity </li>
                    <li>Orgin of Manufacture</li>
                    
                </ul>
                <h1 className="font-semibold text-xl mt-8">Dimensions</h1>
                <ul  className="space-y-5 mt-3">
                    <li>Width</li>
                    <li>Height</li>
                    <li>Depth</li>
                    <li>Weight</li>
                    <li>Seal Height</li>
                    <li>Leg Height</li>
                </ul>
                <h1 className="font-semibold text-xl mt-8">Warranty</h1>
                <p className="py-5">Warranty Summary</p>
                <p className="pb-5">Warranty Service Type</p>
                <p className="pb-5">Covered in Warranty</p>
                <p className="pb-5">Not Covered in Warranty</p>
                <p>Domestic Warranty</p>
                <button className="bg-amber-500 text-white px-8 py-4 mt-7">Add to Cart</button>
            </div>
            <div className="w-0.5 h-auto bg-gray-600"></div>
            <div className="w-1/4 text-xs text-center">
                <h1 className="font-semibold text-xl">General</h1>
                <ul className="space-y-5 mt-3">
                    <li>Sales Package</li>
                    <li>Model Number</li>
                    <li>Secondary Material</li>
                    <li>Configuration</li>
                    <li>Upholstery Material</li>
                    <li>Upholstery Color</li>
                </ul>
                <h1 className="font-semibold text-xl mt-8">Product</h1>
                <ul  className="space-y-5 mt-3">
                    <li>Filling Material</li>
                    <li>Finish Type</li>
                    <li>Adjustable Headrest</li>
                    <li>Maximum Load Capacity </li>
                    <li>Orgin of Manufacture</li>
                    
                </ul>
                <h1 className="font-semibold text-xl mt-8">Dimensions</h1>
                <ul  className="space-y-5 mt-3">
                    <li>Width</li>
                    <li>Height</li>
                    <li>Depth</li>
                    <li>Weight</li>
                    <li>Seal Height</li>
                    <li>Leg Height</li>
                </ul>
                <h1 className="font-semibold text-xl mt-8">Warranty</h1>
                <p className="py-5">Warranty Summary</p>
                <p className="pb-5">Warranty Service Type</p>
                <p className="pb-5">Covered in Warranty</p>
                <p className="pb-5">Not Covered in Warranty</p>
                <p>Domestic Warranty</p>
                <button className="bg-amber-500 text-white px-8 py-4 mt-7">Add to Cart</button>
            </div>
            <div className="w-0.5 h-auto bg-gray-600"></div>
            </div>
            <Features/>
        </div>
    )
}