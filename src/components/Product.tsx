import Image from "next/image"
import { Share2, ArrowLeftRight, Heart } from 'lucide-react'
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    image: "/images/img1.png",
    badge: {
      text: "-30%",
      type: "discount"
    }
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/images/img2.png",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: "/images/img3.png",
    badge: {
      text: "-50%",
      type: "discount"
    }
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    image: "/images/img4.png",
    badge: {
      text: "New",
      type: "new"
    }
  },

]

export default function Product() {
  return (
    <section className="py-5 px-10">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white cursor-pointer">
              <div className="relative aspect-square overflow-hidden">
                <Link href={'/shop'}>
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                /></Link>
                {product.badge && (
                  <div className={`absolute top-5 right-5 w-[55px] h-[55px] rounded-full flex items-center justify-center text-white font-medium z-10
                    ${product.badge.type === 'discount' ? 'bg-[#E97171]' : 'bg-[#2EC1AC]'}`}>
                    {product.badge.text}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex flex-col items-center justify-center h-full gap-6">
                    <button className="w-[202px] h-[48px] bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-colors">
                      Add to cart
                    </button>
                    <div className="flex items-center gap-4 text-white">
                      <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                      <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                        <ArrowLeftRight className="w-4 h-4" />
                        Compare
                      </button>
                      <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                        <Heart className="w-4 h-4" />
                        Like
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4">
               <Link href={'/shop'} ><h3 className="text-xl ml-2 font-semibold text-[#3A3A3A]">{product.name}</h3>
                <p className="text-base text-[#898989] ml-2 mb-2">{product.description}</p>
                <div className="flex items-center gap-2">
                  <span className=" font-semibold text-[#3A3A3A] ml-2">{product.price}</span>
                  {product.oldPrice && (
                    <span className=" text-[#B0B0B0] line-through">{product.oldPrice}</span>
                  )}
                </div></Link>
              </div>
            </div>
          ))}
          
        </div>
       
      </div>
    </section>
  )
}

