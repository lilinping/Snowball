'use client'

import Link from 'next/link'
import { useCart } from '../lib/cart-context'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

export function CartPageComponent() {
  const { cartItems, removeFromCart } = useCart()
  const router = useRouter()

  const handleCheckout = () => {
    router.push('/checkout?items=' + encodeURIComponent(JSON.stringify(cartItems)))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="font-bold text-xl text-gray-800">
                家居天地
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">购物车</h1>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">您的购物车是空的。</p>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image src={item.image} alt={item.name} width={500} height={500} />
                  <div className="p-4">
                    <h2 className="font-semibold text-lg mb-2">{item.name}</h2>
                    <p className="text-gray-600">¥{item.price}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
                    >
                      移除
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={handleCheckout}
                className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
              >
                立即下单
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}