import type { Metadata } from 'next'
import Layout from '../../components/Layout'

export const metadata: Metadata = {
  title: "关于我们 | sjmfilms - 专业影视广告制作团队",
  description: "sjmfilms成立于2017年，是整合型广告服务商，主打创意策划、平面设计、视频拍摄、后期制作。团队兼具甲乙方视角，善于将产品卖点转化为镜头语言。",
  keywords: ["影视制作公司", "广告公司", "创意策划", "视频制作", "后期制作"],
}

export default function About() {
  return (
    <Layout>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              关于 <span className="text-[#EAC32E]">sjmfilms</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              专业影视广告制作团队，成立于2017年
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">公司介绍</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  <span className="text-[#EAC32E] font-semibold">sjmfilms</span> 成立于2017年，定位为整合型广告服务商，专注于为头部品牌提供高端影视广告制作服务。
                </p>
                <p>
                  我们主打<span className="text-white font-semibold">创意策划、平面设计、视频拍摄、后期制作</span>的全流程服务，为OPPO、OnePlus、百事可乐等知名品牌打造了众多传播力强、记忆点深的影视广告作品。
                </p>
                <p>
                  团队成员兼具甲乙方视角，更懂客户更懂用户，善于将产品卖点转化为镜头语言，为品牌创造最大价值。
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold text-[#EAC32E] mb-4">公司文化</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  "时间就是金钱" - 我们以高效执行、敏锐洞察、系统化运作为核心理念，确保每个项目都能在最佳时间内交付最优质的作品。
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#EAC32E] mb-2">7+</div>
                  <div className="text-gray-400">年专业经验</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#EAC32E] mb-2">100+</div>
                  <div className="text-gray-400">成功案例</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#EAC32E] mb-2">50+</div>
                  <div className="text-gray-400">合作品牌</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#EAC32E] mb-2">20+</div>
                  <div className="text-gray-400">专业团队</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">核心优势</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              我们的专业能力和服务优势
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#EAC32E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">创意策划</h3>
              <p className="text-gray-400">市场分析、创意构思、脚本撰写，打造独特品牌故事</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#EAC32E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">专业拍摄</h3>
              <p className="text-gray-400">演员指导、美术置景、专业摄像，确保每个镜头完美</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#EAC32E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v10a2 2 0 002 2h6a2 2 0 002-2V7H7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">后期制作</h3>
              <p className="text-gray-400">剪辑包装、调色、音效合成、三维特效，精益求精</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#EAC32E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">快速交付</h3>
              <p className="text-gray-400">高效执行，系统化流程，确保项目按时高质量完成</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">服务领域</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-[#EAC32E] mb-4">电视广告 (TVC)</h3>
              <p className="text-gray-300 mb-6">从创意构思到后期完成的全流程TVC制作服务</p>
              <ul className="space-y-2 text-gray-400">
                <li>• 市场分析与创意策划</li>
                <li>• 脚本撰写与故事板设计</li>
                <li>• 专业拍摄与导演服务</li>
                <li>• 后期剪辑与视觉特效</li>
              </ul>
            </div>
            
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-[#EAC32E] mb-4">宣传片制作</h3>
              <p className="text-gray-300 mb-6">企业形象、产品推广、活动纪录等专题片制作</p>
              <ul className="space-y-2 text-gray-400">
                <li>• 企业形象宣传片</li>
                <li>• 产品技术推广片</li>
                <li>• 发布会活动纪录</li>
                <li>• 品牌故事微电影</li>
              </ul>
            </div>
            
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-[#EAC32E] mb-4">商业摄影</h3>
              <p className="text-gray-300 mb-6">产品、人像、空间等专业商业摄影服务</p>
              <ul className="space-y-2 text-gray-400">
                <li>• 产品摄影与修图</li>
                <li>• 企业人像拍摄</li>
                <li>• 空间建筑摄影</li>
                <li>• 活动现场摄影</li>
              </ul>
            </div>
            
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-[#EAC32E] mb-4">平面设计</h3>
              <p className="text-gray-300 mb-6">品牌视觉系统与平面设计解决方案</p>
              <ul className="space-y-2 text-gray-400">
                <li>• KV主视觉设计</li>
                <li>• 品牌视觉识别系统</li>
                <li>• 海报宣传物料</li>
                <li>• 包装设计服务</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}