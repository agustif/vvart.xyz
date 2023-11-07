import { ImageResponse } from "@vercel/og"

import { ogImageSchema } from "@/lib/validations/og"
import {BadgeCheck} from "lucide-react"
import { Icons } from "@/components/icons"

export const runtime = "edge"

const interRegular = fetch(
  new URL("../../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const interBold = fetch(
  new URL("../../../assets/fonts/CalSans-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(req: Request): Promise<Response> {
  try {
    const fontRegular = await interRegular
    const fontBold = await interBold

    const url = new URL(req.url)
    const values = ogImageSchema.parse(Object.fromEntries(url.searchParams))
    const heading =
      values.heading.length > 140
        ? `${values.heading.substring(0, 140)}...`
        : values.heading

    const { mode } = values
    const paint = mode === "dark" ? "#fff" : "#000"

    const fontSize = heading.length > 100 ? "70px" : "100px"
    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start"
          style={{
            color: paint,
            background:
              mode === "dark"
                ? "linear-gradient(90deg, #000 0%, #111 100%)"
                : "white",
          }}
        >
          {/* @ts-ignore */}
          <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.0806 63.4946L38.0793 63.4951C35.1476 64.7076 31.8791 64.8321 28.8637 63.8462C26.1874 62.9711 23.8669 61.2725 22.2259 59.0067C20.3318 59.3089 18.3903 59.1988 16.5355 58.6784C14.3375 58.0619 12.3352 56.8902 10.721 55.276C9.10684 53.6618 7.93513 51.6595 7.31856 49.4615C6.79807 47.6061 6.68798 45.6639 6.99063 43.7692C3.66606 41.3533 1.50013 37.4312 1.5 33.0004L38.0806 63.4946ZM38.0806 63.4946C40.3599 62.5493 42.3262 60.9942 43.7689 59.0094M38.0806 63.4946L43.7689 59.0094M32.706 38.8422L43.6439 22.433L43.6453 22.4309C43.8327 22.1508 43.8222 21.9615 43.7855 21.8306C43.7375 21.6595 43.5978 21.4523 43.3581 21.2924C43.1184 21.1326 42.8725 21.0826 42.6946 21.1041C42.558 21.1206 42.3789 21.1841 42.1923 21.4627L32.706 38.8422ZM32.706 38.8422V38.7992L29.9542 42.9676C29.8914 43.0628 29.8103 43.1446 29.7157 43.2083C29.6211 43.272 29.5148 43.3163 29.403 43.3387C29.2912 43.3611 29.1761 43.3612 29.0642 43.3389C28.9876 43.3237 28.9137 43.2981 28.8443 43.2631L22.4657 36.9433C22.465 36.9427 22.4643 36.942 22.4636 36.9413C22.2266 36.7033 22.1997 36.5152 22.21 36.3791C22.2236 36.2014 22.3201 35.9712 22.5228 35.7686C22.7255 35.566 22.9548 35.4705 23.1304 35.4574C23.2644 35.4474 23.4512 35.4739 23.6887 35.713L23.6935 35.7178L27.8065 39.8218L29.1007 41.1132L30.1143 39.5917L42.1914 21.4641L32.706 38.8422ZM43.771 6.99142C42.6451 5.43897 41.1941 4.1448 39.5145 3.20202C37.525 2.08526 35.2816 1.49913 33 1.5L43.771 6.99142ZM43.771 6.99142C45.6659 6.6896 47.6081 6.80069 49.4633 7.32226C51.6599 7.93978 53.6606 9.11192 55.2733 10.726C56.8878 12.3395 58.06 14.3413 58.6771 16.5389C59.1978 18.3937 59.3084 20.3351 59.0064 22.2293C60.559 23.3547 61.8534 24.8054 62.7965 26.4847C63.9138 28.4742 64.5005 30.7178 64.5 32.9996L43.771 6.99142ZM43.7689 59.0094C45.664 59.3123 47.6067 59.2022 49.4625 58.6816C51.6609 58.0648 53.6635 56.8928 55.2778 55.2782C56.892 53.6636 58.0636 51.6607 58.6799 49.4623C59.2 47.6069 59.3097 45.6649 59.0068 43.7704C60.5592 42.645 61.8535 41.1945 62.7965 39.5153C63.9138 37.5258 64.5005 35.2822 64.5 33.0004L43.7689 59.0094ZM32.9994 1.5C28.5693 1.50021 24.6442 3.66566 22.2298 6.99348C20.3354 6.69102 18.3936 6.80116 16.5385 7.32157C14.3405 7.93813 12.3382 9.10984 10.724 10.724C9.10984 12.3382 7.93813 14.3405 7.32157 16.5385C6.8012 18.3935 6.69103 20.3352 6.99341 22.2294C5.44091 23.3549 4.14656 24.8054 3.2035 26.4847C2.08609 28.4743 1.49945 30.718 1.5 33L32.9994 1.5Z" fill="#131313" stroke="white" stroke-width="3"/>
</svg>

          <div tw="flex flex-col flex-1 py-10">
            <div
              tw="flex text-xl uppercase font-bold tracking-tight"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              {values.type}
            </div>
            <div
              tw="flex leading-[1.1] text-[80px] font-bold"
              style={{
                fontFamily: "Cal Sans",
                fontWeight: "bold",
                marginLeft: "-3px",
                fontSize,
              }}
            >
              {heading}
            </div>
          </div>
          <div tw="flex items-center w-full justify-between">

            <div
              tw="flex items-center text-2xl"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              Written by Matt O Brien</div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontRegular,
            weight: 400,
            style: "normal",
          },
          {
            name: "Cal Sans",
            data: fontBold,
            weight: 700,
            style: "normal",
          },
        ],
      }
    )
  } catch (error) {
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
