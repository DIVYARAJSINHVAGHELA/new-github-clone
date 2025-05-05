import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { GitPullRequest, AlertCircle, Star, GitCommit, Plus, GitFork } from "lucide-react"
import Link from "next/link"

export function UserDashboard() {
  const user = {
    name: "John Developer",
    username: "johndeveloper",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Full-stack developer passionate about open source and building great user experiences.",
    location: "San Francisco, CA",
    company: "@acme-inc",
    website: "https://johndeveloper.com",
    followers: 245,
    following: 123,
    contributions: 1248,
    streak: 64,
  }

  const repositories = [
    {
      name: "awesome-project",
      description: "A collection of awesome tools and resources for developers",
      language: "JavaScript",
      languageColor: "yellow-400",
      stars: 124,
      forks: 32,
      updated: "Updated 2 days ago",
    },
    {
      name: "react-components",
      description: "A library of reusable React components with TypeScript support",
      language: "TypeScript",
      languageColor: "blue-600",
      stars: 87,
      forks: 15,
      updated: "Updated 1 week ago",
    },
    {
      name: "api-toolkit",
      description: "Tools for building and testing RESTful APIs",
      language: "Python",
      languageColor: "blue-400",
      stars: 56,
      forks: 12,
      updated: "Updated 3 weeks ago",
    },
  ]

  const stats = [
    { icon: <GitPullRequest className="h-5 w-5 text-green-400" />, label: "Pull Requests", value: 87 },
    { icon: <AlertCircle className="h-5 w-5 text-purple-400" />, label: "Issues", value: 42 },
    { icon: <GitCommit className="h-5 w-5 text-blue-400" />, label: "Commits", value: 1536 },
    { icon: <Star className="h-5 w-5 text-yellow-400" />, label: "Stars", value: 324 },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* User Profile Card */}
      <Card className="bg-[#161b22] border-gray-700">
        <CardHeader className="pb-2">
          <div className="flex flex-col items-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl">{user.name}</CardTitle>
            <CardDescription className="text-gray-400">{user.username}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">{user.bio}</p>

          <div className="space-y-2 text-sm text-gray-400 mb-4">
            {user.company && (
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z" />
                </svg>
                <span>{user.company}</span>
              </div>
            )}
            {user.location && (
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span>{user.location}</span>
              </div>
            )}
            {user.website && (
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z" />
                </svg>
                <a
                  href={user.website}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4 text-sm mb-4">
            <Link href="/followers" className="text-gray-400 hover:text-blue-400">
              <span className="font-bold text-white">{user.followers}</span> followers
            </Link>
            <Link href="/following" className="text-gray-400 hover:text-blue-400">
              <span className="font-bold text-white">{user.following}</span> following
            </Link>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Contributions</span>
                <span className="text-white">{user.contributions}</span>
              </div>
              <Progress value={85} className="h-1.5 bg-gray-700" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Current streak</span>
              <span className="text-green-400">{user.streak} days</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="md:col-span-2 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-[#161b22] border-gray-700">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Repositories */}
        <Card className="bg-[#161b22] border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg">Popular repositories</CardTitle>
            </div>
            <Button variant="outline" className="border-gray-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {repositories.map((repo, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#0d1117] rounded-lg border border-gray-700 hover:border-gray-500 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <Link href={`/${user.username}/${repo.name}`} className="text-blue-400 hover:underline font-medium">
                      {repo.name}
                    </Link>
                    <Button variant="ghost" size="sm" className="h-6 px-2">
                      <Star className="h-3.5 w-3.5 mr-1" />
                      Star
                    </Button>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{repo.description}</p>
                  <div className="flex items-center text-xs text-gray-500 space-x-4">
                    {repo.language && (
                      <div className="flex items-center">
                        <span className={`w-2.5 h-2.5 rounded-full mr-1 bg-${repo.languageColor}`}></span>
                        <span>{repo.language}</span>
                      </div>
                    )}
                    {repo.stars > 0 && (
                      <div className="flex items-center">
                        <Star className="w-3.5 h-3.5 mr-1" />
                        <span>{repo.stars}</span>
                      </div>
                    )}
                    {repo.forks > 0 && (
                      <div className="flex items-center">
                        <GitFork className="w-3.5 h-3.5 mr-1" />
                        <span>{repo.forks}</span>
                      </div>
                    )}
                    <span>{repo.updated}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contribution Calendar */}
        <Card className="bg-[#161b22] border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Contribution activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-[#0d1117] rounded-lg border border-gray-700 mb-4">
              <div className="h-32 flex items-center justify-center">
                <p className="text-gray-400">Contribution calendar visualization would go here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
