import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ActivityFeed } from "@/components/activity-feed"
import { TrendingRepositories } from "@/components/trending-repositories"
import { UserDashboard } from "@/components/user-dashboard"
import { Bell, Book, Bookmark, Code, GitPullRequest, Plus, Star } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Sidebar */}
        <div className="space-y-6">
          <UserDashboard />

          <Card className="bg-[#161b22] border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Explore repositories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                  <Bookmark className="mr-2 h-4 w-4" />
                  Your repositories
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                  <Star className="mr-2 h-4 w-4" />
                  Your starred
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                  <GitPullRequest className="mr-2 h-4 w-4" />
                  Your pull requests
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                  <Bell className="mr-2 h-4 w-4" />
                  Your notifications
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <Tabs defaultValue="for-you" className="w-full">
              <TabsList className="bg-[#161b22] border border-gray-700">
                <TabsTrigger value="for-you">For you</TabsTrigger>
                <TabsTrigger value="following">Following</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" className="border-gray-700 text-white">
                <Book className="mr-2 h-4 w-4" />
                Explore
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New repository
              </Button>
            </div>
          </div>

          <ActivityFeed />

          <Card className="bg-[#161b22] border-gray-700">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg flex items-center">
                  <Star className="mr-2 h-5 w-5 text-yellow-400" />
                  Trending repositories
                </CardTitle>
                <Button variant="link" className="text-blue-400 p-0">
                  See more
                </Button>
              </div>
              <CardDescription>Repositories that are trending among developers</CardDescription>
            </CardHeader>
            <CardContent>
              <TrendingRepositories />
            </CardContent>
          </Card>

          <Card className="bg-[#161b22] border-gray-700">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg flex items-center">
                  <Code className="mr-2 h-5 w-5 text-blue-400" />
                  Recommended for you
                </CardTitle>
                <Button variant="link" className="text-blue-400 p-0">
                  Explore more
                </Button>
              </div>
              <CardDescription>Projects you might be interested in based on your activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="bg-[#0d1117] border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-blue-400 hover:underline font-medium">
                          {["vercel/swr", "tailwindlabs/headlessui", "prisma/prisma", "supabase/supabase"][i - 1]}
                        </div>
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <Star className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                      <p className="text-xs text-gray-400 mb-3">
                        {
                          [
                            "React Hooks for Data Fetching",
                            "Completely unstyled, fully accessible UI components",
                            "Next-generation ORM for Node.js & TypeScript",
                            "The open source Firebase alternative",
                          ][i - 1]
                        }
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <div className="flex items-center mr-3">
                          <span
                            className={`w-2.5 h-2.5 rounded-full mr-1 ${
                              ["bg-yellow-400", "bg-blue-600", "bg-green-400", "bg-purple-400"][i - 1]
                            }`}
                          ></span>
                          <span>{["JavaScript", "TypeScript", "TypeScript", "TypeScript"][i - 1]}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-3.5 h-3.5 mr-1" />
                          <span>{[25.2, 18.7, 29.4, 32.8][i - 1]}k</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
