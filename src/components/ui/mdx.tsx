import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeExternalLinks from "rehype-external-links";
import type { LineElement } from "rehype-pretty-code";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Code, Heading } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { CopyButton } from "@/components/shared/CopyButton";
import { YouTubeEmbed } from "@/components/shared/Embed";
import Link from "next/link";

// MDX Component mappings
const components: MDXRemoteProps["components"] = {
  // Headings
  h1: (props: React.ComponentProps<"h1">) => <Heading as="h1" {...props} />,
  h2: (props: React.ComponentProps<"h2">) => <Heading as="h2" {...props} />,
  h3: (props: React.ComponentProps<"h3">) => <Heading as="h3" {...props} />,
  h4: (props: React.ComponentProps<"h4">) => <Heading as="h4" {...props} />,
  h5: (props: React.ComponentProps<"h5">) => <Heading as="h5" {...props} />,
  h6: (props: React.ComponentProps<"h6">) => <Heading as="h6" {...props} />,

  // Tables
  table: Table,
  thead: TableHeader,
  tbody: TableBody,
  tr: TableRow,
  th: TableHead,
  td: TableCell,

  //   Links
  a: ({ className, href, ...props }: React.ComponentProps<typeof Link>) => (
    <Link {...props} href={href} className={cn("link!", className)} />
  ),

  // Code blocks
  figure({ className, ...props }: React.ComponentProps<"figure">) {
    const hasPrettyCode = "data-rehype-pretty-code-figure" in props;
    return (
      <figure
        className={cn(hasPrettyCode && "not-prose", className)}
        {...props}
      />
    );
  },

  pre({
    __rawString__,
    ...props
  }: React.ComponentProps<"pre"> & {
    __rawString__?: string;
  }) {
    return (
      <>
        <pre {...props} />
        {__rawString__ && (
          <CopyButton
            className="absolute top-2 right-2"
            value={__rawString__}
          />
        )}
      </>
    );
  },

  code: Code,

  // YouTube embeds
  YouTubeEmbed,
};

// Rehype plugin to extract raw code strings
const rehypeExtractRawCode = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl?.tagName === "code") {
        node.__rawString__ = codeEl.children?.[0]?.value;
      }
    }
  });
};

// Rehype plugin to pass raw strings to pre elements
const rehypePassRawStrings = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "figure") {
      if (!("data-rehype-pretty-code-figure" in node.properties)) {
        return;
      }

      const preElement = node.children.at(-1);
      if (preElement?.tagName === "pre") {
        preElement.properties["__rawString__"] = node.__rawString__;
      }
    }
  });
};

// MDX options configuration
const options: MDXRemoteProps["options"] = {
  mdxOptions: {
    remarkPlugins: [
      remarkGfm, // GitHub Flavored Markdown support
    ],
    rehypePlugins: [
      // External links open in new tab
      [
        rehypeExternalLinks,
        { target: "_blank", rel: "nofollow noopener noreferrer" },
      ],

      // Add IDs to headings for anchor links
      rehypeSlug,

      // Extract raw code for copy functionality
      rehypeExtractRawCode,

      // Pretty code syntax highlighting
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light",
          },
          keepBackground: false,
          onVisitLine(node: LineElement) {
            // Prevent lines from collapsing and allow empty lines to be copied
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
        },
      ],

      // Pass raw strings to pre elements
      rehypePassRawStrings,
    ],
  },
};

// Main MDX component
interface MDXProps {
  code: string;
}

export function MDX({ code }: MDXProps) {
  return <MDXRemote source={code} components={components} options={options} />;
}
