"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Lock } from "lucide-react"

const features = [
  {
    title: "Advanced Protection",
    description: "State-of-the-art detection systems to prevent cheating",
    icon: Shield,
  },
  {
    title: "Low Impact",
    description: "Minimal performance impact on your game",
    icon: Zap,
  },
  {
    title: "Secure",
    description: "Enterprise-grade security for your game",
    icon: Lock,
  },
]

export function Features() {
  return (
    <div className="container py-24">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
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
    </div>
  )
}

