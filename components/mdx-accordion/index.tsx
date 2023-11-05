"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
} from "@/components/ui/accordion"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { AnimatedAccordionTrigger } from "./animated-accordion-trigger"
import { AnimatedAccordionContent } from "./animated-accordion-content"
import { Clock, Clock1, Clock2,Clock3,Clock4, Clock5, Clock6, Clock7 } from "lucide-react";
import { type Direction } from "@/components/ui/accordion";
import { TooltipContent, TooltipProvider, TooltipTrigger , Tooltip, TooltipArrow } from "@/components/ui/tooltip";

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string
  disabled?: boolean
  readingTimeInMinutes?: number
  slug?: string
  dir?: Direction
  defaultValue?: string;
}

interface ClockWithTimeProps {
  readingTimeInMinutes?: number
}

function ClockWithTime({ readingTimeInMinutes }:ClockWithTimeProps) {
  switch (true) {
    case readingTimeInMinutes === 1:
      return <Clock1 className="-ml-3 h-3 w-3" />;
    case readingTimeInMinutes === 2:
      return <Clock2 className="-ml-3 h-3 w-3" />;
    case readingTimeInMinutes === 3:
      return <Clock3 className="-ml-3 h-3 w-3" />;
    case readingTimeInMinutes === 4:
      return <Clock4 className="-ml-3 h-3 w-3" />;
    case readingTimeInMinutes === 5:
      return <Clock5 className="-ml-3 h-3 w-3" />;
    case readingTimeInMinutes === 6:
      return <Clock6 className="-ml-3 h-3 w-3" />;
    case readingTimeInMinutes === 7:
      return <Clock7 className="-ml-3 h-3 w-3" />;
    default:
      return <Clock className="-ml-3 h-3 w-3" />;
  }
}

export function MdxAccordion({
  href,
  className,
  children,
  disabled,
  title,
  slug,
  readingTimeInMinutes,
  ...props
}: AccordionProps) {
  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.5 } }, // increase duration of exit transition
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={cn(className, "mx-auto max-w-[606px] py-3")}
    >
      <Accordion type="single" collapsible {...props} onValueChange={() => setIsOpen(!isOpen)}>
        <AccordionItem value="item-1">
          <AnimatedAccordionTrigger isOpen={isOpen} disabled={disabled} title={title} slug={slug}>
            {!isOpen && readingTimeInMinutes && (
              <motion.div
                className="my-auto"
                variants={badgeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Badge className="h-5 w-14 select-none gap-1 border-2 border-gray-400 bg-white px-2 pl-4 text-[8px]  text-gray-500 hover:bg-gray-50 group-hover:border-gray-700 dark:text-black  md:h-6">
                  <ClockWithTime readingTimeInMinutes={readingTimeInMinutes} /> {readingTimeInMinutes} min
                </Badge>
              </motion.div>
            )}
          </AnimatedAccordionTrigger>
          <AnimatedAccordionContent>{children}</AnimatedAccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  )
}
