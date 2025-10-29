import type { Metadata } from 'next'
import Layout from '../../components/Layout'

export const metadata: Metadata = {
  title: "团队介绍 | sjmfilms - 专业影视制作团队",
  description: "sjmfilms专业团队包括创意总监、后期总监、美术指导、摄像指导等核心成员，涵盖市场、商务、创意、摄制、制片等各个环节。",
  keywords: ["影视制作团队", "创意总监", "后期制作", "美术指导", "摄像团队"],
}

export default function Team() {
  const coreTeam = [
    {
      name: "札克",
      position: "创意总监",
      responsibility: "负责整体创意方向、品牌策略制定与创意概念开发",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "黄灏",
      position: "后期总监", 
      responsibility: "负责剪辑、调色、���效、包装等后期制作全流程管理",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "李梦玲",
      position: "美术指导",
      responsibility: "美术风格把控、场景设计、道具服装协调",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "张裕浓",
      position: "摄像指导",
      responsibility: "摄像技术指导、镜头语言设计、画面质量控制",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "张梓航",
      position: "总制片",
      responsibility: "项目统筹管理、资源配置、进度把控",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "卢佳捷",
      position: "摄影监制",
      responsibility: "摄影质量监督、技术标准制定、团队培训",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "罗阳",
      position: "制片主任",
      responsibility: "现场制片执行、拍摄协调、安全管理",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "王丹阳",
      position: "三维制片",
      responsibility: "三维特效制作、动画设计、技术创新",
      avatar: "/placeholder-user.jpg"
    }
  ]

  const departments = [
    {
      name: "市场中心",
      description: "市场分析、用户洞察、竞品研究",
      icon: "📊"
    },
    {
      name: "商务团队",
      description: "客户对接、项目谈判、合同管理",
      icon: "🤝"
    },
    {
      name: "创意部门",
      description: "创意策划、脚本撰写、概念设计",
      icon: "💡"
    },
    {
      name: "摄制组",
      description: "导演、摄像、灯光、现场执行",
      icon: "🎬"
    },
    {
      name: "制片部",
      description: "项目管理、进度控制、资源协调",
      icon: "📋"
    },
    {
      name: "美术组",
      description: "美术设计、置景、道具、服装",
      icon: "🎨"
    },
    {
      name: "后期中心",
      description: "剪辑、调色、特效、三维、音效",
      icon: "⚡"
    },
    {
      name: "平面团队",
      description: "平面摄影、设计、策划、执行",
      icon: "📸"
    }
  ]

  return (
    <Layout>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              专业 <span className="text-[#EAC32E]">团队</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              汇聚业界精英，兼具甲乙方视角，更懂客户更懂用户
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">核心成员</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              经验丰富的专业团队，确保每个项目的高质量交付
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-gray-800 text-center group hover:border-[#EAC32E] transition-colors duration-300">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-16 h-16 bg-[#EAC32E] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-xl">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#EAC32E] font-semibold mb-3">{member.position}</p>
                <p className="text-gray-400 text-sm">{member.responsibility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">组织架构</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              完善的部门分工，确保项目高效执行
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#EAC32E] transition-colors duration-300">
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{dept.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">团队优势</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#EAC32E] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">专业分工</h3>
              <p className="text-gray-400">
                明确的职责分工，专业的技能配置，确保每个环节都有专家把关
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#EAC32E] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">高效协作</h3>
              <p className="text-gray-400">
                系统化的工作流程，高效的团队协作，确保项目按时高质量完成
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#EAC32E] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">创新思维</h3>
              <p className="text-gray-400">
                兼具甲乙方视角，深度理解客户需求和用户心理，创造独特价值
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              与我们的团队 <span className="text-[#EAC32E]">合作</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              专业的团队配置，丰富的行业经验，为您的品牌创造最大价值
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