import { ImageZoom } from "@/components/ui/image-zoom";

export function YouTubeEmbed({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  return (
    <div className="relative">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

export function FramedImage({
  canZoom = true,
  ...props
}: React.ComponentProps<"img"> & {
  canZoom?: boolean;
}) {
  // eslint-disable-next-line jsx-a11y/alt-text
  const image = <img {...props} />;

  return (
    <figure className="relative">
      {canZoom ? <ImageZoom>{image}</ImageZoom> : image}
    </figure>
  );
}
