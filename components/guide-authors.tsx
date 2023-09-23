"use client"

import { allAuthors, Author } from "@/.contentlayer/generated"
import Link from "next/link"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Icons } from "./icons"
// import Client from 'twitter-api-v2';

interface GuideAuthorsProps {
  authors: typeof allAuthors[number][]
}

// // Initialize the Twitter API client with your credentials
// const client = new Client({
//   apiKey: 'YOUR_API_KEY',
//   apiSecret: 'YOUR_API_SECRET',
//   accessToken: 'YOUR_ACCESS_TOKEN',
//   accessTokenSecret: 'YOUR_ACCESS_TOKEN_SECRET',
// });

interface GuideAuthorsProps {
  className?:   string; 
  authors: typeof allAuthors[number][];
}

  // Function to fetch author's image from Twitter using the API
  // async function fetchAuthorImage(twitterUsername: string) {
  //   try {
  //     // Fetch the user profile by username
  //     const user = await client.v2.userByUsername(twitterUsername);

  //     // Get the user's profile image URL (you may need to adjust this based on the API response structure)
  //     const imageUrl = user?.profile_image_url_https;

  //     return imageUrl || ''; // Return the image URL or an empty string if not found
  //   } catch (error) {
  //     console.error('Error fetching Twitter profile image:', error);
  //     return ''; // Return an empty string in case of an error
  //   }
  // }

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
          className={`group -mt-5 flex cursor-pointer justify-between space-x-4 rounded-xl border-2 border-gray-100  p-5 shadow-[#60a5fa] transition-all duration-300 hover:bg-gray-50 hover:shadow-[#60a5fa] dark:border-gray-800 dark:shadow-[blue-500] dark:hover:bg-gray-900 ${className}`
          }
          variants={container}
          initial="hidden"
          animate="show"
        >
      {filteredAuthors.map((author) =>             author ? (
              <div                 key={author._id}
              className="relative flex flex-col gap-2">
              <Link
              target="_blank"
                href={`https://twitter.com/${author.twitter}`}
                className="flex items-center space-x-6 text-sm outline-offset-[20px] outline-black"
              >
                <motion.img
                    src={author.avatar}
                    alt={author.title}
                  width={80}
                  height={80}
                  className="rounded-full bg-white shadow-sm transition-all duration-300 hover:scale-105 group-hover:bg-gray-100 group-hover:shadow-md dark:bg-gray-800 dark:shadow-[blue-500] dark:group-hover:bg-gray-700"
                  variants={item}
                />
                          <Icons.logo className="absolute bottom-0 left-10  h-6 w-6 fill-[#60a5fa] text-white" />

                                  <Separator orientation="vertical" className="mx-5" />

                <motion.div
                  className="flex flex-1 flex-col  gap-1  text-left leading-tight transition-all duration-300 hover:text-gray-900 dark:text-gray-700 dark:hover:text-gray-300"
                  variants={item}
                >
                  <p className="text-lg font-bold text-gray-700 dark:text-gray-600">{author.title}</p>
                  <p className="flex items-center gap-1 rounded-full border-2 border-blue-400 px-2 py-0.5 text-xs font-semibold text-blue-400 transition-all duration-300 group-hover:bg-[#60a5fa] group-hover:text-white dark:text-gray-500">
                  <Icons.twitter className="h-3 w-3 fill-blue-400  font-semibold text-blue-400 group-hover:fill-white group-hover:text-white" />  @{author.twitter}
                  </p>
                </motion.div>

              </Link>
                </div>

            ) : null
          )}

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
