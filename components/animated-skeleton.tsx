"use client"

import {motion} from "framer-motion"
import { FileQuestion } from "lucide-react";
import { CardTitle } from "./ui/card";
import Image from "next/image"
export const AnimatedSkeleton = ({}) => {
  return(
    <motion.div
      className="cursor-disabled mt-2 hidden h-full w-full flex-col items-center justify-center gap-5 rounded-lg rounded-tl-none border-2 border-dashed border-gray-200 bg-[#F8F7FC] p-6  opacity-50  transition-shadow dark:border-gray-800 dark:bg-[#070803] md:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <Image alt="opepen-vvd" src="/images/guides/opepen/opepen-light.png"className="block dark:hidden"    width="512" height="512"/>
      <Image alt="opepen-vvd" src="/images/guides/opepen/opepen-dark.png" className="hidden dark:block"  width="512" height="512"/>
      <p className="text-3xl font-bold text-[#F4F3F8] dark:text-[#0B0B07] ">COMING SOON...</p>
      {/* {children} */}
      {/* <FileQuestion className="text-gray-200" size={48} /> */}
    </motion.div>
  )
}
