import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";
import { ArrowIcon } from "./icons";
import type { LatestItem } from "@/lib/data";

interface ContentCardProps {
  item: LatestItem;
}

export default function ContentCard({ item }: ContentCardProps) {
  return (
    <Link
      href="#"
      className="pn-card group flex items-stretch gap-4 overflow-hidden rounded-md2 p-4 sm:flex-row flex-col"
    >
      <div className="w-full flex-shrink-0 overflow-hidden rounded-[14px] sm:aspect-auto sm:w-[132px] aspect-video">
        <Image
          src={item.image}
          alt=""
          width={264}
          height={264}
          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center px-1 py-1.5">
        <div className="mb-2.5 flex flex-wrap gap-2">
          <Badge tone="strong">{item.topic}</Badge>
          <Badge tone="soft">{item.type}</Badge>
        </div>
        <h3 className="mb-2 text-[16px] font-bold leading-snug">{item.title}</h3>
        <p className="text-[12.5px] text-inkSoft">{item.meta}</p>
      </div>

      <div className="hidden flex-shrink-0 items-center pr-1.5 text-inkSoft opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-accentStrong group-hover:opacity-100 -translate-x-1 sm:flex">
        <ArrowIcon />
      </div>
    </Link>
  );
}
