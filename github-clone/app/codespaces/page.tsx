import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Code, Play, Plus, Clock, Cpu } from "lucide-react"

export default function CodespacesPage() {
  const codespaces = [
    {
      id: 1,
      name: "react-project",
      repository: "username/react-project",
      branch: "main",
      lastActive: "2 hours ago",
      status: "running",
      machine: "4-core, 8GB RAM, 32GB storage",
    },
    {
      id: 2,
      name: "next-app",
      repository: "username/next-app",
      branch: "feature/auth",
      lastActive: "3 days ago",
      status: "stopped",
      machine: "2-core, 4GB RAM, 32GB storage",
    },
    {
      id: 3,
      name: "api-service",
      repository: "organization/api-service",
      branch: "develop",
      lastActive: "1 week ago",
      status: "stopped",
      machine: "8-core, 16GB RAM, 64GB storage",
    },
  ]

  const templates = [
    {
      id: 1,
      name: "Blank",
      description: "Start from scratch with a blank codespace",
      icon: <Code className="h-8 w-8 text-blue-400" />,
    },
    {
      id: 2,
      name: "Next.js",
      description: "Full-stack React framework with server-side rendering",
      icon: <Code className="h-8 w-8 text-blue-400" />,
    },
    {
      id: 3,
      name: "React",
      description: "JavaScript library for building user interfaces",
      icon: <Code className="h-8 w-8 text-blue-400" />,
    },
    {
      id: 4,
      name: "Node.js API",
      description: "RESTful API with Express and MongoDB",
      icon: <Code className="h-8 w-8 text-blue-400" />,
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Codespaces</h1>
          <p className="text-gray-400">Cloud development environments that are fast, secure, and configurable</p>
        </div>
        <div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New codespace
          </Button>
        </div>
      </div>

      <Tabs defaultValue="your-codespaces" className="w-full mb-8">
        <TabsList className="bg-[#161b22] border border-gray-700 w-full justify-start">
          <TabsTrigger value="your-codespaces">Your codespaces</TabsTrigger>
          <TabsTrigger value="for-you">For you</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codespaces.map((codespace) => (
            <Card key={codespace.id} className="bg-[#161b22] border-gray-700">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg text-blue-400">{codespace.name}</CardTitle>
                  {codespace.status === "running" ? (
                    <Badge className="bg-green-900 text-green-300 hover:bg-green-800">Running</Badge>
                  ) : (
                    <Badge variant="outline" className="border-gray-700 text-gray-400">
                      Stopped
                    </Badge>
                  )}
                </div>
                <CardDescription>{codespace.repository}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    <span>Branch: {codespace.branch}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Last active: {codespace.lastActive}</span>
                  </div>
                  <div className="flex items-center">
                    <Cpu className="h-4 w-4 mr-2" />
                    <span>{codespace.machine}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" className="w-full border-gray-700 text-white">
                  {codespace.status === "running" ? (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Open
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Start
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}

          <Card className="bg-[#161b22] border-gray-700 border-dashed flex flex-col items-center justify-center p-6">
            <Plus className="h-12 w-12 text-gray-500 mb-4" />
            <h3 className="text-lg font-medium mb-2">Create a new codespace</h3>
            <p className="text-gray-400 text-center mb-4">Start fresh with a new cloud development environment</p>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New codespace
            </Button>
          </Card>
        </div>

        <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Templates</h2>
          <p className="text-gray-400 mb-6">Get started quickly with pre-configured development environments</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template) => (
              <Card key={template.id} className="bg-[#0d1117] border-gray-700">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center mb-2">{template.icon}</div>
                  <CardTitle className="text-center">{template.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400 text-center">{template.description}</p>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="outline" className="w-full border-gray-700 text-white">
                    Use template
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
