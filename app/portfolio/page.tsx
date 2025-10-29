import type { Metadata } from 'next'
import Layout from '../../components/Layout'

export const metadata: Metadata = {
  title: "作品展示 | sjmfilms - 精品案例与项目展示",
  description: "sjmfilms精品案例展示：OPPO Reno5广告片、OnePlus新品系列片、百事可乐PEPSI广告、美的智能家电宣传片等成功项目。",
  keywords: ["OPPO广告片", "OnePlus营销视频", "百事可乐广告", "美的宣传片", "TVC案例", "品牌视频"],
}

export default function Portfolio() {
  const featuredCases = [
    {
      title: "OnePlus OneDayWithAI Film",
      client: "OnePlus",
      category: "AI主题影片",
      description: "OnePlus联合AI技术打造的创新主题影片，展现AI如何改变用户的一天，通过科技感的视觉效果和创新表达传达品牌的技术实力。",
      services: ["AI创新主题", "科技感视觉效果", "创意表达"],
      image: "/placeholder.jpg",
      year: "2024",
      duration: "2min",
      highlight: "首创AI与手机功能结合的影像表达方式"
    },
    {
      title: "OPPO Reno5 创意视频",
      client: "OPPO",
      category: "TVC广告",
      description: "OPPO Reno5系列的创意广告片，融合创意策划、精美镜头语言、视觉包装和三维渲染技术，突出产品的时尚科技感。",
      services: ["创意策划", "镜头语言", "视觉包装", "三维渲染"],
      image: "/placeholder.jpg",
      year: "2023",
      duration: "30s",
      highlight: "获得品牌方高度认可，全平台播放量超千万"
    },
    {
      title: "OPPO 618大促创意视频",
      client: "OPPO",
      category: "电商营销",
      description: "为OPPO 618购物节打造的创意营销视频，结合电商大促的节庆氛围，通过创意表达和品牌传播提升销售转化。",
      services: ["电商大促营销", "创意表达", "品牌传播"],
      image: "/placeholder.jpg",
      year: "2023",
      duration: "15s",
      highlight: "有效提升618期间品牌关注度和销售转化"
    },
    {
      title: "OPPO ColorOS AI功能迎春",
      client: "OPPO", 
      category: "节庆营销",
      description: "以新春为主题展示OPPO ColorOS AI功能的节庆营销广告，结合传统节日元素和现代AI技术，传达科技让生活更美好的理念。",
      services: ["新春主题", "AI功能展示", "节庆营销"],
      image: "/placeholder.jpg",
      year: "2024",
      duration: "45s",
      highlight: "完美融合传统文化与现代科技"
    },
    {
      title: "ANKER创意视频",
      client: "ANKER",
      category: "国际品牌",
      description: "为国际科技品牌ANKER制作的创意视频，展现产品的科技创新和国际化品质，强调品牌的全球视野和技术实力。",
      services: ["科技产品", "国际品牌", "创新表达"],
      image: "/placeholder.jpg",
      year: "2023",
      duration: "30s",
      highlight: "获得国际市场的广泛认可"
    },
    {
      title: "DREAME品牌宣传片",
      client: "DREAME",
      category: "品牌宣传片",
      description: "DREAME智能清洁品牌的形象宣传片，通过生活方式的展现和产品功能的深度展示，传达智能科技改善生活品质的品牌价值。",
      services: ["智能清洁", "生活方式", "产品功能展示"],
      image: "/placeholder.jpg",
      year: "2023",
      duration: "1min",
      highlight: "成功塑造高端智能家电品牌形象"
    }
  ]

  const otherCases = [
    { title: "Govee智能照明系列", client: "Govee", category: "智能家居", year: "2023" },
    { title: "小鹏汽车品牌片", client: "小鹏汽车", category: "汽车品牌", year: "2024" },
    { title: "魅族手机发布会", client: "魅族", category: "产品发布", year: "2023" },
    { title: "vivo影像技术展示", client: "vivo", category: "技术展示", year: "2024" },
    { title: "Liby立白日化广告", client: "Liby", category: "日化用品", year: "2023" },
    { title: "MediaTek处理器广告", client: "MediaTek", category: "芯片技术", year: "2023" },
    { title: "UCB制药企业宣传", client: "UCB", category: "医药健康", year: "2024" },
    { title: "美图秀秀创意片", client: "美图", category: "应用软件", year: "2023" },
    { title: "Snapchat滤镜推广", client: "Snapchat", category: "社交应用", year: "2024" }
  ]

  return (
    <Layout>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              精品 <span className="text-[#EAC32E]">案例</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              为头部品牌打造的传播力强、记忆点深的影视广告作品
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">重点案例展示</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              深度解析我们的代表性作品，展现专业制作水准
            </p>
          </div>
          
          <div className="space-y-16">
            {featuredCases.map((project, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <span className="bg-[#EAC32E] text-black px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      {project.category}
                    </span>
                    <span className="text-gray-400 text-sm">{project.year}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-[#EAC32E] font-semibold mb-6 text-lg">客户：{project.client}</p>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">服务内容：</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <span>时长：{project.duration}</span>
                      <span>年份：{project.year}</span>
                    </div>
                  </div>
                  
                  <div className="bg-black p-4 rounded-lg border border-gray-800 mb-8">
                    <h4 className="text-[#EAC32E] font-semibold mb-2">项目亮点</h4>
                    <p className="text-gray-300">{project.highlight}</p>
                  </div>
                  
                  <button className="bg-[#EAC32E] hover:bg-[#d4a925] text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    查看详情
                  </button>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative group">
                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto mb-4 bg-[#EAC32E] rounded-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                          <p className="text-gray-400 font-semibold">{project.title}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <button className="bg-[#EAC32E] text-black px-6 py-3 rounded-lg font-semibold">
                        播放视频
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">更多项目</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              我们服务过的其他优秀品牌项目
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCases.map((project, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#EAC32E] transition-colors duration-300 group">
                <div className="aspect-video bg-gray-800 rounded-lg mb-6 overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 bg-[#EAC32E] rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">{project.client}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                    {project.category}
                  </span>
                  <span className="text-gray-500 text-xs">{project.year}</span>
                </div>
                
                <h3 className="text-white font-semibold mb-2 group-hover:text-[#EAC32E] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">客户：{project.client}</p>
                
                <button className="text-[#EAC32E] text-sm font-semibold hover:text-[#d4a925] transition-colors">
                  查看详情 →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">项目数据</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#EAC32E] mb-2">100+</div>
              <div className="text-gray-400">成功案例</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#EAC32E] mb-2">50+</div>
              <div className="text-gray-400">合作品牌</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#EAC32E] mb-2">1000+</div>
              <div className="text-gray-400">万次播放</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#EAC32E] mb-2">98%</div>
              <div className="text-gray-400">客户满意度</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              开始您的 <span className="text-[#EAC32E]">项目合作</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              让我们为您的品牌创造下一个成功案例
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#EAC32E] hover:bg-[#d4a925] text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                讨论项目
              </button>
              <button className="border-2 border-[#EAC32E] text-[#EAC32E] hover:bg-[#EAC32E] hover:text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                获取报价
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}