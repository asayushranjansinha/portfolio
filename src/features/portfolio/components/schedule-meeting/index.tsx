import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/shared/Panel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { USER } from "@/config/user";
import { CalendarDays, ExternalLink } from "lucide-react";

export function ScheduleMeetingSection() {
  const bookingUrl = USER.calendarBookingUrl;

  if (!bookingUrl) return null;

  return (
    <section
      id="schedule-meeting"
      className="max-w-screen overflow-x-hidden px-2 scroll-mt-24"
    >
      <Panel className="mx-auto md:max-w-7xl overflow-hidden">
        <PanelHeader>
          <PanelTitle className="flex items-center gap-2">
            <CalendarDays className="size-6 text-primary" />
            Schedule a Meeting
          </PanelTitle>
          <PanelDescription>
            Pick a time that works for you. Let's discuss your project or
            potential collaboration.
          </PanelDescription>
        </PanelHeader>

        <Separator className="bg-edge" />

        <PanelContent>
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-8">
            <div className="max-w-2xl space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight">
                Let's connect over a call
              </h3>
              <p className="text-muted-foreground text-pretty">
                Looking to hire, collaborate, or just chat about tech? Pick a
                time that works for you and let's make it happen.
              </p>
            </div>

            <Button asChild size="lg" className="px-8 text-lg font-medium">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <CalendarDays className="size-5" />
                View Availability
                <ExternalLink className="size-4 opacity-50" />
              </a>
            </Button>
          </div>
        </PanelContent>
      </Panel>
    </section>
  );
}
