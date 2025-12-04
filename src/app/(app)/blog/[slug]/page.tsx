import { getTableOfContents } from "fumadocs-core/content/toc";
import { notFound } from "next/navigation";

import { Panel, PanelContent, PanelHeader } from "@/components/shared/Panel";
import { InlineTOC } from "@/components/ui/inline-toc";
import { MDX } from "@/components/ui/mdx";
import { ProseMono } from "@/components/ui/typography";
import { BlogHeader } from "@/features/blogs/components/BlogHeader";
import { getPostBySlug } from "@/features/blogs/data/posts";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const { title, description } = post.metadata;

  return {
    title,
    description,
  };
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const toc = getTableOfContents(post.content);

  return (
    <div className="w-full">
      <Panel className="max-w-7xl mx-auto border-b-0">
        <PanelHeader>
          <BlogHeader post={post.metadata} />
        </PanelHeader>

        <PanelContent className="space-y-3">
          <InlineTOC items={toc}>Table of Contents</InlineTOC>
          <ProseMono>
            <div>
              <MDX code={post.content} />
            </div>
          </ProseMono>
        </PanelContent>
      </Panel>
    </div>
  );
};
export default BlogPage;
