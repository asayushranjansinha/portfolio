import { Markdown } from "@/components/shared/MarkdownView";
import { ProseMono } from "@/components/ui/typography";
import { USER } from "@/config/user";

export const Bio = () => {
  return (
    <ProseMono>
      <Markdown>{USER.about}</Markdown>
    </ProseMono>
  );
};
