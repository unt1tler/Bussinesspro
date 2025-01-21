"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

export default function FeaturesPage() {
  const { title, description, items } = siteConfig.pages.features

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
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {items.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}