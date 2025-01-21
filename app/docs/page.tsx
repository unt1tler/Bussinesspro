"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function DocsPage() {
  const { title, description, sections } = siteConfig.pages.docs

  return (
    <div className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">{description}</p>
      </motion.div>
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item.title}>
                  <Link 
                    href={item.href} 
                    className="text-blue-600 hover:underline dark:text-blue-400 text-lg"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}