import { PanelDescription, PanelTitle } from "@/components/shared/Panel";
import { Badge } from "@/components/ui/badge";
import { PostMetadata } from "@/features/blogs/types/post";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ArrowLeftIcon, Calendar } from "lucide-react";
import Link from "next/link";

export function BlogHeader({ post }: { post: PostMetadata }) {
  const {
    title,
    description,
    category,
    new: isNew,
    createdAt,
    updatedAt,
  } = post;

  return (
    <div
      className={cn(
        "group/blog-header",
        "transition-all duration-300",
        "space-y-1.5"
      )}
    >
      {/* Top Row: Category + New */}
      <div className="flex flex-col space-y-1">
        <div>
          <Link
            aria-label="Go back to blogs"
            href="/blog"
            className="h-fit rounded-lg text-sm font-mono text-muted-foreground flex items-center hover:underline underline-offset-4 hover:text-foreground transition-all duration-300"
          >
            <ArrowLeftIcon className="size-4 mr-1" />
            Blogs
          </Link>
        </div>
        <div className="flex items-center space-x-1">
          {category && (
            <Badge
              variant="outline"
              className="font-mono border-muted-foreground/20 text-muted-foreground"
            >
              {category}
            </Badge>
          )}

          {isNew && <Badge className="bg-blue-600 text-white">NEW</Badge>}
        </div>
      </div>

      {/* Title Area */}
      <PanelTitle
        className={cn(
          "text-3xl sm:text-4xl font-extrabold tracking-tight font-mono leading-tight",
          "text-foreground"
        )}
      >
        {title}
      </PanelTitle>
      {/* Description */}
      {description && (
        <PanelDescription className={cn("max-w-none text-base")}>
          {description}
        </PanelDescription>
      )}

      {/* Metadata */}
      <div
        className={cn(
          "relative pl-6 mt-6 space-y-1 text-sm font-mono text-muted-foreground",
          "before:absolute before:left-2 before:top-0 before:h-full before:w-px before:bg-edge"
        )}
      >
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>Published: {format(new Date(createdAt), "d, MMMM yyyy")}</span>
        </div>
      </div>
    </div>
  );
}
