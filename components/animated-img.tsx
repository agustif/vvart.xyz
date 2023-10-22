"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { AnimatedIcon } from "./animated-icon"
import { Icons } from "./icons"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"

interface AnimatedImageProps {
  alt?: string
  className?: string
  icon?: string
  children?: React.ReactNode
  src?: string
  title?: string
}

export function AnimatedImage({
  children,
  icon,
  ...props
}: AnimatedImageProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatedIcon>
      <div className="relative">
        <AspectRatio ratio={1/1}>

        <motion.img
          src={props.src}
          alt={props.title}
          className="z-1 mb-6 h-full w-full select-none rounded-lg object-cover"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        </AspectRatio>
      </div>
    </AnimatedIcon>
  )
}
