'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useCart } from '../lib/cart-context'
import Image from 'next/image'

export function ProductDetailPageComponent() {
  // Remove the unused router variable
  // const router = useRouter()
  const { addToCart } = useCart()
  const [product, setProduct] = useState<{ id: string; name: string; price: number; image: string; description: string } | null>(null)

  useEffect(() => {
    const id = window.location.pathname.split('/').pop()
    if (id) {
      // Fetch product details based on the id
      // This is a placeholder, replace with actual data fetching logic
      const fetchedProduct = {
        id,
        name: '示例产品',
        price: 999,
        image: '/placeholder.svg?height=200&width=200',
        description: '这是一个示例产品的详细介绍。'
      }
      setProduct(fetchedProduct)
    }
  }, [])

  if (!product) {
    return <p>加载中...</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image src={product.image} alt={product.name} width={500} height={500} />
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-4">¥{product.price}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <button
                onClick={() => addToCart({ ...product, id: parseInt(product.id) })}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              >
                加入购物车
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}