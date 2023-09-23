"use client"

import {motion} from "framer-motion"
import { FileQuestion } from "lucide-react";
import { CardTitle } from "./ui/card";

export const AnimatedSkeleton = ({}) => {
  return(
    <motion.div
      className="cursor-disabled mt-2 hidden h-full w-full items-center justify-center rounded-lg rounded-tl-none border-2 border-dashed  border-gray-200  p-6 opacity-50 transition-shadow dark:border-gray-800 md:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <CardTitle className="text-gray-200">COMING SOON...</CardTitle>
      {/* {children} */}
      {/* <FileQuestion className="text-gray-200" size={48} /> */}
    </motion.div>
  )
}
