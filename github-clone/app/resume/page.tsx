import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  BookOpen,
  Code2,
  Download,
  Edit,
  FileCode2,
  Github,
  GraduationCap,
  LineChart,
  Share2,
  Star,
  Trophy,
} from "lucide-react"

export default function ResumeDashboard() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Resume Dashboard</h1>
          <p className="text-gray-400">Showcase your skills and contributions</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-700 text-white">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" className="border-gray-700 text-white">
            <Download className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
          <Button>
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Section */}
        <Card className="bg-[#161b22] border-gray-700 lg:col-span-1">
          <CardHeader className="pb-2">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl">Jane Developer</CardTitle>
              <CardDescription className="text-gray-400">Senior Software Engineer</CardDescription>
              <div className="flex mt-2 space-x-2">
                <Badge variant="secondary" className="bg-blue-900 text-blue-300">
                  React
                </Badge>
                <Badge variant="secondary" className="bg-green-900 text-green-300">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="bg-purple-900 text-purple-300">
                  TypeScript
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mt-4">
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">ABOUT</h3>
                <p className="text-sm">
                  Full-stack developer with 5+ years of experience building web applications. Passionate about open
                  source and creating intuitive user experiences.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">CONTACT</h3>
                <div className="space-y-2 text-sm">
                  <p>jane.developer@example.com</p>
                  <p>San Francisco, CA</p>
                  <p className="flex items-center">
                    <Github className="h-4 w-4 mr-2" />
                    github.com/janedeveloper
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">SKILLS</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>JavaScript/TypeScript</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} className="h-1.5 bg-gray-700" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>React/Next.js</span>
                      <span>90%</span>
                    </div>
                    <Progress value={90} className="h-1.5 bg-gray-700" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Node.js</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-1.5 bg-gray-700" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>GraphQL</span>
                      <span>80%</span>
                    </div>
                    <Progress value={80} className="h-1.5 bg-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-[#161b22] border-b border-gray-700 rounded-none w-full justify-start">
              <TabsTrigger value="overview" className="data-[state=active]:bg-[#0d1117]">
                Overview
              </TabsTrigger>
              <TabsTrigger value="projects" className="data-[state=active]:bg-[#0d1117]">
                Projects
              </TabsTrigger>
              <TabsTrigger value="contributions" className="data-[state=active]:bg-[#0d1117]">
                Contributions
              </TabsTrigger>
              <TabsTrigger value="education" className="data-[state=active]:bg-[#0d1117]">
                Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-[#161b22] border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Trophy className="mr-2 h-5 w-5 text-yellow-400" />
                      Contribution Rank
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center py-4">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-yellow-400">#42</div>
                        <p className="text-gray-400 mt-1">Top 1% of contributors</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#161b22] border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <LineChart className="mr-2 h-5 w-5 text-green-400" />
                      Contribution Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center py-4">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-green-400">1,248</div>
                        <p className="text-gray-400 mt-1">Contributions this year</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-[#161b22] border-gray-700 mb-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-blue-400" />
                    Contribution Graph
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center">
                    <p className="text-gray-400">Contribution graph visualization would go here</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#161b22] border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Star className="mr-2 h-5 w-5 text-purple-400" />
                    Featured Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <FileCode2 className="h-10 w-10 text-gray-500" />
                        </div>
                        <div>
                          <h3 className="text-blue-400 font-medium">Project Name {i}</h3>
                          <p className="text-sm text-gray-400 mb-1">
                            A brief description of this amazing project and what it does.
                          </p>
                          <div className="flex items-center text-xs text-gray-500">
                            <span className="flex items-center mr-3">
                              <Code2 className="h-3 w-3 mr-1" />
                              TypeScript
                            </span>
                            <span className="flex items-center">
                              <Star className="h-3 w-3 mr-1" />
                              {42 * i}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects">
              <div className="grid grid-cols-1 gap-6 mt-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="bg-[#161b22] border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-blue-400">Project Name {i}</CardTitle>
                      <CardDescription>
                        A comprehensive description of this project, its goals, and technologies used.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-sm">
                          This project was built using React, TypeScript, and Node.js. It features real-time data
                          synchronization, user authentication, and a responsive design.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-blue-700 text-blue-400">
                            React
                          </Badge>
                          <Badge variant="outline" className="border-blue-700 text-blue-400">
                            TypeScript
                          </Badge>
                          <Badge variant="outline" className="border-blue-700 text-blue-400">
                            Node.js
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Star className="h-4 w-4 mr-1 text-yellow-400" />
                          <span className="mr-4">{42 * i} stars</span>
                          <span>Last updated: 2 weeks ago</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="contributions">
              <div className="space-y-6 mt-6">
                <Card className="bg-[#161b22] border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg">Contribution Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-[#0d1117] p-4 rounded-lg">
                        <div className="text-2xl font-bold">1,248</div>
                        <div className="text-sm text-gray-400">Total Contributions</div>
                      </div>
                      <div className="bg-[#0d1117] p-4 rounded-lg">
                        <div className="text-2xl font-bold">64</div>
                        <div className="text-sm text-gray-400">Current Streak</div>
                      </div>
                      <div className="bg-[#0d1117] p-4 rounded-lg">
                        <div className="text-2xl font-bold">127</div>
                        <div className="text-sm text-gray-400">Repositories Contributed To</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#161b22] border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Contributions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-start border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                          <div className="flex-shrink-0 mr-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                              <Code2 className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-blue-400 font-medium">
                              Contributed to <span className="font-bold">organization/repo-name-{i}</span>
                            </h3>
                            <p className="text-sm text-gray-400 mb-1">
                              Fixed a bug in the authentication system and improved performance by 30%.
                            </p>
                            <div className="text-xs text-gray-500">3 days ago • 7 commits • 2 pull requests</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="space-y-6 mt-6">
                <Card className="bg-[#161b22] border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5 text-blue-400" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-l-2 border-blue-500 pl-4">
                        <h3 className="font-bold">Master of Computer Science</h3>
                        <p className="text-blue-400">Stanford University</p>
                        <p className="text-sm text-gray-400">2018 - 2020</p>
                        <p className="text-sm mt-2">
                          Specialized in Artificial Intelligence and Machine Learning. Thesis on "Neural Networks for
                          Natural Language Processing".
                        </p>
                      </div>

                      <div className="border-l-2 border-blue-500 pl-4">
                        <h3 className="font-bold">Bachelor of Science in Computer Science</h3>
                        <p className="text-blue-400">MIT</p>
                        <p className="text-sm text-gray-400">2014 - 2018</p>
                        <p className="text-sm mt-2">
                          Graduated with honors. Participated in multiple hackathons and coding competitions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#161b22] border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <BookOpen className="mr-2 h-5 w-5 text-green-400" />
                      Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        "AWS Certified Solutions Architect",
                        "Google Cloud Professional Developer",
                        "Microsoft Certified: Azure Developer Associate",
                        "TensorFlow Developer Certificate",
                      ].map((cert, i) => (
                        <div key={i} className="flex items-center p-3 bg-[#0d1117] rounded-lg">
                          <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center mr-3">
                            <Badge className="h-4 w-4 text-green-300" />
                          </div>
                          <div>
                            <h3 className="font-medium">{cert}</h3>
                            <p className="text-xs text-gray-400">Issued {2023 - i}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
