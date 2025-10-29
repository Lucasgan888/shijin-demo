import type { Metadata } from 'next'
import Layout from '../../components/Layout'

export const metadata: Metadata = {
  title: "合作客户 | sjmfilms - 信赖的品牌伙伴",
  description: "sjmfilms合作客户包括OPPO、OnePlus、美的、百事可乐、Liby、MediaTek、UCB等知名品牌，获得客户一致好评。",
  keywords: ["合作客户", "品牌伙伴", "OPPO", "OnePlus", "美的", "百事可乐", "客户推荐"],
}

export default function Clients() {
  const clients = [
    {
      name: "OPPO",
      logo: "/placeholder-logo.svg",
      description: "全球领先的智能手机品牌",
      projects: ["Reno5创意视频", "ColorOS AI功能迎春", "Find X8系列", "618大促创意视频"],
      testimonial: "sjmfilms团队的创意执行力令人印象深刻，每次合作都能超出我们的期望。",
      industry: "消费电子"
    },
    {
      name: "OnePlus",
      logo: "/placeholder-logo.svg", 
      description: "Never Settle 的品牌理念",
      projects: ["OneDayWithAI Film", "新品系列片", "Winter Launch Event", "全球影像大赛"],
      testimonial: "专业的制作水准和国际化视野，完美契合我们的品牌调性。",
      industry: "消费电子"
    },
    {
      name: "ANKER",
      logo: "/placeholder-logo.svg",
      description: "全球知名科技配件品牌",
      projects: ["创意视频", "产品功能展示", "国际市场推广"],
      testimonial: "创新的表达方式和专业的制作水准，帮助我们在国际市场获得更大关注。",
      industry: "消费电子"
    },
    {
      name: "DREAME",
      logo: "/placeholder-logo.svg",
      description: "智能清洁设备领导品牌",
      projects: ["品牌宣传片", "产品功能展示", "生活方式营销"],
      testimonial: "精准把握了智能家居的生活方式传播，成功塑造高端品牌形象。",
      industry: "智能家居"
    },
    {
      name: "Govee",
      logo: "/placeholder-logo.svg",
      description: "智能照明解决方案提供商",
      projects: ["智能照明系列", "产品创意片", "科技体验展示"],
      testimonial: "出色的视觉效果展现了我们产品的科技感和时尚感。",
      industry: "智能家居"
    },
    {
      name: "小鹏汽车",
      logo: "/placeholder-logo.svg",
      description: "领先的智能电动汽车品牌",
      projects: ["品牌形象片", "新车发布", "智能驾驶展示"],
      testimonial: "专业团队深度理解汽车行业，制作水准达到国际一流水平。",
      industry: "汽车制造"
    },
    {
      name: "魅族",
      logo: "/placeholder-logo.svg",
      description: "具有设计美学的科技品牌",
      projects: ["手机发布会", "品牌宣传", "产品美学展示"],
      testimonial: "独特的美学视角与我们的设计理念完美契合。",
      industry: "消费电子"
    },
    {
      name: "vivo",
      logo: "/placeholder-logo.svg",
      description: "全球性的移动互联网智能终端公司",
      projects: ["影像技术展示", "品牌营销", "产品广告"],
      testimonial: "在影像技术的视觉表现上展现了卓越的专业能力。",
      industry: "消费电子"
    },
    {
      name: "美图",
      logo: "/placeholder-logo.svg",
      description: "美颜相机与影像科技公司",
      projects: ["创意片制作", "应用推广", "品牌营销"],
      testimonial: "创意新颖，完美展现了我们产品的核心价值。",
      industry: "互联网科技"
    },
    {
      name: "Snapchat",
      logo: "/placeholder-logo.svg",
      description: "全球领先的社交媒体平台",
      projects: ["滤镜推广", "创意营销", "用户增长"],
      testimonial: "国际化的制作水准和创新思维，助力我们在中国市场的发展。",
      industry: "社交媒体"
    }
  ]

  const industries = [
    { name: "消费电子", count: 20, icon: "📱" },
    { name: "智能家居", count: 12, icon: "🏠" },
    { name: "汽车制造", count: 8, icon: "🚗" },
    { name: "互联网科技", count: 15, icon: "💻" },
    { name: "社交媒体", count: 6, icon: "📱" },
    { name: "日化用品", count: 6, icon: "🧴" },
    { name: "医疗健康", count: 7, icon: "⚕️" },
    { name: "教育培训", count: 3, icon: "📚" }
  ]

  return (
    <Layout>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              合作 <span className="text-[#EAC32E]">客户</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              与众多知名品牌建立长期合作关系，获得客户一致好评
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">核心客户</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              与行业领军品牌的深度合作
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {clients.slice(0, 4).map((client, index) => (
              <div key={index} className="bg-black p-8 rounded-lg border border-gray-800 hover:border-[#EAC32E] transition-colors duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-700 rounded-lg mr-6 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#EAC32E] rounded-lg flex items-center justify-center">
                      <span className="text-black font-bold text-lg">{client.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{client.name}</h3>
                    <p className="text-gray-400">{client.description}</p>
                    <span className="inline-block bg-gray-800 text-[#EAC32E] px-3 py-1 rounded-full text-sm mt-2">
                      {client.industry}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">合作项目：</h4>
                  <div className="flex flex-wrap gap-2">
                    {client.projects.map((project, projectIndex) => (
                      <span key={projectIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-sm">
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                  <h4 className="text-[#EAC32E] font-semibold mb-3">客户评价</h4>
                  <p className="text-gray-300 italic leading-relaxed">
                    "{client.testimonial}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">更多合作伙伴</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.slice(4).map((client, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#EAC32E] transition-colors duration-300 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#EAC32E] rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-xl">{client.name.charAt(0)}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                <p className="text-gray-400 mb-4">{client.description}</p>
                
                <span className="inline-block bg-gray-800 text-[#EAC32E] px-3 py-1 rounded-full text-sm">
                  {client.industry}
                </span>
                
                <div className="mt-4 text-sm text-gray-500">
                  {client.projects.length} 个合作项目
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">服务行业</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              跨行业的丰富经验，深度理解不同领域的传播需求
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-gray-800 text-center hover:border-[#EAC32E] transition-colors duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-white font-semibold mb-2">{industry.name}</h3>
                <p className="text-[#EAC32E] font-bold text-lg">{industry.count}+</p>
                <p className="text-gray-400 text-sm">个合作项目</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">合作数据</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#EAC32E] mb-2">50+</div>
              <div className="text-gray-400">合作品牌</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#EAC32E] mb-2">98%</div>
              <div className="text-gray-400">客户满意度</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#EAC32E] mb-2">85%</div>
              <div className="text-gray-400">客户续约率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#EAC32E] mb-2">7</div>
              <div className="text-gray-400">年合作经验</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">客户证言</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <div className="text-[#EAC32E] text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                sjmfilms团队的专业水准和创意能力让我们印象深刻，每次合作都能带来意想不到的惊喜。
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#EAC32E] rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">O</span>
                </div>
                <div>
                  <div className="text-white font-semibold">OPPO 市场部</div>
                  <div className="text-gray-400 text-sm">品牌传播负责人</div>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <div className="text-[#EAC32E] text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                高效的执行力和国际化的制作水准，完美诠释了我们的品牌理念。期待更多的合作。
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#EAC32E] rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">1</span>
                </div>
                <div>
                  <div className="text-white font-semibold">OnePlus 营销部</div>
                  <div className="text-gray-400 text-sm">全球营销总监</div>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <div className="text-[#EAC32E] text-4xl mb-4">"</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                从创意策划到后期制作，每个环节都体现了极高的专业素养。值得信赖的合作伙伴。
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#EAC32E] rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">美</span>
                </div>
                <div>
                  <div className="text-white font-semibold">美的集团</div>
                  <div className="text-gray-400 text-sm">品牌管理中心</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              成为我们的 <span className="text-[#EAC32E]">合作伙伴</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              让我们为您的品牌创造更大价值，建立长期稳固的合作关系
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#EAC32E] hover:bg-[#d4a925] text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                开始合作
              </button>
              <button className="border-2 border-[#EAC32E] text-[#EAC32E] hover:bg-[#EAC32E] hover:text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}