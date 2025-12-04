import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/marquee";

import { TESTIMONIALS_1, TESTIMONIALS_2 } from "../../data/testimonials";
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelDescription,
} from "@/components/shared/Panel";
import { TestimonialItem } from "./TestimonialItem";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-2 scroll-mt-24">
      <Panel className="before:z-11 after:z-10 [&_.rfm-initial-child-container]:items-stretch! [&_.rfm-marquee]:items-stretch! max-w-7xl mx-auto">
        <PanelHeader>
          <PanelTitle>Testimonials</PanelTitle>
          <PanelDescription>Feedback from people I’ve worked with.</PanelDescription>
        </PanelHeader>

        <Marquee className="border-b">
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />

          <MarqueeContent>
            {TESTIMONIALS_1.slice()
              .sort((a, b) => a.authorName.localeCompare(b.authorName))
              .map((item) => (
                <MarqueeItem
                  key={item.url}
                  className="mx-0 h-full w-xs border-r border-edge"
                >
                  <TestimonialItem {...item} />
                </MarqueeItem>
              ))}
          </MarqueeContent>
        </Marquee>

        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />

          <MarqueeContent direction="right">
            {TESTIMONIALS_2.slice()
              .sort((a, b) => a.authorName.localeCompare(b.authorName))
              .map((item) => (
                <MarqueeItem
                  key={item.url}
                  className="mx-0 h-full w-xs border-r border-edge"
                >
                  <TestimonialItem {...item} />
                </MarqueeItem>
              ))}
          </MarqueeContent>
        </Marquee>
      </Panel>
    </section>
  );
}
