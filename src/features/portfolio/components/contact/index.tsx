import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/shared/Panel";
import { Separator } from "@/components/ui/separator";
import { USER } from "@/config/user";
import { ContactForm } from "./ContactForm";
import { EmailItem } from "./EmailItem";
import { SocialLinks } from "@/features/portfolio/components/contact/SocialLinks";
import { SOCIAL_LINKS } from "@/config/social-links";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-screen overflow-x-hidden px-2 scroll-mt-24"
    >
      <Panel className="mx-auto md:max-w-7xl">
        <PanelHeader>
          <PanelTitle>Contact Me</PanelTitle>
          <PanelDescription>
            Let's talk — opportunities, collaboration, or just say hi.
          </PanelDescription>
        </PanelHeader>

        <Separator className="bg-edge" />

        <PanelContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column — text */}
            <div className="space-y-4 pr-2">
              <h3 className="text-xl font-medium leading-snug select-none">
                Always open to meaningful conversations!
              </h3>

              <p className="text-muted-foreground font-mono text-sm opacity-[0.85] select-none">
                Whether you want to discuss a project, have a question, or just
                want to connect — send a message. I read everything.
              </p>

              <p className="text-muted-foreground font-mono text-sm opacity-[0.85] select-none">
                You can also reach me directly at:
                <br />
                <EmailItem email={USER.email} />
              </p>

              <h4 className="text-lg font-semibold">Connect with me</h4>
              <SocialLinks links={SOCIAL_LINKS} />
            </div>

            {/* Right column — form */}
            <ContactForm />
          </div>
        </PanelContent>
      </Panel>
    </section>
  );
}
