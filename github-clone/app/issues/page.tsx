import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertCircle, Search, Filter, MessageSquare } from "lucide-react"

export default function IssuesPage() {
  const issues = [
    {
      id: 1,
      title: "Server-side rendering fails with custom hooks",
      repo: "facebook/react",
      author: "sarahcoder",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      number: 23456,
      status: "open",
      createdAt: "3 days ago",
      comments: 15,
      labels: [
        { name: "bug", color: "red" },
        { name: "help wanted", color: "green" },
      ],
    },
    {
      id: 2,
      title: "Add support for CSS variables in styled components",
      repo: "styled-components/styled-components",
      author: "devmaster",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      number: 8765,
      status: "open",
      createdAt: "1 day ago",
      comments: 7,
      labels: [
        { name: "enhancement", color: "blue" },
        { name: "good first issue", color: "yellow" },
      ],
    },
    {
      id: 3,
      title: "Documentation is missing examples for new API",
      repo: "vercel/next.js",
      author: "codewarrior",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      number: 4321,
      status: "closed",
      createdAt: "2 weeks ago",
      comments: 9,
      labels: [{ name: "documentation", color: "purple" }],
    },
    {
      id: 4,
      title: "Performance degradation in production builds",
      repo: "webpack/webpack",
      author: "techguru",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      number: 6543,
      status: "open",
      createdAt: "5 hours ago",
      comments: 21,
      labels: [
        { name: "bug", color: "red" },
        { name: "performance", color: "orange" },
        { name: "high priority", color: "darkred" },
      ],
    },
    {
      id: 5,
      title: "Add TypeScript definitions for new components",
      repo: "tailwindlabs/headlessui",
      author: "webwizard",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      number: 2109,
      status: "open",
      createdAt: "4 days ago",
      comments: 3,
      labels: [
        { name: "typescript", color: "blue" },
        { name: "good first issue", color: "yellow" },
      ],
    },
  ]

  const getLabelColor = (color: string) => {
    const colors: Record<string, string> = {
      red: "bg-red-900 text-red-300 border-red-700",
      green: "bg-green-900 text-green-300 border-green-700",
      blue: "bg-blue-900 text-blue-300 border-blue-700",
      yellow: "bg-yellow-900 text-yellow-300 border-yellow-700",
      purple: "bg-purple-900 text-purple-300 border-purple-700",
      orange: "bg-orange-900 text-orange-300 border-orange-700",
      darkred: "bg-red-950 text-red-300 border-red-800",
    }
    return colors[color] || "bg-gray-900 text-gray-300 border-gray-700"
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Issues</h1>
          <p className="text-gray-400">Track and manage feature requests, bug reports, and tasks</p>
        </div>
        <div>
          <Button>New Issue</Button>
        </div>
      </div>

      <div className="bg-[#161b22] border border-gray-700 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search all issues"
                className="bg-[#0d1117] border-gray-700 text-white"
                prefix={<Search className="h-4 w-4 text-gray-400" />}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-gray-700 text-white">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <Tabs defaultValue="created" className="w-full md:w-auto">
                <TabsList className="bg-[#0d1117] border border-gray-700">
                  <TabsTrigger value="created">Created</TabsTrigger>
                  <TabsTrigger value="assigned">Assigned</TabsTrigger>
                  <TabsTrigger value="mentioned">Mentioned</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-700">
          {issues.map((issue) => (
            <div key={issue.id} className="p-4 hover:bg-[#1c2128]">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  {issue.status === "open" ? (
                    <AlertCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-purple-500" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-medium text-blue-400 hover:underline truncate">{issue.title}</h3>
                    <span className="text-xs text-gray-400">#{issue.number}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <p className="text-sm text-gray-500">
                      {issue.repo} • opened {issue.createdAt} by <span className="text-blue-400">{issue.author}</span>
                    </p>
                    {issue.labels.map((label, idx) => (
                      <Badge key={idx} variant="outline" className={`text-xs ${getLabelColor(label.color)}`}>
                        {label.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="ml-3 flex-shrink-0 flex items-center">
                  {issue.comments > 0 && (
                    <div className="flex items-center text-gray-400 mr-3">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span className="text-xs">{issue.comments}</span>
                    </div>
                  )}
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={issue.authorAvatar || "/placeholder.svg"} alt={issue.author} />
                    <AvatarFallback>{issue.author.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
