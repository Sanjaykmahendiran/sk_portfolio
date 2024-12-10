"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
}

export function ExperienceCard({ title, company, period, description }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-primary">{company}</span>
          <span className="text-muted-foreground">{period}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  )
}

