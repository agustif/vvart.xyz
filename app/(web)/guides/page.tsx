import Link from "next/link"
import { allGuides } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { DocsPageHeader } from "@/components/page-header"
import { Icons } from "@/components/icons"
import { AnimatedIcon } from "@/components/animated-icon"
import { motion } from "framer-motion"
import { AnimatedSkeleton } from "@/components/animated-skeleton"

export const metadata = {
  title: "Guides",
  description:
    "Collector's guide into the visualize value ecosystem: checks, opepen",
}

export default function GuidesPage() {
  const guides = allGuides
    .filter((guide) => guide.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
  return (
    <div className="px-3 py-6 lg:py-10">
      <DocsPageHeader
        heading="Guides"
        text="Collector's guide into the visualize value ecosystem: checks, opepen"
      />
      {guides?.length ? (
        <div className={'grid gap-4  md:grid-cols-2  md:gap-6'}>
          {guides.map((guide) => (
            <AnimatedIcon key={guide._id}>
              <article
                key={guide._id}
                className="group relative rounded-lg border-2 border-gray-200 p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                {guide.featured && (
                  <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium">
                    Featured
                  </span>
                )}
                <div className="flex flex-col justify-between space-y-4 pt-4">
                  <Icons.logo className="absolute -right-3 -top-3 fill-black text-white dark:fill-white dark:text-black" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={guide.image} alt={guide.title} className="h-4/5 w-full rounded-lg object-cover" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {guide.title}
                    </h3>
                    {guide.description && (
                      <p className="text-muted-foreground">{guide.description}</p>
                    )}
                  </div>
                </div>
                <Link href={guide.slug} className="absolute inset-0">
                  <span className="sr-only">View</span>
                </Link>
              </article>
            </AnimatedIcon>
          ))}
          {guides.length === 1 ? (
            <AnimatedSkeleton />
          ) : null}        </div>
      ) : (
        <p>No guides published.</p>
      )}
    </div>
  )
}
