import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function TopContributors() {
  const contributors = [
    {
      id: 1,
      username: "sarahcoder",
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      contributions: 2347,
      rank: 1,
      streak: 64,
    },
    {
      id: 2,
      username: "devmaster",
      name: "Alex Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      contributions: 1982,
      rank: 2,
      streak: 42,
    },
    {
      id: 3,
      username: "codewarrior",
      name: "Miguel Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      contributions: 1756,
      rank: 3,
      streak: 38,
    },
    {
      id: 4,
      username: "techguru",
      name: "Priya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      contributions: 1543,
      rank: 4,
      streak: 27,
    },
  ]

  const maxContributions = Math.max(...contributors.map((c) => c.contributions))

  return (
    <div className="space-y-4">
      {contributors.map((contributor) => (
        <div key={contributor.id} className="flex items-center p-3 bg-[#0d1117] rounded-lg border border-gray-700">
          <div className="flex-shrink-0 mr-3">
            <Badge variant="outline" className="w-6 h-6 flex items-center justify-center">
              {contributor.rank}
            </Badge>
          </div>
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={contributor.avatar || "/placeholder.svg"} alt={contributor.name} />
            <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-blue-400 truncate">{contributor.username}</p>
              <span className="text-xs text-gray-400">{contributor.contributions.toLocaleString()} contributions</span>
            </div>
            <Progress value={(contributor.contributions / maxContributions) * 100} className="h-1.5 bg-gray-700" />
          </div>
          <div className="ml-3 flex-shrink-0">
            <Badge variant="secondary" className="bg-green-900 text-green-300 hover:bg-green-800">
              {contributor.streak} day streak
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
