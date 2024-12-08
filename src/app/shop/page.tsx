import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Facebook, Linkedin, Twitter, Minus, Plus, Heart } from 'lucide-react'
import { Button } from "@/components/button"
import { Tabs } from "@/components/tabs"
import { ProductGallery } from "@/components/product-gallery"
import { RelatedProducts } from "@/components/related-products"
import { CartSidebar } from "@/components/cart-sidebar"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-[#9F9F9F]">
            <Link href="/" className="hover:text-[#B88E2F]">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/shop" className="hover:text-[#B88E2F]">Shop</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[#000000]">Asgaard sofa</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="container px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <ProductGallery />

          <div className="space-y-8">
            <h1 className="text-[42px] font-medium text-[#3A3A3A]">Asgaard sofa</h1>
            <div className="text-2xl text-[#3A3A3A]">Rs. 250,000.00</div>

            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${i < 4 ? "text-[#FFC700]" : "text-[#B8B8B8]"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-[#9F9F9F]">5 Customer Review</span>
            </div>

            <p className="text-[#666666]">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Size</h4>
                <div className="flex gap-2">
                  {["L", "XL", "XS"].map((size) => (
                    <button
                      key={size}
                      className="h-8 w-8 rounded border border-[#B8B8B8] hover:border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Color</h4>
                <div className="flex gap-2">
                  {["#816DFA", "#000000", "#B88E2F"].map((color) => (
                    <button
                      key={color}
                      className="h-8 w-8 rounded-full border-2 border-transparent hover:border-[#B88E2F]"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center border border-[#9F9F9F]">
                  <button className="p-3 hover:bg-gray-100">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center">1</span>
                  <button className="p-3 hover:bg-gray-100">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button className="h-12 px-12 bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white">
                  Add To Cart
                </Button>
                <button className="p-3 hover:text-[#B88E2F]">
                  <Heart className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="space-y-4 border-t pt-8">
              <div className="flex gap-2 text-sm">
                <span className="text-[#9F9F9F]">SKU</span>
                <span>SS001</span>
              </div>
              <div className="flex gap-2 text-sm">
                <span className="text-[#9F9F9F]">Category</span>
                <span>Sofas</span>
              </div>
              <div className="flex gap-2 text-sm">
                <span className="text-[#9F9F9F]">Tags</span>
                <span>Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex gap-4 text-sm">
                <span className="text-[#9F9F9F]">Share</span>
                <div className="flex gap-4">
                  <Facebook className="h-5 w-5" />
                  <Linkedin className="h-5 w-5" />
                  <Twitter className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <Tabs
            tabs={[
              {
                label: "Description",
                content: (
                  <div className="prose max-w-none">
                    <p>
                      Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                    </p>
                    <p className="mt-4">
                      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                    </p>
                    <div className="mt-8 grid md:grid-cols-2 gap-8">
                      <Image
                        src="/images/grp2.png"
                        alt="Product image 1"
                        width={600}
                        height={300}
                        className="rounded-lg"
                      />
                      <Image
                        src="/images/grp.png"
                        alt="Product image 2"
                        width={600}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                    
                  </div>
                ),
              },
              {
                label: "Additional Information",
                content: <div>Additional information content</div>,
              },
              {
                label: "Reviews [5]",
                content: <div>Reviews content</div>,
              },
            ]}
          />
        </div>

        <RelatedProducts />
        <div className="mt-12 text-center">
          <button className="px-[80px] py-3 border border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-colors">
            Show More
          </button></div>
      </div>

      <CartSidebar />
    </div>
  )
}

