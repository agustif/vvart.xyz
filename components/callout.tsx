import { cn } from "@/lib/utils"
import { Icons } from "./icons"

interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  type?: "default" | "warning" | "danger" | "info"
}

export function Callout({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn("text-md my-6 flex items-start rounded-lg border-2 border-l-8 bg-gray-100 p-4 font-normal text-gray-700", {
        "border-red-900 bg-red-50": type === "danger",
        "border-yellow-900 bg-yellow-50": type === "warning",
        "border-gray-900 bg-gray-50": type === "default",
        "border-black bg-gray-50 dark:bg-gray-950 dark:border-gray-900 dark": type === "info",
        // type info blueish
      })}
      {...props}
    >
      {icon && <span className="mr-4">{<Icons.info size={36} />}</span>}
      <div>{children}</div>
    </div>
  )
}
