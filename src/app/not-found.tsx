import { NotFound as PageNotFound } from "@/components/shared/NotFound";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return <PageNotFound className="h-screen" />;
}