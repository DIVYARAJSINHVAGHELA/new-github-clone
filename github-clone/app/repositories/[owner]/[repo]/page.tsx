import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  AlertCircle,
  Code,
  Eye,
  FileCode,
  GitBranch,
  GitFork,
  GitPullRequest,
  History,
  Play,
  Shield,
  Star,
} from "lucide-react"

export default function RepositoryPage({ params }: { params: { owner: string; repo: string } }) {
  const { owner, repo } = params

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <Link href={`/${owner}`} className="text-blue-400 hover:underline">
                {owner}
              </Link>
              <span className="text-gray-400">/</span>
              <Link href={`/${owner}/${repo}`} className="text-blue-400 hover:underline">
                {repo}
              </Link>
            </h1>
            <Badge variant="outline" className="ml-3 border-gray-700">
              Public
            </Badge>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="border-gray-700 text-white">
              <Eye className="mr-2 h-4 w-4" />
              Watch
            </Button>
            <Button variant="outline" className="border-gray-700 text-white">
              <GitFork className="mr-2 h-4 w-4" />
              Fork
            </Button>
            <Button variant="outline" className="border-gray-700 text-white">
              <Star className="mr-2 h-4 w-4" />
              Star
            </Button>
          </div>
        </div>

        <Tabs defaultValue="code" className="w-full">
          <TabsList className="bg-[#161b22] border-b border-gray-700 rounded-none w-full justify-start">
            <TabsTrigger value="code" className="data-[state=active]:bg-[#0d1117]">
              <Code className="mr-2 h-4 w-4" />
              Code
            </TabsTrigger>
            <TabsTrigger value="issues" className="data-[state=active]:bg-[#0d1117]">
              <AlertCircle className="mr-2 h-4 w-4" />
              Issues
            </TabsTrigger>
            <TabsTrigger value="pull-requests" className="data-[state=active]:bg-[#0d1117]">
              <GitPullRequest className="mr-2 h-4 w-4" />
              Pull Requests
            </TabsTrigger>
            <TabsTrigger value="actions" className="data-[state=active]:bg-[#0d1117]">
              <Play className="mr-2 h-4 w-4" />
              Actions
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-[#0d1117]">
              <Shield className="mr-2 h-4 w-4" />
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="code" className="mt-6">
            <div className="bg-[#161b22] border border-gray-700 rounded-md mb-6">
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center">
                  <GitBranch className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="font-bold mr-1">main</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-gray-700 text-white">
                    <GitBranch className="mr-2 h-4 w-4" />
                    <span className="hidden md:inline">Create branch</span>
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-700 text-white">
                    <History className="mr-2 h-4 w-4" />
                    <span className="hidden md:inline">History</span>
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <div className="space-y-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="flex items-center p-2 hover:bg-[#0d1117] rounded">
                      <FileCode className="h-5 w-5 mr-3 text-gray-400" />
                      <Link href="#" className="text-blue-400 hover:underline">
                        {
                          [
                            "README.md",
                            "package.json",
                            "tsconfig.json",
                            "src/index.ts",
                            "src/components/App.tsx",
                            "src/utils/helpers.ts",
                            "public/index.html",
                            "LICENSE",
                          ][i]
                        }
                      </Link>
                      <span className="ml-auto text-xs text-gray-400">Updated 3 days ago</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#161b22] border border-gray-700 rounded-md p-6">
              <h2 className="text-2xl font-bold mb-4">README.md</h2>
              <div className="prose prose-invert max-w-none">
                <h1>{repo}</h1>
                <p>
                  This is a sample repository for demonstration purposes. It showcases various features of our GitHub
                  clone application.
                </p>
                <h2>Features</h2>
                <ul>
                  <li>User authentication</li>
                  <li>Repository management</li>
                  <li>Issue tracking</li>
                  <li>Pull request handling</li>
                  <li>Code browsing</li>
                </ul>
                <h2>Getting Started</h2>
                <p>To get started with this project, clone the repository and install the dependencies:</p>
                <pre>
                  <code>
                    git clone https://github.com/{owner}/{repo}.git cd {repo}
                    npm install npm start
                  </code>
                </pre>
                <h2>Contributing</h2>
                <p>Contributions are welcome! Please feel free to submit a Pull Request.</p>
                <h2>License</h2>
                <p>This project is licensed under the MIT License - see the LICENSE file for details.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="issues">
            <div className="bg-[#161b22] border border-gray-700 rounded-md p-6 mt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Issues</h2>
                <Button>New Issue</Button>
              </div>

              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="p-4 border-b border-gray-700 last:border-0">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 mr-3 text-green-500 mt-1" />
                      <div>
                        <h3 className="text-lg font-medium text-blue-400 hover:underline">
                          <Link href="#">Issue #{i + 1}: Sample issue title goes here</Link>
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Opened 3 days ago by
                          <Link href="#" className="text-blue-400 hover:underline ml-1">
                            username
                          </Link>
                        </p>
                      </div>
                      <div className="ml-auto">
                        <Badge variant="outline" className="border-green-700 text-green-400">
                          Open
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pull-requests">
            <div className="bg-[#161b22] border border-gray-700 rounded-md p-6 mt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Pull Requests</h2>
                <Button>New Pull Request</Button>
              </div>

              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="p-4 border-b border-gray-700 last:border-0">
                    <div className="flex items-start">
                      <GitPullRequest className="h-5 w-5 mr-3 text-purple-500 mt-1" />
                      <div>
                        <h3 className="text-lg font-medium text-blue-400 hover:underline">
                          <Link href="#">PR #{i + 1}: Feature implementation or bug fix</Link>
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          Opened 2 days ago by
                          <Link href="#" className="text-blue-400 hover:underline ml-1">
                            contributor
                          </Link>
                        </p>
                      </div>
                      <div className="ml-auto">
                        <Badge variant="outline" className="border-purple-700 text-purple-400">
                          Open
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-[#161b22] border border-gray-700 rounded-md p-6">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="text-gray-300 mb-6">
              A comprehensive GitHub clone with all the core features you need for collaborative software development.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Link href="#" className="text-blue-400 hover:underline flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  https://example.com/{repo}
                </Link>
              </div>
              <div className="flex items-center text-sm">
                <Star className="h-4 w-4 mr-2 text-gray-400" />
                <span>1.2k stars</span>
              </div>
              <div className="flex items-center text-sm">
                <Eye className="h-4 w-4 mr-2 text-gray-400" />
                <span>42 watching</span>
              </div>
              <div className="flex items-center text-sm">
                <GitFork className="h-4 w-4 mr-2 text-gray-400" />
                <span>128 forks</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#161b22] border border-gray-700 rounded-md p-6">
            <h2 className="text-xl font-bold mb-4">Contributors</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <Avatar key={i} className="h-10 w-10">
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={`Contributor ${i + 1}`} />
                  <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <Link href="#" className="text-blue-400 hover:underline text-sm">
              + 24 contributors
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Globe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}
