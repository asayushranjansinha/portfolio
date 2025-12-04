import { format } from "date-fns";
import { PinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import type { Post } from "@/features/blogs/types/post";
import { cn } from "@/lib/utils";

export function PostItem({
  post,
  shouldPreloadImage,
  className,
}: {
  post: Post;
  shouldPreloadImage?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group/post flex flex-col gap-2 p-2 transition-all duration-300 ease-out",
        "hover:bg-accent2 hover:shadow-sm hover:-translate-y-px",
        className
      )}
    >
      {post.metadata.image && (
        <AspectRatio
          ratio={1200 / 630}
          className="relative select-none shadow-none group-hover/post:shadow-sm transition-shadow"
        >
          {post.metadata.image ? (
            <Image
              src={post.metadata.image}
              alt={post.metadata.title}
              fill
              quality={100}
              priority={shouldPreloadImage}
              unoptimized
              className="object-cover transition-all duration-500 ease-out opacity-[0.85]
          group-hover/post:opacity-100"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-4xl text-muted-foreground">
                {post.metadata.icon}
              </span>
            </div>
          )}

          {/* Pinned icon (top-right) */}
          {post.metadata.pinned && (
            <span className="absolute top-1.5 right-1.5 flex h-6 w-6 items-center justify-center bg-secondary opacity-[0.85] transition-all duration-300 group-hover/post:opacity-100 group-hover/post:scale-110">
              <PinIcon className="h-4 w-4 rotate-45 text-secondary-foreground" />
              <span className="sr-only">Pinned</span>
            </span>
          )}

          {/* New tag (top-left) */}
          {post.metadata.new && (
            <Badge className="absolute top-1.5 left-1.5 bg-blue-700 text-white text-[10px] font-semibold uppercase">
              ✦ New
            </Badge>
          )}
        </AspectRatio>
      )}

      <div
        className="flex flex-col gap-1 p-2 opacity-[0.85] transition-all duration-300 ease-out 
        group-hover/post:opacity-100 group-hover/post:-translate-y-1 
        group-hover/post:shadow-none"
      >
        <h3 className="text-lg leading-snug font-medium flex items-center">
          <span
            className="block opacity-[0.85] transition-all duration-300 
        group-hover/post:opacity-100 group-hover/post:translate-y-px
        line-clamp-2!"
          >
            {post.metadata.title}
          </span>
        </h3>

        <dd className="text-sm text-muted-foreground">
          <time
            dateTime={new Date(post.metadata.createdAt).toISOString()}
            className="opacity-[0.85] transition-all duration-300 
             group-hover/post:opacity-100 group-hover/post:translate-x-px"
          >
            {format(new Date(post.metadata.createdAt), "dd.MM.yyyy")}
          </time>
        </dd>
      </div>
    </Link>
  );
}
