"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're on a mission to make gaming fair and enjoyable for everyone
        </p>
      </motion.div>
      <div className="mt-16 grid gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid gap-8 md:grid-cols-2 md:items-center"
        >
          <div>
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded by passionate gamers and security experts, we understand the importance of fair play in gaming.
              Our team combines decades of experience in game development and cybersecurity to create the most effective
              anti-cheat solution.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src="/placeholder.svg" alt="Team at work" fill className="object-cover" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <h2 className="text-3xl font-bold">Our Values</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of anti-cheat technology",
              },
              {
                title: "Integrity",
                description: "We believe in transparency and honest communication",
              },
              {
                title: "Impact",
                description: "We measure our success by the positive impact on gaming communities",
              },
            ].map((value) => (
              <div key={value.title} className="space-y-2">
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

