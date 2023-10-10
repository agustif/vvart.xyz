"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { MainNavItem } from "types"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/mobile-nav"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipArrow,
} from "@/components/ui/tooltip"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  const handleLinkClick = () => {
    setShowMobileMenu(false)
  }

  return (
    <div className="flex w-full pt-10 gap-6 md:gap-10 selection:dark:text-black selection:dark:bg-white">
      <TooltipProvider>
        <Tooltip>
        <TooltipTrigger asChild>
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.logo />
            <span className="hidden font-bold sm:inline-block">

              {siteConfig.name}
            </span>
            {/* <Icons.home className="h-4 w-auto" /> */}
          </Link>
        </TooltipTrigger>
        <TooltipContent sideOffset={10} side="left">Go to home
              <TooltipArrow className="fill-gray-200 dark:fill-gray-800" />
              </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {items?.length ? (
        <nav className="hidden justify-center gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={items[0].title}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
              onClick={handleLinkClick}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="inline-block font-bold">
          {siteConfig.name}
        </span>
      </button>
      {showMobileMenu && items && (
        <MobileNav onLinkClick={handleLinkClick} items={items}>
          {children}
        </MobileNav>
      )}
    </div>
  )
}
