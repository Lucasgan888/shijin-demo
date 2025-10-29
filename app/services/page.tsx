import type { Metadata } from 'next'
import Layout from '../../components/Layout'

export const metadata: Metadata = {
  title: "服务介绍 | sjmfilms - 专业影视广告制作服务",
  description: "sjmfilms提供电视广告TVC创意制作、宣传片专题片制作、商业摄影平面拍摄、平面设计视觉识别等全方位影视广告服务。",
  keywords: ["TVC制作", "宣传片制作", "商业摄影", "平面设计", "视觉识别", "后期制作"],
}

export default function Services() {
  const services = [
    {
      title: "电视广告 (TVC) 创意与制作",
      description: "从市场分析到后期完成的全流程TVC制作服务，为品牌打造传播力强、记忆点深的广告作品",
      features: [
        "市场分析与用户洞察",
        "创意构思与概念设计", 
        "脚本撰写与故事板",
        "演员指导与表演训练",
        "美术置景与道具制作",
        "专业拍摄与现场执行",
        "后期剪辑与包装",
        "调色与音效合成",
        "三维特效与视觉包装"
      ],
      icon: "🎬",
      color: "bg-blue-500"
    },
    {
      title: "宣传片与专题片制作",
      description: "企业形象宣传、技术推广、发布会纪录等各类专题片制作服务",
      features: [
        "企业形象宣传片",
        "产品技术推广片",
        "发布会活动纪录",
        "品牌故事微电影",
        "员工培训视频",
        "年会庆典纪录",
        "展会宣传片",
        "招商推介片"
      ],
      icon: "📺",
      color: "bg-green-500"
    },
    {
      title: "商业摄影/平面拍摄",
      description: "产品、人像、空间、建筑等专业商业摄影服务，提供高品质视觉素材",
      features: [
        "产品摄影与精修",
        "企业人像拍摄",
        "空间建筑摄影",
        "活动现场摄影",
        "食品美食摄影",
        "时尚服装拍摄",
        "工业产品摄影",
        "航拍与无人机摄影"
      ],
      icon: "📸",
      color: "bg-purple-500"
    },
    {
      title: "平面设计与视觉识别",
      description: "KV设计、品牌视觉系统等平面设计解决方案，打造统一品牌形象",
      features: [
        "KV主视觉设计",
        "品牌视觉识别系统",
        "海报宣传物料设计",
        "包装设计服务",
        "展会物料设计",
        "数字媒体设计",
        "印刷品设计制作",
        "品牌形象升级"
      ],
      icon: "🎨",
      color: "bg-red-500"
    }
  ]

  const workflow = [
    {
      step: "01",
      title: "需求分析",
      description: "深入了解客户需求、品牌定位、目标受众",
      icon: "🎯"
    },
    {
      step: "02", 
      title: "创意策划",
      description: "制定创意方向、脚本撰写、视觉概念设计",
      icon: "💡"
    },
    {
      step: "03",
      title: "预制准备",
      description: "演员选择、场地勘景、道具准备、设备调试",
      icon: "🎪"
    },
    {
      step: "04",
      title: "拍摄执行",
      description: "专业团队现场拍摄，确保每个镜头完美",
      icon: "🎬"
    },
    {
      step: "05",
      title: "后期制作",
      description: "剪辑包装、调色、特效、音效合成",
      icon: "⚡"
    },
    {
      step: "06",
      title: "交付验收",
      description: "成片交付、修改完善、最终验收",
      icon: "✅"
    }
  ]

  return (
    <Layout>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              专业 <span className="text-[#EAC32E]">服务</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              全方位影视广告制作服务，从创意到执行的一站式解决方案
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <div key={index} className="bg-black p-8 rounded-lg border border-gray-800 hover:border-[#EAC32E] transition-colors duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#EAC32E] rounded-full mr-3"></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">服务流程</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              标准化的服务流程，确保项目高效执行和高质量交付
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-[#EAC32E] transition-colors duration-300 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#EAC32E] rounded-full flex items-center justify-center text-black font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <div className="text-3xl">{step.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-[#EAC32E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">为什么选择我们的服务</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#EAC32E] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">品质保证</h3>
              <p className="text-gray-400">
                严格的质量控制流程，确保每个作品都达到行业顶尖水准
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#EAC32E] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">高效执行</h3>
              <p className="text-gray-400">
                "时间就是金钱"的理念，系统化流程确保项目按时交付
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#EAC32E] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">创意无限</h3>
              <p className="text-gray-400">
                兼具甲乙方视角，深度理解需求，创造独特的视觉表达
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              开始您的项目 <span className="text-[#EAC32E]">合作</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              无论是TVC广告、宣传片制作，还是商业摄影、平面设计，我们都能为您提供专业的解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#EAC32E] hover:bg-[#d4a925] text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                咨询报价
              </button>
              <button className="border-2 border-[#EAC32E] text-[#EAC32E] hover:bg-[#EAC32E] hover:text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                查看案例
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}