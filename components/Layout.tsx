import React from 'react'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#EAC32E] hover:text-[#d4a925] transition-colors">
            sjmfilms
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-[#EAC32E] transition-colors">
              首页
            </Link>
            <Link href="/about" className="hover:text-[#EAC32E] transition-colors">
              关于我们
            </Link>
            <Link href="/team" className="hover:text-[#EAC32E] transition-colors">
              团队介绍
            </Link>
            <Link href="/services" className="hover:text-[#EAC32E] transition-colors">
              服务介绍
            </Link>
            <Link href="/portfolio" className="hover:text-[#EAC32E] transition-colors">
              作品展示
            </Link>
            <Link href="/clients" className="hover:text-[#EAC32E] transition-colors">
              合作客户
            </Link>
            <Link href="/contact" className="hover:text-[#EAC32E] transition-colors">
              联系我们
            </Link>
          </div>

          <button className="md:hidden text-[#EAC32E]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      <main role="main">
        {children}
      </main>

      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-[#EAC32E] font-bold text-lg">sjmfilms</p>
              <p className="text-gray-400 text-sm">高端TVC · 广告片创作专家</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#EAC32E] transition-colors">
                微信
              </a>
              <a href="#" className="text-gray-400 hover:text-[#EAC32E] transition-colors">
                微博
              </a>
              <a href="#" className="text-gray-400 hover:text-[#EAC32E] transition-colors">
                邮箱
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2024 sjmfilms. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}