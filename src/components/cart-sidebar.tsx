'use client'

import { useState } from "react"
import Image from "next/image"
import { X, Minus, Plus } from 'lucide-react'
import { Button } from "@/components/button"
import Link from "next/link"

export function CartSidebar() {
  const [isOpen, setIsOpen] = useState(true)

  const cartItems = [
    {
      id: 1,
      name: "Asgaard sofa",
      price: "Rs. 250,000.00",
      quantity: 1,
      image: "/images/img2.png"
    },
    {
      id: 2,
      name: "Casaliving Wood",
      price: "Rs. 270,000.00",
      quantity: 1,
      image: "/images/img1.png"
    }
  ]

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-[480px] bg-white shadow-2xl transition-transform duration-300 ease-in-out z-50 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-16 items-center justify-between border-b px-6">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="h-[calc(100vh-12rem)] overflow-auto p-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 border-b py-4">
              <div className="relative h-[100px] w-[100px] flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="object-cover"
                  fill
                  sizes="100px"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-[#B88E2F]">{item.price}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-500">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center border border-gray-200 w-fit">
                  <button className="p-2 hover:bg-gray-100">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button className="p-2 hover:bg-gray-100">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-6">
          <div className="flex justify-between text-lg font-medium mb-6">
            <span>Subtotal</span>
            <span className="text-[#B88E2F]">Rs. 520,000.00</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
          <Link href={'/cart'}><Button variant="outline">Cart</Button></Link>
          <Link href={'/checkout'}><Button variant="outline">Checkout</Button></Link>
          <Link href={'/comp'}><Button variant="outline">Comparison</Button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

