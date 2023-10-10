"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  text?: string
}

export function DocsPageHeader({
  heading,
  text,
  className,
  ...props
}: DocsPageHeaderProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  const headingVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  }

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
  }

  const hrVariants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 0.5, delay: 0.6 } },
  }

  return (
    <motion.div
      className={cn("mb-10 space-y-4 selection:dark:bg-white selection:dark:text-black", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="inline-block font-heading text-2xl md:text-4xl lg:text-5xl"
        variants={headingVariants}
      >
        {heading}
      </motion.h1>
      {text && (
        <motion.p
          className="text-xl text-muted-foreground"
          variants={textVariants}
        >
          {text}
        </motion.p>
      )}
      <motion.hr
        className="my-4"
        variants={hrVariants}
      />
    </motion.div>
  )
}
