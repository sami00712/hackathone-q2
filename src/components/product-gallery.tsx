'use client'

import Image from "next/image"
import { useState } from "react"

const images = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
]

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="grid grid-cols-[100px,1fr] gap-4">
      <div className="space-y-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-square w-full overflow-hidden rounded-lg border-2 ${
              selectedImage === index ? "border-[#B88E2F]" : "border-transparent"
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="object-cover"
              fill
              sizes="100px"
            />
          </button>
        ))}
      </div>
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={images[selectedImage]}
          alt="Product image"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  )
}

