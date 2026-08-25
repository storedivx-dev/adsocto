import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, PageHero } from "@/components/Ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "AdsOcto takes its name from the octopus — eight arms, one mind. A modern advertising network for global performance.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About AdsOcto"
        title="Named after the octopus. Built for reach."
        body="Octo comes from octopus: one brain, eight arms, total awareness of the water around it. That is how we treat demand and supply — connected, colorful, and hard to outmaneuver."
      />
      <section className="container-page grid items-center gap-10 pb-20 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] border border-white/10">
          <Image
            src="/hero-octopus.png"
            alt="AdsOcto octopus mascot"
            width={1280}
            height={720}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="space-y-5 text-muted leading-7">
          <p>
            Ad networks usually pick a cold, corporate look. We went the other
            way: violet ink, bioluminescent accents, and a mascot that actually
            means something. Each arm is a format. The head is the console.
          </p>
          <p>
            AdsOcto mixes the programmatic depth of classic pop networks, the
            partner-care posture of high-touch SSPs, and the playful energy of
            modern push platforms. The result is a place media buyers and
            publishers both want to open on Monday.
          </p>
          <p>
            We are setting up on <strong className="text-white">adsocto.com</strong>{" "}
            as a global performance network — not a local classifieds board, not
            a vanity landing page.
          </p>
          <ButtonLink href="/contact">Meet the team</ButtonLink>
        </div>
      </section>
    </div>
  );
}
