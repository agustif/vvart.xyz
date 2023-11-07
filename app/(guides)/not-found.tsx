import { Icons } from '@/components/icons'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center gap-10">
      <Icons.close className="h-24 w-24 text-gray-400 dark:text-gray-600" />
      <h1 className="text-3xl dark:text-white">Not Found</h1>
      <p>Could not find requested page</p>
      <div className="flex gap-5">

      <Link href="/"className="flex items-center gap-4"> Go back Home <Icons.home /> </Link>
      <Separator orientation="vertical" />
      <Link href="/checks-vv" className="flex items-center gap-4"> <Icons.logo /> Checks guide</Link>
      </div>

    </div>
  )
}
