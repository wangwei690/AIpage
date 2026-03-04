import { ArrowRight, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { cn } from "../lib/utils"

interface CategoryCardProps {
  icon: LucideIcon
  title: string
  description: string
  count: number
  className?: string
}

export function CategoryCard({ icon: Icon, title, description, count, className }: CategoryCardProps) {
  return (
    <Card 
      className={cn(
        "group cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300", 
        className
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon className="h-6 w-6" />
          </div>
          <span className="text-sm text-muted-foreground">
            {count} 个方案
          </span>
        </div>
        <h3 className="text-lg font-semibold mt-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          {description}
        </p>
        <div className="flex items-center gap-1 mt-4 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          浏览分类
          <ArrowRight className="h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  )
}
