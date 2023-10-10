"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  }

  return (
    <motion.footer
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="container mb-10 flex flex-col items-center justify-between gap-4 py-10 selection:dark:bg-white selection:dark:text-black md:h-24 md:flex-row md:py-0"
        variants={itemVariants}
      >
        <motion.div
          className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"
          variants={itemVariants}
        >
          <p className="flex flex-row items-center gap-2 text-center text-sm leading-loose md:text-left">
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer noopener"
              className="group text-sm font-medium transition-all duration-300 ease-in-out hover:text-blue-500"
            >
              <Icons.pen className="mr-2 inline-flex h-5 w-5 group-hover:text-blue-500" />
              Written by{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                Matt O Brien
              </span>
            </a>
          </p>
        </motion.div>
        <div className="-mt-5 flex flex-col items-center justify-center">
          <div className="mt-2 flex items-center justify-center gap-2">

          <Icons.logo className="h-8 w-auto" />
          {<span className="font-bold sm:inline-block">
              {siteConfig.name}
            </span>}
          </div>
        </div>
        <motion.div
          className="group flex flex-row items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"
          variants={itemVariants}
        >
          <p className="flex flex-row items-center gap-2 text-center text-sm leading-loose md:text-left">
            <a
              href={"https://twitter.com/@0xAgusti"}
              target="_blank"
              rel="noreferrer noopener"
              className=" text-sm font-medium transition-all duration-300 ease-in-out hover:text-green-600"
            >
              Built by{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                Agusti Fernandez Pardo
              </span>
              <Icons.code className="ml-2 inline-flex h-5 w-5 group-hover:text-green-600" />
            </a>
          </p>
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}
