import {
  GlobeIcon,
  MapPinIcon
} from "lucide-react";

import { Panel, PanelContent } from "@/components/shared/Panel";
import { CurrentLocalTimeItem } from "./CurrentLocalTime";
import { EmailItem } from "./EmailItem";
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./IntroItem";
import { JobItem } from "./JobItem";
import { PhoneItem } from "./PhoneItem";

import { USER } from "@/config/user";
import { urlToName } from "@/utils/url";
import { CurrentOnlineStatusItem } from "./CurrentOnlineStatusItem";

export function OverviewSection() {
  return (
    <section id="overview" className="px-2 scroll-mt-24">
      <Panel className="max-w-7xl mx-auto">
        <h2 className="sr-only">Overview</h2>

        <PanelContent className="space-y-2.5">
          <JobItem
            title={USER.jobs[0].title}
            company={USER.jobs[0].company}
            website={USER.jobs[0].website}
          />

          <div className="grid gap-x-12 gap-y-2.5 sm:grid-cols-2">
            <IntroItem>
              <IntroItemIcon>
                <MapPinIcon />
              </IntroItemIcon>
              <IntroItemContent>
                <IntroItemLink
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    USER.address
                  )}`}
                  aria-label={`Location: ${USER.address}`}
                >
                  {USER.address}
                </IntroItemLink>
              </IntroItemContent>
            </IntroItem>

            {/* Current Local Time */}
            <CurrentLocalTimeItem timeZone={USER.timeZone} />

            {/* Current Online Status */}
            <CurrentOnlineStatusItem />

            <PhoneItem phoneNumber={USER.phoneNumber} />
            <EmailItem email={USER.email} />

            <IntroItem>
              <IntroItemIcon>
                <GlobeIcon />
              </IntroItemIcon>
              <IntroItemContent>
                <IntroItemLink
                  href={USER.website}
                  aria-label={`Personal website: ${urlToName(USER.website)}`}
                >
                  {urlToName(USER.website)}
                </IntroItemLink>
              </IntroItemContent>
            </IntroItem>
          </div>
        </PanelContent>
      </Panel>
    </section>
  );
}
