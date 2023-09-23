"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronUp } from "lucide-react"
export { type Direction } from "@radix-ui/react-accordion"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="duration-600 group flex transition-all">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "duration-600 [&[data-state=closed]]hover:shadow-md flex flex-1 items-center justify-between border-gray-100 py-4 font-medium outline-black  transition-all hover:border-black hover:bg-gray-50 [&[data-state=closed]>svg]:rotate-90 [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-gray-100 [&[data-state=open]]:bg-gray-100 [&[data-state=open]]:text-gray-800   [&[data-state=open]]:dark:bg-white [&[data-state=open]]:dark:text-gray-700",
        className
      )}
      {...props}
    >
      <ChevronUp className="mr-4 h-4 w-4 transition-transform duration-200 group-hover:scale-150 group-focus:scale-150" />
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
