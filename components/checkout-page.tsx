'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export function CheckoutPageComponent() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const items = searchParams.get('items');
    if (items) {
      setItems(JSON.parse(items))
    }
  }, [])

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
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">结账</h1>
          {items.length === 0 ? (
            <p className="text-gray-600">没有选择任何商品。</p>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {items.map((item: { id: string; image: string; name: string; price: number }) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="font-semibold text-lg mb-2">{item.name}</h2>
                    <p className="text-gray-600">¥{item.price}</p>
                  </div>
                </div>
              ))}
              <button
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              >
                确认付款
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}