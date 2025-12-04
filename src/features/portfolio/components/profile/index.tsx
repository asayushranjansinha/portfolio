import { USER } from "@/config/user";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FlipSentences } from "@/components/ui/flip-sentences";
import { PronounceMyName } from "@/features/portfolio/components/profile/PronounceMyName";

import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/shared/Panel";

export const ProfileSection = () => {
  return (
    <section id="profile" className="px-2 scroll-mt-24">
      <Panel className="mx-auto md:max-w-7xl">
        <PanelHeader className="p-4">
          <PanelTitle>{USER.jobTitle}</PanelTitle>
          <PanelDescription>
            Developer, builder, and always shipping something new.
          </PanelDescription>
        </PanelHeader>

        <PanelContent className="p-0">
          <div className="w-full mx-auto flex divide-x divide-edge select-none">
            {/* Avatar */}
            <div className="p-0.5">
              <Avatar className="size-32 sm:size-40 rounded-none">
                <AvatarImage
                  className="size-32 sm:size-40 rounded-none"
                  src={USER.avatar}
                  fetchPriority="high"
                  alt={`${USER.displayName}'s avatar`}
                />
                <AvatarFallback className="size-32 sm:size-40 rounded-none">
                  {USER.displayName[0]}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Profile Right Block */}
            <div className="flex flex-1 flex-col">
              {/* Code snippet */}
              <div className="flex grow items-end pb-1 pl-4">
                <div className="font-mono text-xs max-sm:hidden">
                  <pre className="whitespace-pre leading-4">
                    <code>
                      <span className="text-amber-500">console</span>
                      <span className="text-white">.</span>
                      <span className="text-blue-500">log</span>
                      <span className="text-white">("</span>
                      <span className="text-emerald-400">Hello, world!</span>
                      <span className="text-white">")</span>
                      {"\n"}
                      <span className="text-zinc-500">
                        // where it all started
                      </span>
                    </code>
                  </pre>
                </div>
              </div>

              {/* Name + Flip sentences */}
              <div className="border-t border-edge pt-1">
                <div className="flex items-center gap-2 pl-4">
                  <h1 className="-translate-y-px text-3xl font-semibold">
                    {USER.displayName}
                  </h1>

                  {USER.namePronunciationUrl && (
                    <PronounceMyName
                      namePronunciationUrl={USER.namePronunciationUrl}
                    />
                  )}
                </div>

                <div className="h-12.5 border-t border-edge py-1 pl-4 sm:h-9 mt-1">
                  <FlipSentences
                    className="font-mono text-sm text-balance"
                    variants={{
                      initial: { y: -10, opacity: 0 },
                      animate: { y: -1, opacity: 1 },
                      exit: { y: 10, opacity: 0 },
                    }}
                  >
                    {USER.flipSentences.map((sentence, i) => (
                      <span
                        key={i}
                        className={
                          [
                            "text-red-400",
                            "text-blue-400",
                            "text-green-400",
                            "text-yellow-400",
                            "text-purple-400",
                          ][i % 5]
                        }
                      >
                        {sentence}
                      </span>
                    ))}
                  </FlipSentences>
                </div>
              </div>
            </div>
          </div>
        </PanelContent>
      </Panel>
    </section>
  );
};
