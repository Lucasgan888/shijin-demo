import type { Metadata } from 'next'
import Layout from '../components/Layout'

export const metadata: Metadata = {
  title: "sjmfilms | 高端TVC广告片创作专家 - 首页",
  description: "sjmfilms为OPPO、OnePlus、美的等头部品牌提供国际水准的TVC和广告片制作服务。专业团队，创意无限，欢迎咨询商业拍摄合作。",
  keywords: ["TVC广告", "商业广告片", "品牌视频制作", "OPPO广告", "OnePlus营销", "美的广告片"],
  openGraph: {
    title: "sjmfilms | 高端TVC广告片创作专家",
    description: "为头部品牌提供国际水准的影视创作服务",
    type: "website",
  },
}

export default function Home() {
  return (
    <Layout>
      <section className="hero min-h-screen flex items-center justify-center relative overflow-hidden" role="banner">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-[#EAC32E] tracking-wider">
            sjmfilms
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-200">
            高端TVC · 广告片创作专家
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            为 <span className="text-[#EAC32E] font-semibold">OPPO</span>、<span className="text-[#EAC32E] font-semibold">OnePlus</span>、<span className="text-[#EAC32E] font-semibold">ANKER</span>、<span className="text-[#EAC32E] font-semibold">DREAME</span>、<span className="text-[#EAC32E] font-semibold">Govee</span> 等国际知名品牌提供专业的TVC和创意影像服务
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#EAC32E] hover:bg-[#d4a925] text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              查看作品集
            </button>
            <button className="border-2 border-[#EAC32E] text-[#EAC32E] hover:bg-[#EAC32E] hover:text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              联系合作
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#EAC32E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="hero-gallery py-20 bg-gray-900" aria-label="核心作品展示">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              核心作品
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              我们为知名品牌打造的精品TVC和广告片作品
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* OnePlus OneDayWithAI Film */}
            <div className="group relative overflow-hidden rounded-lg bg-gray-800 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#EAC32E] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="font-semibold">OnePlus AI Film</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-semibold mb-2">OnePlus OneDayWithAI Film</h3>
                <p className="text-gray-300 text-sm">AI创新主题影片 · 科技感视觉效果</p>
              </div>
            </div>

            {/* OPPO Reno5 创意视频 */}
            <div className="group relative overflow-hidden rounded-lg bg-gray-800 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#EAC32E] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="font-semibold">OPPO Reno5</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-semibold mb-2">OPPO Reno5 创意视频</h3>
                <p className="text-gray-300 text-sm">创意策划 · 镜头语言 · 三维渲染</p>
              </div>
            </div>

            {/* OPPO 618大促创意视频 */}
            <div className="group relative overflow-hidden rounded-lg bg-gray-800 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#EAC32E] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="font-semibold">OPPO 618</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-semibold mb-2">OPPO 618大促创意视频</h3>
                <p className="text-gray-300 text-sm">电商大促营销 · 创意表达 · 品牌传播</p>
              </div>
            </div>

            {/* OPPO ColorOS AI功能迎春 */}
            <div className="group relative overflow-hidden rounded-lg bg-gray-800 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#EAC32E] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="font-semibold">ColorOS AI迎春</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-semibold mb-2">OPPO ColorOS AI功能迎春</h3>
                <p className="text-gray-300 text-sm">新春主题 · AI功能展示 · 节庆营销</p>
              </div>
            </div>

            {/* ANKER创意视频 */}
            <div className="group relative overflow-hidden rounded-lg bg-gray-800 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#EAC32E] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="font-semibold">ANKER 创意</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-semibold mb-2">ANKER创意视频</h3>
                <p className="text-gray-300 text-sm">科技产品 · 国际品牌 · 创新表达</p>
              </div>
            </div>

            {/* DREAME品牌宣传 */}
            <div className="group relative overflow-hidden rounded-lg bg-gray-800 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#EAC32E] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="font-semibold">DREAME</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-semibold mb-2">DREAME品牌宣传片</h3>
                <p className="text-gray-300 text-sm">智能清洁 · 生活方式 · 产品功能展示</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            为什么选择 <span className="text-[#EAC32E]">sjmfilms</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#EAC32E] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">创意无限</h3>
              <p className="text-gray-400">专业创意团队，为每个项目量身定制独特的视觉表达</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#EAC32E] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">国际视野</h3>
              <p className="text-gray-400">具备国际化制作经验，服务全球知名品牌</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#EAC32E] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">品质保证</h3>
              <p className="text-gray-400">严格的质量控制流程，确保每个作品都达到行业顶尖水准</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}