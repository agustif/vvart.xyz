"use client"

import * as React from "react"
import { motion, useAnimation } from "framer-motion"

import { TableOfContents } from "@/lib/toc"
import { cn } from "@/lib/utils"
import { useMounted } from "@/hooks/use-mounted"
import { Icons } from "./icons"

interface TocProps {
  toc: TableOfContents
}

export function GuideTableOfContents({ toc }: TocProps) {
  const itemIds = React.useMemo(
    () =>
      toc.items
        ? toc.items
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [toc]
  )
  const activeHeading = useActiveItem(itemIds)
  const mounted = useMounted()
  const controls = useAnimation()

  React.useEffect(() => {
    if (mounted) {
      controls.start("visible")
    }
  }, [mounted, controls])

  if (!toc?.items) {
    return null
  }

  return (
    <motion.div
      className="space-y-2"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
    >
      <p className="mt-8 inline-flex select-none items-center justify-center gap-2 font-medium">
        Table of contents
        {/* <Icons.logo className="h-5 w-5" />  */}
      </p>
      <Tree tree={toc} activeItem={activeHeading} />
    </motion.div>
  )
}

function useActiveItem(itemIds: (string | undefined)[]) {
  const [activeId, setActiveId] = React.useState<string>("")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    itemIds?.forEach((id) => {
      if (!id) {
        return
      }

      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      itemIds?.forEach((id) => {
        if (!id) {
          return
        }

        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  return activeId
}

interface TreeProps {
  tree: TableOfContents
  level?: number
  activeItem?: string | null
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.items?.length && level < 3 ? (
    <motion.ul

      className={cn("m-0 select-none list-none", { "pl-4": level !== 1 })}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{ duration: 0.5 }}
    >
      {tree.items.map((item, index) => {
        const isActive = item.url === `#${activeItem}`
        return (
          <motion.li
            key={index}
            className={cn("mt-0 pt-2")}
            initial="hidden"
            animate="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          ><div className="flex gap-1">
            <a
              tabIndex={-1}
              href={item.url}
              className={cn(
                "inline-block no-underline",
                isActive ? "font-medium text-primary" : "text-sm text-muted-foreground"
              )}
            >
              {item.title}
            </a>
            {isActive && <Icons.logo className="ml-2 h-5 w-5" />}
            </div>
            {item.items?.length ? (
              <Tree tree={item} level={level + 1} activeItem={activeItem} />
            ) : null}
          </motion.li>
        )
      })}
    </motion.ul>
  ) : null
}
