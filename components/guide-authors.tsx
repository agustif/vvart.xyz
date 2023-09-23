"use client"

import { allAuthors, Author } from "@/.contentlayer/generated"
import Link from "next/link"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Icons } from "./icons"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipArrow,
} from "@/components/ui/tooltip"

interface GuideAuthorsProps {
  authors: typeof allAuthors[number][]
}

interface GuideAuthorsProps {
  className?:   string;
  authors: typeof allAuthors[number][];
}

export function GuideAuthors({ authors, className }: GuideAuthorsProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const separatorVariants = {
    hidden: { width: 0 },
    show: { width: "100%", transition: { duration: 0.5 } },
  }
  const filteredAuthors = authors.filter((author): author is Author => !!author);

  return (
    <>
      {authors?.length ? (
        <motion.div
          className={`group flex  cursor-pointer justify-between space-x-4 rounded-lg border-2 border-gray-100 shadow-[#60a5fa]   transition-all duration-300 hover:border-[#60a5fa] hover:bg-gray-50 hover:shadow-[#60a5fa] dark:border-gray-800 dark:shadow-[blue-500] dark:hover:bg-gray-900 ${className}`
          }
          variants={container}
          initial="hidden"
          animate="show"
        >
          <TooltipProvider>
                <Tooltip>
                  <div className="w-[345px]">
            {filteredAuthors.map((author) => author ? (
              <div key={author._id} className="relative flex w-full flex-col gap-2">
                <TooltipTrigger asChild>
                    <Link
                      target="_blank"
                      href={`https://twitter.com/${author.twitter}`}
                      className=" flex max-w-[200] items-center space-x-3 p-4  text-sm outline-[#60a5fa]"
                    >
                      <motion.img
                        src={author.avatar}
                        alt={author.title}
                        width={80}
                        height={80}
                        className="rounded-full bg-white shadow-sm transition-all duration-300 hover:scale-105 group-hover:bg-gray-100 group-hover:shadow-md dark:bg-gray-800 dark:shadow-[blue-500] dark:group-hover:bg-gray-700"
                        variants={item}
                      />
                      <Icons.logo className="absolute bottom-3 left-16  h-6 w-6 fill-[#60a5fa] text-white" />
                      <Separator orientation="vertical" className="mx-2" />
                      <motion.div
                        className="flex flex-col  gap-1  text-left leading-tight transition-all duration-300 hover:text-gray-900 dark:text-gray-700 dark:hover:text-gray-300"
                        variants={item}
                      >
                        <p className="select-none text-lg font-bold text-gray-700 dark:text-gray-600">{author.title}</p>

                        <Link
                          target="_blank"
                          href={`https://twitter.com/${author.twitter}`}
                          className="flex items-center gap-1 rounded-full border-2 border-blue-400 px-2 py-0.5 text-xs font-semibold text-blue-400 transition-all duration-300 group-hover:bg-[#60a5fa] group-hover:text-white dark:text-gray-500"
                        >
                          <Icons.twitter className="h-3 w-3 fill-blue-400  font-semibold text-blue-400 group-hover:fill-white group-hover:text-white" />
                          @{author.twitter}
                        </Link>
                      </motion.div>
                    </Link>
                  </TooltipTrigger>
              </div>
            ) : null)}
            </div>
                                          <TooltipContent sideOffset={7} side="bottom" className="flex select-none items-center gap-2">
                          <Icons.link className="h-4 w-4 text-gray-700 dark:fill-gray-800" />
                          Go to {authors[0].title}&apos;s Twitter
                          <TooltipArrow className="fill-gray-200 dark:fill-gray-800" />
                        </TooltipContent>
                </Tooltip>
          </TooltipProvider>
        </motion.div>
      ) : null}
      <motion.div
        className="my-6"
        variants={separatorVariants}
        initial="hidden"
        animate="show"
      >
      </motion.div>
    </>
  )
}
