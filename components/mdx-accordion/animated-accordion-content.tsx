"use client"

import { motion } from "framer-motion"
import { AccordionContent } from "@/components/ui/accordion"

interface AnimatedAccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AnimatedAccordionContent({ children, ...props }: AnimatedAccordionContentProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <AccordionContent {...props}>
        <div className="-top-6 -mt-6 select-text rounded-md border-x-2 border-b-2 border-gray-100 px-4 py-10 text-left selection:bg-black selection:text-white dark:border-white selection:dark:bg-white selection:dark:text-black">{children}</div>
      </AccordionContent>
    </motion.div>
  )
}
