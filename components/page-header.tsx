"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Eye } from "lucide-react"

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  text?: string
  views?: number
}

export function DocsPageHeader({
  heading,
  text,
  views,
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
      className={cn("mb-10 space-y-4  selection:bg-black  selection:text-white selection:dark:bg-white selection:dark:text-black", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <div className="flex items-center justify-between">
        <motion.h1
          className="inline-block font-heading text-2xl md:text-4xl lg:text-5xl"
          variants={headingVariants}
        >
          {heading}
        </motion.h1>

      </div>
      <div className="flex justify-between">
      {text && (
        <motion.p
          className="w-[100%] text-xl text-muted-foreground"
          variants={textVariants}
        >
          {text}
        </motion.p>
      )}

    <motion.div           variants={textVariants}
    className="flex items-center justify-end space-x-2 font-medium text-gray-500">
      <Eye size={18} className=" fill-white" />
      <motion.span>{views ?? 0}</motion.span>
    </motion.div>
        </div>
      <motion.hr
        className="my-4"
        variants={hrVariants}
      />
    </motion.div>
  )
}
