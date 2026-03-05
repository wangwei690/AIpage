import { ArrowRight, ThumbsUp, Eye, Clock } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

export interface Solution {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  views: number
  likes: number
  date: string
  difficulty: "easy" | "medium" | "hard"
}

interface SolutionCardProps {
  solution: Solution
  className?: string
}

const difficultyConfig = {
  easy: { label: "简单", variant: "success" as const },
  medium: { label: "中等", variant: "warning" as const },
  hard: { label: "困难", variant: "destructive" as const },
}

export function SolutionCard({ solution, className }: SolutionCardProps) {
  return (
    <Card className={cn("group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10", className)}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <Badge variant="outline" className="text-xs">
            {solution.category}
          </Badge>
          <Badge variant={difficultyConfig[solution.difficulty].variant} className="text-xs">
            {difficultyConfig[solution.difficulty].label}
          </Badge>
        </div>
        <CardTitle className="text-lg font-semibold mt-2 group-hover:text-primary transition-colors">
          {solution.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {solution.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-3">
          {solution.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {solution.views}
          </span>
          <span className="flex items-center gap-1">
            <ThumbsUp className="h-3 w-3" />
            {solution.likes}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {solution.date}
          </span>
        </div>
        <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
          查看详情
          <ArrowRight className="h-3 w-3 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}
