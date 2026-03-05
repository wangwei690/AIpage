import { useState, lazy, Suspense } from "react"
import { Search, ArrowRight, Zap, Shield, Wifi, Laptop, Database, Users, Mail, Clock, CheckCircle } from "lucide-react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { SolutionCard, type Solution } from "./components/SolutionCard"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Badge } from "./components/ui/badge"

// Lazy load below-the-fold components for better FID/INP
const CategoryCard = lazy(() => import("./components/CategoryCard").then(m => ({ default: m.CategoryCard })))

// Loading fallback component
function CategoryCardSkeleton() {
  return (
    <div className="animate-pulse rounded-lg bg-secondary/50 h-32" />
  )
}

// Mock data
const hotSolutions: Solution[] = [
  {
    id: "1",
    title: "VPN连接失败解决方案",
    description: "详细步骤指导如何配置和排查企业VPN连接问题，包括常见错误代码解析。",
    category: "网络问题",
    tags: ["VPN", "远程办公", "网络配置"],
    views: 1523,
    likes: 89,
    date: "2026-03-01",
    difficulty: "medium"
  },
  {
    id: "2",
    title: "打印机无法连接修复",
    description: "Windows和Mac系统打印机共享设置与故障排除全攻略。",
    category: "硬件问题",
    tags: ["打印机", "Windows", "Mac"],
    views: 2341,
    likes: 156,
    date: "2026-02-28",
    difficulty: "easy"
  },
  {
    id: "3",
    title: "邮箱同步问题排查",
    description: "Outlook邮箱无法同步的多种解决方案，包括缓存清理和账户重新配置。",
    category: "软件故障",
    tags: ["Outlook", "邮箱", "同步"],
    views: 1892,
    likes: 124,
    date: "2026-02-25",
    difficulty: "medium"
  },
  {
    id: "4",
    title: "账户权限申请流程",
    description: "企业系统账户申请、权限审批全流程指南。",
    category: "账户权限",
    tags: ["账户", "权限", "AD域"],
    views: 3456,
    likes: 201,
    date: "2026-02-20",
    difficulty: "easy"
  },
  {
    id: "5",
    title: "WiFi信号弱优化方案",
    description: "办公室WiFi覆盖增强与信号优化实用技巧。",
    category: "网络问题",
    tags: ["WiFi", "网络优化", "信号"],
    views: 987,
    likes: 67,
    date: "2026-03-02",
    difficulty: "easy"
  },
  {
    id: "6",
    title: "数据库连接超时处理",
    description: "SQL Server和MySQL连接超时问题的诊断与修复方法。",
    category: "数据库",
    tags: ["数据库", "SQL", "连接"],
    views: 1234,
    likes: 78,
    date: "2026-02-22",
    difficulty: "hard"
  }
]

const categories = [
  { icon: Wifi, title: "网络问题", description: "VPN、WiFi、网络连接等", count: 45 },
  { icon: Laptop, title: "硬件问题", description: "电脑、打印机、设备等", count: 38 },
  { icon: Database, title: "软件故障", description: "系统、应用、工具等", count: 62 },
  { icon: Shield, title: "账户权限", description: "登录、权限、认证等", count: 29 },
  { icon: Zap, title: "系统故障", description: "蓝屏、崩溃、报错等", count: 34 },
  { icon: Users, title: "协作工具", description: "邮件、会议、文档等", count: 41 }
]

function App() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (query: string) => {
    console.log("Searching for:", query)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute inset-0 bg-gradient-radial" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="outline" className="mb-4">
                <Zap className="h-3 w-3 mr-1" />
                企业IT支持平台
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
                快速解决您的
                <span className="bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent"> IT问题</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                汇集企业常见IT问题的标准化解决方案，让技术支持更高效、更便捷。
              </p>

              {/* Search Box */}
              <div className="max-w-xl mx-auto mt-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="输入问题描述，如：VPN连接失败..."
                    className="h-14 pl-12 pr-32 text-lg bg-card border-primary/20 focus:border-primary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button className="absolute right-2 top-1/2 -translate-y-1/2" size="lg">
                    搜索
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>249+ 解决方案</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>平均响应 &lt;5分钟</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>10K+ 月活用户</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">问题分类</h2>
                <p className="text-muted-foreground mt-1">按类别浏览常见IT问题</p>
              </div>
              <Button variant="outline">
                查看全部
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <Suspense key={category.title} fallback={<CategoryCardSkeleton />}>
                  <CategoryCard {...category} />
                </Suspense>
              ))}
            </div>
          </div>
        </section>

        {/* Hot Solutions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">热门解决方案</h2>
                <p className="text-muted-foreground mt-1">最受关注的IT问题解决方案</p>
              </div>
              <Button variant="outline">
                查看更多
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotSolutions.map((solution, index) => (
                <div 
                  key={solution.id} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <SolutionCard solution={solution} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">没有找到解决方案？</h2>
              <p className="text-muted-foreground">
                提交您的IT问题，我们会尽快为您提供帮助。
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button size="lg">
                  <Mail className="h-4 w-4 mr-2" />
                  提交工单
                </Button>
                <Button size="lg" variant="outline">
                  联系IT支持
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
