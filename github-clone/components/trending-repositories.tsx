import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GitFork, Star } from "lucide-react"
import Link from "next/link"

type TrendingRepo = {
  id: number
  name: string
  owner: string
  description: string
  stars: number
  forks: number
  language: string
  languageColor: string
  periodStars: number
}

export function TrendingRepositories() {
  const repositories: TrendingRepo[] = [
    {
      id: 1,
      name: "react",
      owner: "facebook",
      description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      stars: 203000,
      forks: 42000,
      language: "JavaScript",
      languageColor: "yellow-400",
      periodStars: 1250,
    },
    {
      id: 2,
      name: "tensorflow",
      owner: "tensorflow",
      description: "An open source machine learning framework for everyone",
      stars: 172000,
      forks: 87000,
      language: "Python",
      languageColor: "blue-400",
      periodStars: 980,
    },
    {
      id: 3,
      name: "vscode",
      owner: "microsoft",
      description: "Visual Studio Code",
      stars: 145000,
      forks: 25000,
      language: "TypeScript",
      languageColor: "blue-600",
      periodStars: 870,
    },
    {
      id: 4,
      name: "flutter",
      owner: "flutter",
      description: "Flutter makes it easy and fast to build beautiful apps for mobile and beyond",
      stars: 152000,
      forks: 24000,
      language: "Dart",
      languageColor: "teal-400",
      periodStars: 760,
    },
    {
      id: 5,
      name: "rust",
      owner: "rust-lang",
      description: "Empowering everyone to build reliable and efficient software.",
      stars: 78000,
      forks: 10000,
      language: "Rust",
      languageColor: "orange-600",
      periodStars: 650,
    },
  ]

  function formatNumber(num: number): string {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k"
    }
    return num.toString()
  }

  return (
    <div className="space-y-4">
      {repositories.map((repo) => (
        <Card key={repo.id} className="bg-[#0d1117] border-gray-700 hover:border-gray-500 transition-colors">
          <CardHeader className="pb-2">
            <CardTitle className="text-blue-400 hover:underline text-lg font-medium">
              <Link href={`/${repo.owner}/${repo.name}`}>
                {repo.owner}/{repo.name}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <p className="text-gray-300 mb-3">{repo.description}</p>
            <div className="flex items-center text-sm text-gray-400 space-x-4">
              <div className="flex items-center">
                <span className={`w-3 h-3 rounded-full mr-1 bg-${repo.languageColor}`}></span>
                <span>{repo.language}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                <span>{formatNumber(repo.stars)}</span>
              </div>
              <div className="flex items-center">
                <GitFork className="w-4 h-4 mr-1" />
                <span>{formatNumber(repo.forks)}</span>
              </div>
              <div className="text-xs">
                <span className="text-green-400">+{formatNumber(repo.periodStars)} stars</span> this week
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
