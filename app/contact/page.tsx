import type { Metadata } from 'next'
import Layout from '../../components/Layout'

export const metadata: Metadata = {
  title: "联系我们 | sjmfilms - 开始您的项目合作",
  description: "联系sjmfilms专业影视制作团队，官网www.sjmfilms.com，专业TVC广告片制作，欢迎咨询项目合作。",
  keywords: ["联系sjmfilms", "影视制作咨询", "TVC制作报价", "广告片合作", "项目咨询"],
}

export default function Contact() {
  const contactInfo = [
    {
      title: "电话咨询",
      content: "+86 138 0000 0000",
      description: "工作日 9:00-18:00",
      icon: "📞"
    },
    {
      title: "邮箱联系", 
      content: "hello@sjmfilms.com",
      description: "24小时内回复",
      icon: "📧"
    },
    {
      title: "微信咨询",
      content: "sjmfilms2017",
      description: "扫描二维码添加",
      icon: "💬"
    },
    {
      title: "公司地址",
      content: "广州市天河区珠江新城",
      description: "预约参观工作室",
      icon: "📍"
    }
  ]

  const offices = [
    {
      city: "广州总部",
      address: "广州市天河区珠江新城金穗路62号",
      phone: "+86 020 8888 8888",
      email: "gz@sjmfilms.com"
    },
    {
      city: "深圳分部",
      address: "深圳市南山区科技园南区",
      phone: "+86 0755 8888 8888", 
      email: "sz@sjmfilms.com"
    },
    {
      city: "上海办事处",
      address: "上海市浦东新区陆家嘴金融区",
      phone: "+86 021 8888 8888",
      email: "sh@sjmfilms.com"
    }
  ]

  return (
    <Layout>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              联系 <span className="text-[#EAC32E]">我们</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              让我们开始一段精彩的合作，为您的品牌创造更大价值
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">项目咨询</h2>
              <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                无论您需要TVC广告制作、宣传片拍摄，还是品牌视觉设计，我们都能为您提供专业的解决方案。请填写下方表单，我们会在24小时内与您取得联系。
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">姓名 *</label>
                    <input 
                      type="text" 
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EAC32E] focus:outline-none transition-colors"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">公司名称</label>
                    <input 
                      type="text" 
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EAC32E] focus:outline-none transition-colors"
                      placeholder="请输入公司名称"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">联系电话 *</label>
                    <input 
                      type="tel" 
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EAC32E] focus:outline-none transition-colors"
                      placeholder="请输入手机号码"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">邮箱地址 *</label>
                    <input 
                      type="email" 
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EAC32E] focus:outline-none transition-colors"
                      placeholder="请输入邮箱地址"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">项目类型</label>
                  <select className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EAC32E] focus:outline-none transition-colors">
                    <option value="">请选择项目类型</option>
                    <option value="tvc">TVC广告制作</option>
                    <option value="promo">宣传片制作</option>
                    <option value="photo">商业摄影</option>
                    <option value="design">平面设计</option>
                    <option value="other">其他需求</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">预算范围</label>
                  <select className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EAC32E] focus:outline-none transition-colors">
                    <option value="">请选择预算范围</option>
                    <option value="10-50">10-50万</option>
                    <option value="50-100">50-100万</option>
                    <option value="100-200">100-200万</option>
                    <option value="200+">200万以上</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">项目详情 *</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EAC32E] focus:outline-none transition-colors resize-none"
                    placeholder="请详细描述您的项目需求、目标受众、预期效果等..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#EAC32E] hover:bg-[#d4a925] text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  提交咨询
                </button>
                
                <p className="text-gray-400 text-sm text-center">
                  * 为必填项。我们承诺保护您的隐私信息，仅用于项目沟通。
                </p>
              </form>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">联系方式</h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-black p-6 rounded-lg border border-gray-800 flex items-center">
                    <div className="text-4xl mr-6">{info.icon}</div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{info.title}</h3>
                      <p className="text-[#EAC32E] font-semibold text-lg mb-1">{info.content}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <h3 className="text-white font-semibold text-xl mb-6">微信二维码</h3>
                <div className="flex items-center justify-center">
                  <div className="w-48 h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-[#EAC32E] rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <span className="text-black font-bold text-2xl">QR</span>
                      </div>
                      <p className="text-gray-400 text-sm">扫描添加微信</p>
                      <p className="text-[#EAC32E] font-semibold">sjmfilms2017</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">办公地点</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              我们在多个城市设有办公室，就近为您提供专业服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-[#EAC32E] transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">{office.city}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-[#EAC32E] mr-3 mt-1">📍</div>
                    <div>
                      <p className="text-white font-semibold">地址</p>
                      <p className="text-gray-400">{office.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-[#EAC32E] mr-3 mt-1">📞</div>
                    <div>
                      <p className="text-white font-semibold">电话</p>
                      <p className="text-gray-400">{office.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-[#EAC32E] mr-3 mt-1">📧</div>
                    <div>
                      <p className="text-white font-semibold">邮箱</p>
                      <p className="text-gray-400">{office.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">常见问题</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-white font-semibold text-lg mb-3">项目制作周期一般需要多长时间？</h3>
              <p className="text-gray-400 leading-relaxed">
                制作周期根据项目复杂程度而定。一般TVC广告15-30秒需要2-4周，宣传片需要3-6周。我们会根据您的具体需求和时间要求制定详细的制作计划。
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-white font-semibold text-lg mb-3">如何确保项目质量和进度？</h3>
              <p className="text-gray-400 leading-relaxed">
                我们采用标准化的项目管理流程，包括需求确认、创意提案、分镜头脚本、拍摄执行、后期制作等各个环节都有专业团队负责，确保每个阶段的质量和进度可控。
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-white font-semibold text-lg mb-3">是否提供后期修改服务？</h3>
              <p className="text-gray-400 leading-relaxed">
                我们提供3次免费修改机会，确保最终作品符合您的期望。超出免费修改次数的调整会根据修改复杂程度收取相应费用。
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-white font-semibold text-lg mb-3">可以提供哪些格式的最终交付物？</h3>
              <p className="text-gray-400 leading-relaxed">
                我们可以提供多种格式的交付物，包括高清MP4、MOV、AVI等视频格式，以及适用于不同平台的版本（电视播出版、网络版、手机版等）。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              期待与您的 <span className="text-[#EAC32E]">合作</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              专业的团队、丰富的经验、高效的执行，让我们为您的品牌创造更大价值
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#EAC32E] hover:bg-[#d4a925] text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                立即咨询
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