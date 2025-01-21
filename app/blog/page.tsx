"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { formatDate } from "@/lib/utils"

export default function BlogPage() {
  const { title, description, posts } = siteConfig.pages.blog

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
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              {formatDate(post.date)} • {post.author}
            </p>
            <p className="text-base mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              Read more →
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  )
}