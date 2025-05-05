import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Calendar, Code2, Filter, GitPullRequest, Search, Star, Trophy } from "lucide-react"

export default function RankingsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Open Source Contribution Rankings</h1>
          <p className="text-gray-400">Recognizing the most active contributors in the community</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-700 text-white">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Trophy className="mr-2 h-4 w-4" />
            View Your Rank
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-[#161b22] border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Code2 className="mr-2 h-5 w-5 text-blue-400" />
              Total Contributions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center py-4">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400">3.2M</div>
                <p className="text-gray-400 mt-1">From 127K developers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#161b22] border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <GitPullRequest className="mr-2 h-5 w-5 text-purple-400" />
              Pull Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center py-4">
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400">842K</div>
                <p className="text-gray-400 mt-1">Merged this month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#161b22] border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-green-400" />
              Active Streaks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center py-4">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400">365</div>
                <p className="text-gray-400 mt-1">Longest active streak</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              placeholder="Search contributors..."
              className="bg-[#161b22] border-gray-700 text-white"
              prefix={<Search className="h-4 w-4 text-gray-400" />}
            />
          </div>
          <Tabs defaultValue="all-time" className="w-full md:w-auto">
            <TabsList className="bg-[#161b22] border border-gray-700">
              <TabsTrigger value="all-time">All Time</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <Card className="bg-[#161b22] border-gray-700">
          <CardHeader>
            <CardTitle>Top Contributors</CardTitle>
            <CardDescription>Ranked by number of contributions to public repositories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 10 }).map((_, i) => {
                const contributions = Math.floor(10000 / (i + 1))
                return (
                  <div key={i} className="flex items-center p-4 bg-[#0d1117] rounded-lg">
                    <div className="flex-shrink-0 mr-4 w-8">
                      <Badge variant="outline" className="w-8 h-8 flex items-center justify-center border-gray-700">
                        {i + 1}
                      </Badge>
                    </div>
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={`User ${i + 1}`} />
                      <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-medium text-blue-400 truncate">
                          {
                            [
                              "sarahcoder",
                              "devmaster",
                              "codewarrior",
                              "techguru",
                              "webwizard",
                              "gitgenius",
                              "bytebender",
                              "hackmaster",
                              "codearchitect",
                              "devninja",
                            ][i]
                          }
                        </p>
                        <span className="text-xs text-gray-400">{contributions.toLocaleString()} contributions</span>
                      </div>
                      <Progress value={(contributions / 10000) * 100} className="h-1.5 bg-gray-700" />
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <Badge variant="secondary" className="bg-green-900 text-green-300 hover:bg-green-800">
                        {Math.floor(100 / (i + 1))} day streak
                      </Badge>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 flex justify-center">
              <Button variant="outline" className="border-gray-700 text-white">
                Load More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#161b22] border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Star className="mr-2 h-5 w-5 text-yellow-400" />
              Most Starred Repositories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center p-3 bg-[#0d1117] rounded-lg">
                  <div className="flex-shrink-0 mr-4 w-8">
                    <Badge variant="outline" className="w-8 h-8 flex items-center justify-center border-gray-700">
                      {i + 1}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-blue-400 font-medium">
                      {
                        [
                          "facebook/react",
                          "tensorflow/tensorflow",
                          "microsoft/vscode",
                          "flutter/flutter",
                          "kubernetes/kubernetes",
                        ][i]
                      }
                    </h3>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span className="flex items-center mr-3">
                        <Star className="h-3 w-3 mr-1 text-yellow-400" />
                        {Math.floor(200000 / (i + 1)).toLocaleString()}
                      </span>
                      <span>{["JavaScript", "Python", "TypeScript", "Dart", "Go"][i]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#161b22] border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <GitPullRequest className="mr-2 h-5 w-5 text-purple-400" />
              Most Active Organizations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center p-3 bg-[#0d1117] rounded-lg">
                  <div className="flex-shrink-0 mr-4 w-8">
                    <Badge variant="outline" className="w-8 h-8 flex items-center justify-center border-gray-700">
                      {i + 1}
                    </Badge>
                  </div>
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={`Organization ${i + 1}`} />
                    <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-blue-400 font-medium">
                      {["Microsoft", "Google", "Facebook", "Apache", "Linux Foundation"][i]}
                    </h3>
                    <div className="text-xs text-gray-500 mt-1">
                      {Math.floor(5000 / (i + 1)).toLocaleString()} contributors •{" "}
                      {Math.floor(1000 / (i + 1)).toLocaleString()} repositories
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
