import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Star, GitFork, Code, Flame, TrendingUp, Sparkles, BookOpen } from "lucide-react"

export default function ExplorePage() {
  const trendingRepos = [
    {
      id: 1,
      name: "microsoft/TypeScript",
      description: "TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",
      language: "TypeScript",
      stars: 85700,
      forks: 11200,
      starsToday: 125,
    },
    {
      id: 2,
      name: "facebook/react",
      description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      language: "JavaScript",
      stars: 189000,
      forks: 38900,
      starsToday: 98,
    },
    {
      id: 3,
      name: "denoland/deno",
      description: "A secure runtime for JavaScript and TypeScript.",
      language: "Rust",
      stars: 86300,
      forks: 4700,
      starsToday: 87,
    },
    {
      id: 4,
      name: "vercel/next.js",
      description: "The React Framework for Production.",
      language: "JavaScript",
      stars: 94200,
      forks: 21500,
      starsToday: 76,
    },
  ]

  const topics = [
    { name: "react", description: "A JavaScript library for building user interfaces", count: "98.5K repositories" },
    { name: "typescript", description: "TypeScript is a typed superset of JavaScript", count: "78.3K repositories" },
    { name: "python", description: "Python is a programming language", count: "125.7K repositories" },
    {
      name: "machine-learning",
      description: "Machine learning is a way of modeling and interpreting data",
      count: "45.2K repositories",
    },
    { name: "web-development", description: "The creation and maintenance of websites", count: "89.1K repositories" },
    {
      name: "data-science",
      description: "Data science combines math and statistics, specialized programming",
      count: "38.6K repositories",
    },
  ]

  const collections = [
    { name: "Machine learning tools", description: "Open source tools for machine learning", count: "12 repositories" },
    { name: "Game engines", description: "Open source game engines and frameworks", count: "8 repositories" },
    { name: "Text editors", description: "A collection of open source text editors", count: "10 repositories" },
    { name: "Design tools", description: "Open source tools for design and prototyping", count: "9 repositories" },
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Explore</h1>
          <p className="text-gray-400">Discover interesting projects and people to follow</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Input
            placeholder="Search GitHub"
            className="bg-[#161b22] border-gray-700 text-white"
            prefix={<Search className="h-4 w-4 text-gray-400" />}
          />
        </div>
        <div>
          <Button variant="outline" className="w-full border-gray-700 text-white">
            <Sparkles className="mr-2 h-4 w-4" />
            Explore repositories
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center">
                <Flame className="mr-2 h-5 w-5 text-orange-400" />
                Trending repositories
              </h2>
              <Button variant="link" className="text-blue-400 p-0">
                See more
              </Button>
            </div>

            <div className="space-y-4">
              {trendingRepos.map((repo) => (
                <Card key={repo.id} className="bg-[#161b22] border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-blue-400">{repo.name}</CardTitle>
                    <CardDescription>{repo.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="flex items-center mr-4">
                        <span className="w-3 h-3 rounded-full mr-1 bg-blue-400"></span>
                        <span>{repo.language}</span>
                      </div>
                      <div className="flex items-center mr-4">
                        <Star className="h-4 w-4 mr-1" />
                        <span>{repo.stars.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center">
                        <GitFork className="h-4 w-4 mr-1" />
                        <span>{repo.forks.toLocaleString()}</span>
                      </div>
                      <Badge className="ml-4 bg-green-900 text-green-300">
                        <Star className="h-3 w-3 mr-1" />
                        {repo.starsToday} stars today
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-purple-400" />
                Collections
              </h2>
              <Button variant="link" className="text-blue-400 p-0">
                See more
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {collections.map((collection, index) => (
                <Card key={index} className="bg-[#161b22] border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-blue-400">{collection.name}</CardTitle>
                    <CardDescription>{collection.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-2">
                    <span className="text-sm text-gray-400">{collection.count}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#161b22] border border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-blue-400" />
                Trending topics
              </h2>
            </div>
            <div className="space-y-4">
              {topics.map((topic, index) => (
                <div key={index} className="pb-3 border-b border-gray-700 last:border-0 last:pb-0">
                  <h3 className="text-blue-400 font-medium mb-1">#{topic.name}</h3>
                  <p className="text-sm text-gray-400 mb-1">{topic.description}</p>
                  <span className="text-xs text-gray-500">{topic.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#161b22] border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Explore repositories</h2>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                <Code className="mr-2 h-4 w-4" />
                Top repositories
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                <TrendingUp className="mr-2 h-4 w-4" />
                Trending
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                <BookOpen className="mr-2 h-4 w-4" />
                Collections
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                <Star className="mr-2 h-4 w-4" />
                Topics
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
