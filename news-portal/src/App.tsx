import { useState } from 'react'
import { siteConfig } from './config/site'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState("全部")
  
  const filteredNews = selectedCategory === "全部" 
    ? siteConfig.news 
    : siteConfig.news.filter(n => n.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "国际": "bg-red-500",
      "军事": "bg-orange-600",
      "两会": "bg-yellow-500",
      "科技": "bg-blue-500",
      "财经": "bg-green-500",
      "能源": "bg-purple-500",
      "分析": "bg-cyan-500"
    }
    return colors[category] || "bg-gray-500"
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* Header */}
      <header className="border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                {siteConfig.name}
              </h1>
              <p className="text-stone-400 mt-2 text-lg">{siteConfig.tagline}</p>
            </div>
            <div className="text-right">
              <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 text-sm">
                {siteConfig.hero.badge}
              </span>
            </div>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="max-w-6xl mx-auto px-6 pb-6">
          <div className="flex flex-wrap gap-2">
            {siteConfig.categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === cat 
                    ? 'bg-amber-500 text-stone-950' 
                    : 'bg-stone-800 text-stone-400 hover:bg-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Story */}
          <div className="lg:col-span-2">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">最新</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 leading-tight hover:text-amber-400 transition-colors">
              <a href={filteredNews[0]?.link} target="_blank" rel="noopener">
                {filteredNews[0]?.title}
              </a>
            </h2>
            <div className="flex items-center gap-4 mt-4 text-stone-400 text-sm">
              <span className={`px-2 py-1 ${getCategoryColor(filteredNews[0]?.category)} text-white text-xs`}>
                {filteredNews[0]?.category}
              </span>
              <span>{filteredNews[0]?.date}</span>
              <span>•</span>
              <span>{filteredNews[0]?.source}</span>
            </div>
          </div>
          
          {/* Source Info */}
          <div className="bg-stone-900 p-6 border border-stone-800">
            <h3 className="text-lg font-semibold mb-4 text-stone-300">新闻来源</h3>
            <div className="space-y-3">
              {siteConfig.sources.map(source => (
                <div key={source.name} className="flex items-center gap-3">
                  <span className="text-2xl">{source.icon}</span>
                  <span className="text-stone-400">{source.name}</span>
                </div>
              ))}
            </div>
            <p className="text-stone-500 text-sm mt-4 pt-4 border-t border-stone-800">
              {siteConfig.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.slice(1).map((news, index) => (
            <article 
              key={index}
              className="group bg-stone-900/50 border border-stone-800 p-6 hover:border-amber-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-2 py-1 ${getCategoryColor(news.category)} text-white text-xs`}>
                  {news.category}
                </span>
                <span className="text-stone-500 text-xs">{news.date}</span>
              </div>
              <h3 className="text-lg font-semibold leading-snug group-hover:text-amber-400 transition-colors">
                <a href={news.link} target="_blank" rel="noopener">
                  {news.title}
                </a>
              </h3>
              <p className="text-stone-500 text-sm mt-2">{news.source}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-stone-500 text-sm">
          <p>{siteConfig.footer.description} © 2026</p>
        </div>
      </footer>
    </div>
  )
}

export default App
