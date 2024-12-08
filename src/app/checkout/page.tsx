import Link from "next/link";
import Image from "next/image";
import Features from "@/components/Pro";


export default function BillingDetails() {
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

        {/* Text Content */}
        <div className="text-center text-black mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Checkout</h1>
          
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center space-x-2 text-sm md:text-base">
            <Link href="/" className="hover:text-amber-500 transition-colors">
              Home
            </Link>
            <span className="text-black">›</span>
            <span className="text-black">Checkout</span>
          </nav>
        </div>
      </div>
    </div> 

            {/*  */}
      <div className="min-h-screen py-8 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section: Billing Details Form */}
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Billing details</h2>
            <form className="grid grid-cols-1 gap-6">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
              {/* Company Name */}
              <div>
                <label className="block text-gray-600 mb-1">Company Name (Optional)</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              {/* Country / Region */}
              <div>
                <label className="block text-gray-600 mb-1">Country / Region</label>
                <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400">
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="India">India</option>
                </select>
              </div>
              {/* Street Address */}
              <div>
                <label className="block text-gray-600 mb-1">Street Address</label>
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              {/* Town / City */}
              <div>
                <label className="block text-gray-600 mb-1">Town / City</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              {/* Province */}
              <div>
                <label className="block text-gray-600 mb-1">Province</label>
                <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400">
                  <option value="Western Province">Western Province</option>
                  <option value="Central Province">Central Province</option>
                </select>
              </div>
              {/* ZIP Code */}
              <div>
                <label className="block text-gray-600 mb-1">ZIP Code</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              {/* Phone */}
              <div>
                <label className="block text-gray-600 mb-1">Phone</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-gray-600 mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              {/* Additional Information */}
              <div>
                <label className="block text-gray-600 mb-1">Additional Information</label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>
            </form>
          </div>
  
          {/* Right Section: Order Summary */}
          <div className=" p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Product</h2>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Asgaard sofa × 1</span>
              <span className="text-gray-600">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-600">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-800 font-medium">Total</span>
              <span className="text-yellow-600 font-bold">Rs. 250,000.00</span>
            </div>
  
            {/* Payment Methods */}
            <fieldset className="border-t border-gray-200 pt-4">
              <legend className="sr-only">Payment Methods</legend>
              <label className="flex items-center mb-2">
                <input type="radio" name="payment" className="mr-2" />
                <span className="text-gray-600">Direct Bank Transfer</span>
              </label>
              <p className="text-sm text-gray-500 mb-4">
                Make your payment directly into our bank account. Please use your
                Order ID as the payment reference. Your order will not be shipped
                until the funds have cleared in our account.
              </p>
              <label className="flex items-center mb-2">
                <input type="radio" name="payment" className="mr-2" />
                <span className="text-gray-600">Direct Bank Transfer</span>
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" name="payment" className="mr-2" />
                <span className="text-gray-600">Cash On Delivery</span>
              </label>
              <p className="text-sm text-gray-500 mb-4">
                Make your payment directly into our bank account. Please use your
                Order ID as the payment reference. Your order will not be shipped
                until the funds have cleared in our 
                <span className="text-black font-semibold cursor-pointer"> privacy policy</span>
              </p>
            </fieldset>
  
            {/* Place Order Button */}
            <button className="w-full text-black border-2 border-black py-2 px-4 rounded-lg font-medium mt-4">
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Features/>
      </div>
    );
  }
  