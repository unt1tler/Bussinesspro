"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const { hero, features } = siteConfig.pages.home

  return (
    <div className="container">
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{hero.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">{hero.description}</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg">{hero.cta.primary}</Button>
            <Button size="lg" variant="outline">
              {hero.cta.secondary}
            </Button>
          </div>
        </motion.div>
      </section>
      <section className="py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="rounded-lg bg-primary/10 p-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

