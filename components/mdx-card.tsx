import Link from "next/link"

import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string
  disabled?: boolean
}

export function MdxCard({
  href,
  className,
  children,
  disabled,
  title,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "group relative my-6 rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg",
        disabled && "cursor-not-allowed opacity-60",
        className
      )}
      {...props}
    >
      <div className="flex flex-col justify-between space-y-4">
        <div className="space-y-2 [&>h3]:!mt-0 [&>h4]:!mt-0 [&>p]:text-muted-foreground">
          {title}
        </div>
      </div>
      {children}
      {href && (
        <Link href={disabled ? "#" : href} className="absolute inset-0">
          <span className="sr-only">View</span>
        </Link>
      )}
    </div>
  )
}
