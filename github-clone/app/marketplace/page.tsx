import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Star, Download, Check, Bot, Shield, Bell, Zap } from "lucide-react"

export default function MarketplacePage() {
  const categories = [
    "Code quality",
    "Code review",
    "Continuous integration",
    "Monitoring",
    "Project management",
    "Security",
    "Testing",
    "Utilities",
  ]

  const apps = [
    {
      id: 1,
      name: "CodeQL",
      description: "Discover vulnerabilities across a codebase with semantic code analysis",
      icon: <Shield className="h-10 w-10 text-purple-400" />,
      publisher: "GitHub",
      verified: true,
      stars: 4.8,
      reviews: 1245,
      installs: "100K+",
      category: "Security",
      free: true,
    },
    {
      id: 2,
      name: "CircleCI",
      description: "Automatically build, test, and deploy your projects in minutes",
      icon: <Zap className="h-10 w-10 text-blue-400" />,
      publisher: "CircleCI",
      verified: true,
      stars: 4.7,
      reviews: 987,
      installs: "50K+",
      category: "Continuous integration",
      free: true,
    },
    {
      id: 3,
      name: "Dependabot",
      description: "Automated dependency updates built into GitHub",
      icon: <Bot className="h-10 w-10 text-green-400" />,
      publisher: "GitHub",
      verified: true,
      stars: 4.9,
      reviews: 2134,
      installs: "500K+",
      category: "Security",
      free: true,
    },
    {
      id: 4,
      name: "Codecov",
      description: "Group, merge, archive, and compare coverage reports",
      icon: <Check className="h-10 w-10 text-red-400" />,
      publisher: "Codecov",
      verified: true,
      stars: 4.6,
      reviews: 756,
      installs: "30K+",
      category: "Code quality",
      free: false,
    },
    {
      id: 5,
      name: "Sentry",
      description: "Application monitoring and error tracking software",
      icon: <Bell className="h-10 w-10 text-orange-400" />,
      publisher: "Sentry",
      verified: true,
      stars: 4.8,
      reviews: 1089,
      installs: "80K+",
      category: "Monitoring",
      free: false,
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Marketplace</h1>
          <p className="text-gray-400">Extend GitHub with tools and services from across the community</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="md:col-span-3">
          <Input
            placeholder="Search apps and actions"
            className="bg-[#161b22] border-gray-700 text-white"
            prefix={<Search className="h-4 w-4 text-gray-400" />}
          />
        </div>
        <div>
          <Button variant="outline" className="w-full border-gray-700 text-white">
            Explore free apps
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center">
                  <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                    {category}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#161b22] border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Verified by GitHub</h2>
            <p className="text-gray-400 text-sm">
              GitHub has verified that the publisher controls the domain and meets other requirements.
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          <Tabs defaultValue="featured" className="w-full mb-6">
            <TabsList className="bg-[#161b22] border border-gray-700">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-6">
            {apps.map((app) => (
              <Card key={app.id} className="bg-[#161b22] border-gray-700">
                <CardHeader className="pb-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 p-2 bg-[#0d1117] rounded-lg">{app.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <CardTitle className="text-lg text-blue-400">{app.name}</CardTitle>
                        {app.verified && <Badge className="ml-2 bg-green-900 text-green-300">Verified</Badge>}
                        {app.free ? (
                          <Badge variant="outline" className="ml-2 border-gray-700 text-gray-400">
                            Free
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="ml-2 border-gray-700 text-gray-400">
                            Paid
                          </Badge>
                        )}
                      </div>
                      <CardDescription>By {app.publisher}</CardDescription>
                    </div>
                    <div className="flex-shrink-0">
                      <Button>Install</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{app.description}</p>
                  <div className="flex items-center mt-4 text-sm text-gray-400">
                    <div className="flex items-center mr-4">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>{app.stars}</span>
                      <span className="text-gray-500 ml-1">({app.reviews})</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span>{app.installs} installs</span>
                    </div>
                    <div className="ml-4">
                      <Badge variant="outline" className="border-gray-700 text-gray-400">
                        {app.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
