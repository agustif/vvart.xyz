          import Link from "next/link"
              import { allAuthors, allGuides, Author } from "contentlayer/generated"
              import { compareDesc } from "date-fns"

              import { DocsPageHeader } from "@/components/page-header"
              import { Icons } from "@/components/icons"
              import { AnimatedIcon } from "@/components/animated-icon"
              import { motion } from "framer-motion"
              import { AnimatedSkeleton } from "@/components/animated-skeleton"
import { GuideAuthors } from "@/components/guide-authors"

              export const metadata = {
                title: "Checks Guide",
                description:
                  "Collector's guide into the visualize value ecosystem: checks",
              }

              export default function HomePage() {
                const guides = allGuides
                  .filter((guide) => guide.published)
                  .sort((a, b) => {
                    return compareDesc(new Date(a.date), new Date(b.date))
                  })
                    const authors = guides[0].authors.map((author) =>
    allAuthors.find(({ slug }: {slug: any }) => slug === `/authors/${author}`)
  )

                return (
                  <div className="px-3 py-6 lg:py-10">

                    <DocsPageHeader
                      heading="Checks Guide"
                      text="Collector's guide into the visualize value ecosystem: checks"
                    />

                    <div>
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
                                <Icons.logo className="absolute -right-3 -top-3 fill-black text-white" />
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
                          <AnimatedSkeleton/>
                        ) : null}

                        </div>
                    ) : (
                      <p>No guides published.</p>
                    )}
                  </div>
                  <GuideAuthors className="mt-8 max-w-sm" authors={authors as Author[]} />

                      </div>
                )
              }
