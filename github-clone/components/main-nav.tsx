"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Book, Code, FileText, GitPullRequest, Github, Plus, Star, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MainNav() {
  const pathname = usePathname()

  return (
    <header className="bg-[#0d1117] border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto flex items-center h-16 px-4">
        <div className="flex items-center">
          <Link href="/" className="text-white mr-4">
            <Github className="h-8 w-8" />
          </Link>

          <div className="hidden md:flex">
            <Input placeholder="Search or jump to..." className="w-64 bg-[#161b22] border-gray-700 text-white" />
          </div>
        </div>

        <nav className="hidden md:flex items-center ml-6 space-x-4">
          <Link
            href="/pulls"
            className={`text-sm ${pathname === "/pulls" ? "text-white" : "text-gray-400 hover:text-gray-300"}`}
          >
            Pull requests
          </Link>
          <Link
            href="/issues"
            className={`text-sm ${pathname === "/issues" ? "text-white" : "text-gray-400 hover:text-gray-300"}`}
          >
            Issues
          </Link>
          <Link
            href="/codespaces"
            className={`text-sm ${pathname === "/codespaces" ? "text-white" : "text-gray-400 hover:text-gray-300"}`}
          >
            Codespaces
          </Link>
          <Link
            href="/marketplace"
            className={`text-sm ${pathname === "/marketplace" ? "text-white" : "text-gray-400 hover:text-gray-300"}`}
          >
            Marketplace
          </Link>
          <Link
            href="/explore"
            className={`text-sm ${pathname === "/explore" ? "text-white" : "text-gray-400 hover:text-gray-300"}`}
          >
            Explore
          </Link>
          <Link
            href="/rankings"
            className={`text-sm ${pathname === "/rankings" ? "text-white font-medium" : "text-gray-400 hover:text-gray-300"}`}
          >
            Rankings
          </Link>
          <Link
            href="/resume"
            className={`text-sm ${pathname === "/resume" ? "text-white font-medium" : "text-blue-400 hover:text-blue-300"}`}
          >
            Resume Dashboard
          </Link>
        </nav>

        <div className="ml-auto flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Plus className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#161b22] text-white border-gray-700">
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>New repository</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Code className="mr-2 h-4 w-4" />
                <span>Import repository</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <GitPullRequest className="mr-2 h-4 w-4" />
                <span>New pull request</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Star className="mr-2 h-4 w-4" />
                <span>New gist</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Book className="mr-2 h-4 w-4" />
                <span>New organization</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#161b22] text-white border-gray-700">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem>
                <span>Your profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Your repositories</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Your projects</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Your stars</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem>
                <Link href="/resume" className="w-full">
                  Resume Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem>
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="md:hidden px-4 pb-3">
        <Input placeholder="Search or jump to..." className="w-full bg-[#161b22] border-gray-700 text-white" />
      </div>
    </header>
  )
}
