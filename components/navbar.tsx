"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <span className="text-primary">{"<SS />"}</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="https://github.com" target="_blank" className="hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="mailto:example@email.com" className="hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}

