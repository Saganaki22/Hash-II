"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Info, Github, Hash } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/android-chrome-192x192.png" alt="Hash Logo" width={32} height={32} className="h-8 w-8" />
          <div>
            <h1 className="text-xl font-bold text-primary">Hash</h1>
            <p className="text-xs text-muted-foreground">Base64 & AES Encoder/Decoder</p>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <Button variant={pathname === "/" ? "default" : "ghost"} size="sm" asChild>
            <Link href="/" className="gap-1 md:gap-2">
              <Hash className="h-4 w-4" />
              <span className="hidden md:inline">Hash</span>
            </Link>
          </Button>

          <Button variant={pathname === "/about" ? "default" : "ghost"} size="sm" asChild>
            <Link href="/about" className="gap-1 md:gap-2">
              <Info className="h-4 w-4" />
              <span className="hidden md:inline">About</span>
            </Link>
          </Button>

          <Button variant="ghost" size="sm" asChild>
            <Link
              href="https://github.com/Saganaki22/Hash-II"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-1 md:gap-2"
            >
              <Github className="h-4 w-4" />
              <span className="hidden md:inline">GitHub</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

