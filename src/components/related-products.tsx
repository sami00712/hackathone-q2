import Image from "next/image"
import Link from "next/link"

const relatedProducts = [
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

export function RelatedProducts() {
  return (
    <section className="mt-24">
      <h2 className="text-center text-[40px] font-medium mb-12">Related Products</h2>
      <div className="ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {relatedProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} className="group">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                className="object-cover transition-transform group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              {product.badge && (
                <div
                  className={`absolute top-5 right-5 h-[48px] w-[48px] rounded-full flex items-center justify-center text-sm text-white
                    ${product.badge.type === "discount" ? "bg-[#E97171]" : "bg-[#2EC1AC]"}`}
                >
                  {product.badge.text}
                </div>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold text-xl text-[#3A3A3A]">{product.name}</h3>
              <p className="text-[#898989]">{product.description}</p>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-xl text-[#3A3A3A]">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-[#B0B0B0] line-through">{product.oldPrice}</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

