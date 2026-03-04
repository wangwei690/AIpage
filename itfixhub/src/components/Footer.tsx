import { HelpCircle, Github, Mail, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <HelpCircle className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ITFixHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              您的企业IT解决方案平台，快速解决各类技术问题。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">快速链接</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">首页</a></li>
              <li><a href="/categories" className="hover:text-primary transition-colors">问题分类</a></li>
              <li><a href="/solutions" className="hover:text-primary transition-colors">解决方案</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">热门问题</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">问题分类</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">网络问题</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">软件故障</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">硬件问题</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">账户权限</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">联系我们</h4>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              support@itfixhub.com
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2026 ITFixHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
