import {
  Panel,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelTitleSup
} from "@/components/shared/Panel";
import { getAllPosts } from "@/features/blogs/data/posts";
import { PostItem } from "@/features/portfolio/components/blogs/PostItem";
import { cn } from "@/lib/utils";

export function BlogsSection() {
  const allPosts = getAllPosts();

  return (
    <section id="blogs" className="px-2 scroll-mt-24">
      <Panel className="max-w-7xl mx-auto">
        <PanelHeader>
          <PanelTitle>
            Blogs
            <PanelTitleSup>({allPosts.length})</PanelTitleSup>
          </PanelTitle>
          <PanelDescription>
            Thoughts, tutorials, and updates I've shared online.
          </PanelDescription>
        </PanelHeader>
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x lg:divide-x divide-edge">
            {allPosts.slice(0, 6).map((post, index) => (
              <PostItem
                key={post.slug}
                post={post}
                className={cn(
                  index >= 2 && "sm:border-t",
                  index >= 3 && "lg:border-t",
                  index === 2 && "lg:border-t-0"
                )}
              />
            ))}
          </div>
        </div>

        {/* TODO: ADD OPTIONAL BLOGS PAGE */}
        {/* <PanelFooter className="flex justify-center">
          <Button variant="outline" asChild disabled={allPosts.length < 6}>
            <Link href="/blog">
              All Posts
              <ArrowRightIcon />
            </Link>
          </Button>
        </PanelFooter> */}
      </Panel>
    </section>
  );
}
