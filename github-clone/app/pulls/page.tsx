import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GitPullRequest, Search, Filter } from "lucide-react"

export default function PullRequestsPage() {
  const pullRequests = [
    {
      id: 1,
      title: "Add new authentication flow",
      repo: "facebook/react",
      author: "sarahcoder",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      number: 12345,
      status: "open",
      createdAt: "2 days ago",
      comments: 8,
    },
    {
      id: 2,
      title: "Fix performance issue in rendering large lists",
      repo: "vercel/next.js",
      author: "devmaster",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      number: 9876,
      status: "open",
      createdAt: "5 hours ago",
      comments: 12,
    },
    {
      id: 3,
      title: "Update documentation for new API endpoints",
      repo: "microsoft/typescript",
      author: "codewarrior",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      number: 5432,
      status: "merged",
      createdAt: "1 week ago",
      comments: 3,
    },
    {
      id: 4,
      title: "Implement dark mode toggle",
      repo: "tailwindlabs/tailwindcss",
      author: "techguru",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      number: 7654,
      status: "closed",
      createdAt: "3 days ago",
      comments: 5,
    },
    {
      id: 5,
      title: "Add support for WebAssembly modules",
      repo: "nodejs/node",
      author: "webwizard",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      number: 3210,
      status: "draft",
      createdAt: "1 day ago",
      comments: 0,
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Pull Requests</h1>
          <p className="text-gray-400">Review and collaborate on code changes</p>
        </div>
        <div>
          <Button>New Pull Request</Button>
        </div>
      </div>

      <div className="bg-[#161b22] border border-gray-700 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search all pull requests"
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
          {pullRequests.map((pr) => (
            <div key={pr.id} className="p-4 hover:bg-[#1c2128]">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  {pr.status === "open" && <GitPullRequest className="h-5 w-5 text-green-500" />}
                  {pr.status === "merged" && <GitPullRequest className="h-5 w-5 text-purple-500" />}
                  {pr.status === "closed" && <GitPullRequest className="h-5 w-5 text-red-500" />}
                  {pr.status === "draft" && <GitPullRequest className="h-5 w-5 text-gray-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-medium text-blue-400 hover:underline truncate">{pr.title}</h3>
                    <span className="text-xs text-gray-400">#{pr.number}</span>
                    {pr.status === "merged" && (
                      <Badge variant="outline" className="border-purple-700 text-purple-400">
                        Merged
                      </Badge>
                    )}
                    {pr.status === "closed" && (
                      <Badge variant="outline" className="border-red-700 text-red-400">
                        Closed
                      </Badge>
                    )}
                    {pr.status === "draft" && (
                      <Badge variant="outline" className="border-gray-700 text-gray-400">
                        Draft
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    <span className="text-gray-500">{pr.repo}</span> • opened {pr.createdAt} by{" "}
                    <span className="text-blue-400">{pr.author}</span>
                  </p>
                </div>
                <div className="ml-3 flex-shrink-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={pr.authorAvatar || "/placeholder.svg"} alt={pr.author} />
                    <AvatarFallback>{pr.author.charAt(0).toUpperCase()}</AvatarFallback>
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
