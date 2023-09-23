"use client"
import { motion } from "framer-motion"
import {
  AccordionTrigger,
} from "@/components/ui/accordion"

import { cn } from "@/lib/utils"

interface AnimatedAccordionTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  title?: string
  slug?: string
  isOpen?: boolean
}

export function AnimatedAccordionTrigger({
  className,
  disabled,
  title,
  slug,
  isOpen,
  ...props
}: AnimatedAccordionTriggerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AccordionTrigger
        className={cn(
          "group relative rounded-lg border-2 p-6  dark:border-white",
          isOpen ? "border-transparent" : "justify-between",
          disabled && "cursor-not-allowed opacity-60",
          className
        )}
      >
        <div className="mr-2 flex w-full flex-col justify-between space-y-4 lg:mr-6">
          <div className="space-y-2">
            <div className={cn("flex", isOpen ? "justify-center" : "justify-between")}>
              {title && (
                <motion.h3
                  id={slug}
                  // @ts-expect-error
                  href={`#${slug}`}
                  className={cn(
                    "duration-400 text-md font-semibold transition-all dark:group-hover:text-gray-700 md:text-lg lg:text-xl",
                    isOpen ? "text-left text-gray-400 underline-offset-4 dark:text-gray-700" : "underline-transparent text-left dark:text-gray-200",
                    isOpen && "decoration-offset-8 group-hover:decoration-offset-8 select-none"
                  )}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {title} <br/>
                </motion.h3>
              )}
              {props.children}
            </div>
          </div>
        </div>
      </AccordionTrigger>
    </motion.div>
  )
}
