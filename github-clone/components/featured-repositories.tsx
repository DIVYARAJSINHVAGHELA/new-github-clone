import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GitFork, Star } from "lucide-react"

export function FeaturedRepositories() {
  const repositories = [
    {
      id: 1,
      name: "react",
      owner: "facebook",
      description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      stars: 203000,
      forks: 42000,
      language: "JavaScript",
    },
    {
      id: 2,
      name: "tensorflow",
      owner: "tensorflow",
      description: "An open source machine learning framework for everyone",
      stars: 172000,
      forks: 87000,
      language: "Python",
    },
    {
      id: 3,
      name: "vscode",
      owner: "microsoft",
      description: "Visual Studio Code",
      stars: 145000,
      forks: 25000,
      language: "TypeScript",
    },
  ]

  return (
    <div className="space-y-4">
      {repositories.map((repo) => (
        <Card key={repo.id} className="bg-[#0d1117] border-gray-700 hover:border-gray-500 transition-colors">
          <CardHeader className="pb-2">
            <CardTitle className="text-blue-400 hover:underline text-lg font-medium">
              {repo.owner}/{repo.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-gray-300">{repo.description}</p>
          </CardContent>
          <CardFooter>
            <div className="flex items-center text-sm text-gray-400 space-x-4">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full mr-1 bg-yellow-400"></span>
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
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k"
  }
  return num.toString()
}
