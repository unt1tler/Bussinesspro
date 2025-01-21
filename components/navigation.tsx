"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const { navigation, features } = siteConfig

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-xl font-bold">
            {siteConfig.name}
          </motion.span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.items
            .filter((item) => item.enabled)
            .map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                  {item.title}
                </Link>
              </motion.div>
            ))}
        </nav>
        {features.dashboard.enabled && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="default">
              <Link href={features.dashboard.url}>Dashboard</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}