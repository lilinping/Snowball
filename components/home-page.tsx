'use client'

import Link from 'next/link'
import { Search, ShoppingCart, User } from 'lucide-react'
import * as Separator from '@radix-ui/react-separator'

const products = [
  { id: 1, name: '现代沙发', price: 999, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: '复古餐桌', price: 599, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: '北欧风床架', price: 799, image: '/placeholder.svg?height=200&width=200' },
  { id: 4, name: '简约书柜', price: 399, image: '/placeholder.svg?height=200&width=200' },
]

export function HomePageComponent() {
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
            <div className="flex items-center">
              <div className="hidden sm:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="搜索产品..."
                    className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <button className="ml-4 p-2 text-gray-400 hover:text-gray-500">
                <ShoppingCart className="h-6 w-6" />
              </button>
              <button className="ml-4 p-2 text-gray-400 hover:text-gray-500">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">热门产品</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
                  <p className="text-gray-600">¥{product.price}</p>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                    加入购物车
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Separator.Root className="bg-gray-200 h-px" />

      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">公司</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                    关于我们
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                    联系我们
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">客户服务</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                    配送信息
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                    退换货政策
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">关注我们</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                    微信
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                    微博
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2023 家居天地. 保留所有权利.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}