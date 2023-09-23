import { cn } from "@/lib/utils"

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
      className={cn("my-6 flex items-start rounded-md border border-l-4 bg-gray-100 p-4 font-semibold text-gray-300", {
        "border-red-900 bg-red-50": type === "danger",
        "border-yellow-900 bg-yellow-50": type === "warning",
        "border-gray-900 bg-gray-50": type === "default",
        "border-black bg-gray-50 dark:bg-gray-950 dark:border-white": type === "info",
        // type info blueish
      })}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  )
}
