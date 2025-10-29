import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "sjmfilms | 高端TVC广告片创作专家",
  description: "sjmfilms为OPPO、OnePlus等品牌打造高端TVC和广告片，专业团队，国际视野，欢迎咨询商业拍摄服务。",
  keywords: ["TVC广告", "商业广告片", "品牌视频", "OPPO", "OnePlus", "影视制作"],
  openGraph: {
    title: "sjmfilms | 高端TVC广告片创作专家",
    description: "专业影视制作团队，为头部品牌提供国际水准的TVC和广告片创作服务",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`${geist.variable}`}>
      <body className="font-sans antialiased bg-black text-white">{children}</body>
    </html>
  )
}
