import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { GitPullRequest, GitMerge, Star, GitFork, AlertCircle, MessageSquare, Code, GitCommit } from "lucide-react"
import Link from "next/link"

type ActivityItem = {
  id: number
  type: "pull_request" | "issue" | "star" | "fork" | "commit" | "comment" | "release"
  title: string
  repo: string
  user: {
    name: string
    username: string
    avatar: string
  }
  time: string
  status?: "open" | "closed" | "merged"
  number?: number
}

export function ActivityFeed() {
  const activities: ActivityItem[] = [
    {
      id: 1,
      type: "pull_request",
      title: "Add dark mode support for dashboard components",
      repo: "facebook/react",
      user: {
        name: "Sarah Johnson",
        username: "sarahcoder",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      time: "2 hours ago",
      status: "open",
      number: 12345,
    },
    {
      id: 2,
      type: "issue",
      title: "Fix memory leak in useEffect cleanup",
      repo: "vercel/next.js",
      user: {
        name: "Alex Chen",
        username: "devmaster",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      time: "5 hours ago",
      status: "open",
      number: 9876,
    },
    {
      id: 3,
      type: "pull_request",
      title: "Improve TypeScript type definitions for hooks",
      repo: "microsoft/typescript",
      user: {
        name: "Miguel Rodriguez",
        username: "codewarrior",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      time: "1 day ago",
      status: "merged",
      number: 5432,
    },
    {
      id: 4,
      type: "star",
      title: "starred repository",
      repo: "tailwindlabs/tailwindcss",
      user: {
        name: "Priya Patel",
        username: "techguru",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      time: "2 days ago",
    },
    {
      id: 5,
      type: "fork",
      title: "forked repository",
      repo: "nodejs/node",
      user: {
        name: "Wei Zhang",
        username: "webwizard",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      time: "3 days ago",
    },
    {
      id: 6,
      type: "commit",
      title: "Update dependencies and fix security vulnerabilities",
      repo: "sveltejs/svelte",
      user: {
        name: "Jordan Taylor",
        username: "gitgenius",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      time: "4 days ago",
    },
    {
      id: 7,
      type: "comment",
      title: "commented on issue #4321: 'Authentication fails on Safari'",
      repo: "auth0/auth0-react",
      user: {
        name: "Emma Wilson",
        username: "bytebender",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      time: "5 days ago",
    },
    {
      id: 8,
      type: "release",
      title: "released v2.5.0",
      repo: "vuejs/vue",
      user: {
        name: "Hiroshi Nakamura",
        username: "hackmaster",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      time: "1 week ago",
    },
  ]

  const getActivityIcon = (type: string, status?: string) => {
    switch (type) {
      case "pull_request":
        if (status === "merged") return <GitMerge className="h-5 w-5 text-purple-500" />
        if (status === "closed") return <GitPullRequest className="h-5 w-5 text-red-500" />
        return <GitPullRequest className="h-5 w-5 text-green-500" />
      case "issue":
        if (status === "closed") return <AlertCircle className="h-5 w-5 text-purple-500" />
        return <AlertCircle className="h-5 w-5 text-green-500" />
      case "star":
        return <Star className="h-5 w-5 text-yellow-500" />
      case "fork":
        return <GitFork className="h-5 w-5 text-blue-500" />
      case "commit":
        return <GitCommit className="h-5 w-5 text-gray-500" />
      case "comment":
        return <MessageSquare className="h-5 w-5 text-gray-500" />
      case "release":
        return <Code className="h-5 w-5 text-green-500" />
      default:
        return <Code className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="bg-[#161b22] border border-gray-700 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-bold">Recent Activity</h2>
      </div>
      <div className="divide-y divide-gray-700">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-[#1c2128]">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3 mt-1">{getActivityIcon(activity.type, activity.status)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <Avatar className="h-5 w-5 mr-2">
                    <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                    <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <Link href={`/${activity.user.username}`} className="text-blue-400 hover:underline mr-1">
                    {activity.user.username}
                  </Link>
                  <span className="text-gray-400">
                    {activity.type === "pull_request" || activity.type === "issue" ? (
                      <>
                        opened{" "}
                        <Link
                          href={`/${activity.repo}/pull/${activity.number}`}
                          className="text-blue-400 hover:underline"
                        >
                          {activity.type === "pull_request" ? "pull request" : "issue"} #{activity.number}
                        </Link>
                      </>
                    ) : (
                      activity.title
                    )}{" "}
                    in{" "}
                    <Link href={`/${activity.repo}`} className="text-blue-400 hover:underline">
                      {activity.repo}
                    </Link>
                  </span>
                </div>
                {(activity.type === "pull_request" || activity.type === "issue") && (
                  <p className="text-sm text-white mt-1 truncate">{activity.title}</p>
                )}
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <span>{activity.time}</span>
                  {activity.status && (
                    <Badge
                      className={`ml-2 ${
                        activity.status === "open"
                          ? "bg-green-900 text-green-300"
                          : activity.status === "merged"
                            ? "bg-purple-900 text-purple-300"
                            : "bg-red-900 text-red-300"
                      }`}
                    >
                      {activity.status}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
