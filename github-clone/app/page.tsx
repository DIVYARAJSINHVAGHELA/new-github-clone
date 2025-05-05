import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FeaturedCompanies } from "@/components/featured-companies"
import { CodeExample } from "@/components/code-example"
import { Code, Shield, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#0d1117] text-white py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build and ship software on a single, collaborative platform
            </h1>
            <p className="text-xl mb-8">Join the world's most widely adopted AI-powered developer platform.</p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Input type="email" placeholder="Enter your email" className="bg-white text-black" />
              <Button className="bg-[#2ea44f] hover:bg-[#2c974b] text-white">Sign up for GitHub</Button>
            </div>
            <div className="mt-4">
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                Try GitHub Copilot
              </Button>
            </div>
          </div>

          {/* Code Example */}
          <div className="relative mt-16 mb-8">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
            <CodeExample />
          </div>

          {/* GitHub Features */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-900 p-2 rounded-lg mr-4">
                    <Code className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">Powerful Collaboration</h3>
                </div>
                <p className="text-gray-400">
                  Work together seamlessly with pull requests, discussions, and code reviews to build better software.
                </p>
              </div>

              <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="bg-green-900 p-2 rounded-lg mr-4">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold">Enhanced Security</h3>
                </div>
                <p className="text-gray-400">
                  Protect your code with advanced security features, vulnerability scanning, and dependency management.
                </p>
              </div>

              <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-900 p-2 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold">AI-Powered Development</h3>
                </div>
                <p className="text-gray-400">
                  Accelerate your workflow with GitHub Copilot, the AI pair programmer that helps you write better code
                  faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Companies */}
      <div className="bg-[#0d1117] py-12 px-4">
        <div className="container mx-auto">
          <FeaturedCompanies />
        </div>
      </div>

      {/* Accelerate Performance Section */}
      <div className="bg-[#0d1117] text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="bg-gradient-to-b from-purple-500/30 to-transparent rounded-full p-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Accelerate performance</h2>
            <p className="text-xl max-w-3xl">
              With GitHub Copilot embedded throughout the platform, you can simplify your workflow, automate tasks, and
              improve the developer experience.
            </p>
          </div>

          <div className="mt-12 bg-[#161b22] border border-gray-700 rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_5-5-2025_105850_github.com%20%281%29%20%281%29-cthLSFp7eH91Kphpi1hCiPWyqiyFyn.jpeg"
              alt="GitHub Copilot example"
              width={800}
              height={500}
              className="w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Work 55% faster</h3>
              <p className="text-gray-400 mb-6">
                Increase productivity with AI-powered coding assistance, including code completion, chat, and more.
              </p>
              <Button variant="outline" className="border-gray-700 text-white">
                Explore GitHub Copilot
              </Button>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Duolingo logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <span className="text-lg font-medium">duolingo</span>
              </div>
              <p className="text-gray-400 mb-4">Duolingo's developers speed up by 25% with GitHub Copilot</p>
              <Link href="#" className="text-blue-400 hover:underline">
                Read customer story →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-[#0d1117] text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="bg-gradient-to-b from-blue-500/30 to-transparent rounded-full p-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built-in application security where found means fixed
            </h2>
            <p className="text-xl max-w-3xl">
              Use AI to find and fix vulnerabilities—freeing your teams to ship more secure software faster.
            </p>
          </div>

          <div className="mt-12 bg-[#161b22] border border-gray-700 rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_5-5-2025_105850_github.com%20%281%29%20%282%29-D3ZOAROilojmydgEWw2OEaCtBGH9b6.jpeg"
              alt="GitHub Security example"
              width={800}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="bg-[#0d1117] text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="bg-gradient-to-b from-pink-500/30 to-transparent rounded-full p-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work together, achieve more</h2>
            <p className="text-xl max-w-3xl">
              Collaborate with your teams, use management tools that sync with your projects, and code from anywhere—all
              on a single, integrated platform.
            </p>
          </div>
        </div>
      </div>

      {/* Enterprise Section */}
      <div className="bg-[#0d1117] text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="bg-gradient-to-b from-yellow-500/30 to-transparent rounded-full p-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From startups to enterprises,{" "}
              <span className="text-gray-400">GitHub scales with teams of any size in any industry.</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button variant="outline" className="border-gray-700 text-white">
              By industry
            </Button>
            <Button variant="outline" className="border-gray-700 text-white">
              By size
            </Button>
            <Button variant="outline" className="border-gray-700 text-white">
              By use case
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Figma logo"
                width={40}
                height={40}
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Figma streamlines design workflows and strengthens security</h3>
            </div>
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Mercedes-Benz logo"
                width={40}
                height={40}
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Mercedes-Benz accelerates delivery and automates onboarding</h3>
            </div>
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-6">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Mercado Libre logo"
                width={40}
                height={40}
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Mercado Libre cuts coding time by 50%</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Dashboard Promo */}
      <div className="bg-[#0d1117] text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Showcase Your Skills</h2>
            <p className="text-lg mb-6">
              Create a professional developer profile with our new Resume Dashboard feature. Highlight your skills,
              projects, and contributions in one place.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200">Try Resume Dashboard</Button>
          </div>
        </div>
      </div>

      {/* Open Source Contribution Ranking Promo */}
      <div className="bg-[#0d1117] text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Recognize Top Contributors</h2>
            <p className="text-lg mb-6">
              Explore our new Open Source Contribution Rankings to see who's making the biggest impact in the community.
              Track your progress and compete with developers worldwide.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200">View Rankings</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
