"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { formatDate } from "@/lib/utils"

export default function BlogPage() {
  const { title, description, posts } = siteConfig.pages.blog

  return (
    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">{description}</p>
      </motion.div>
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {formatDate(post.date)} • {post.author}
            </p>
            <p className="mt-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-blue-600 hover:underline dark:text-blue-400"
            >
              Read more
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

