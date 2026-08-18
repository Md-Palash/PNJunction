import Image from "next/image";
import Link from "next/link";
import type { Topic } from "@/lib/data";

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  return (
    <Link href={`/topics/${topic.id}`} className="pn-card group block overflow-hidden rounded-lg2">
      <div className="aspect-[4/3] overflow-hidden border-b border-borderc">
        <Image
          src={topic.image}
          alt=""
          width={640}
          height={480}
          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
        />
      </div>
      <div className="px-5 pb-[22px] pt-[18px]">
        <h3 className="mb-1 text-[17px] font-bold">{topic.name}</h3>
        <p className="text-[13.5px] leading-relaxed text-inkSoft">{topic.tag}</p>
      </div>
    </Link>
  );
}
