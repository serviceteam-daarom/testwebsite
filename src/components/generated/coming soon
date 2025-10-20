"use client";

import { motion } from "framer-motion";
import Navigation from "./Navigation";

export interface GoudGebouwdAboutPageProps {
  className?: string;
  onNavigate?: (page: "feed" | "map" | "index" | "about") => void;
}

export const GoudGebouwdAboutPage = (props: GoudGebouwdAboutPageProps) => {
  return (
    <div
      className={`relative min-h-screen bg-gradient-to-b from-[#f6f7f3] via-white to-[#f0f0eb] text-[#3d3a33] ${
        props.className ?? ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#d8f3dc,_transparent_60%)] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#fefae0,_transparent_55%)] opacity-80" />
      </div>

      <div className="relative z-10">
        <Navigation currentPage="about" onNavigate={props.onNavigate} />

        <main className="pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 lg:pb-32">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-6 sm:px-8 lg:px-12">
            <motion.section
              className="rounded-2xl border border-white/70 bg-white/80 p-8 shadow-lg backdrop-blur-sm sm:p-12"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col gap-6">
                <span className="inline-flex w-fit items-center justify-center rounded-full bg-[#4a7c59]/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#4a7c59]">
                  Coming soon
                </span>
                <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#3d3a33] sm:text-6xl lg:text-7xl">
                  We bouwen aan FoutGebouwd.nl
                </h1>
                <p className="max-w-3xl text-base leading-relaxed text-[#5c5c5c] sm:text-lg">
                  We werken hard aan deze site waar verhalen uit het Groningse versterkingsgebied een podium krijgen. We geven
                  bewoners een stem. Hier verzamelen we verhalen over schade, versterking en wat er misgaat in Groningen om van
                  elkaar te leren, te helpen en te steunen. Echte verhalen, vanuit noaberschap.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href="mailto:info@foutgebouwd.nl?subject=Houd%20me%20op%20de%20hoogte%20van%20FoutGebouwd"
                    className="inline-flex items-center justify-center rounded-full bg-[#4a7c59] px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#3c6549] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a7c59]"
                  >
                    Blijf op de hoogte
                  </a>
                  <button
                    type="button"
                    onClick={() => props.onNavigate?.("feed")}
                    className="inline-flex items-center justify-center rounded-full border border-[#4a7c59] px-6 py-3 text-base font-semibold text-[#4a7c59] transition hover:bg-[#4a7c59]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a7c59]"
                  >
                    Bekijk verhalen die al live zijn
                  </button>
                </div>
              </div>
            </motion.section>

            <motion.section
              className="grid gap-6 rounded-2xl border border-white/70 bg-white/80 p-8 shadow-lg backdrop-blur-sm md:grid-cols-3"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {[
                {
                  title: "Digitale verhalenkaart",
                  description:
                    "Een interactieve kaart die laat zien waar projecten zich bevinden en welke verhalen eraan verbonden zijn.",
                },
                {
                  title: "Bewoners centraal",
                  description:
                    "Persoonlijke ervaringen vormen de basis. We zorgen voor ruimte om te reageren en verhalen te delen.",
                },
                {
                  title: "Tegengeluid & dialoog",
                  description:
                    "We geven ruimte aan de verhalen die onder de oppervlakte blijven. Door bewoners, makers en betrokkenen samen te brengen, leggen we bloot wat echt speelt en wat beter kan.",
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-3 rounded-xl border border-[#e6e6e6] bg-white/90 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#3d3a33]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#5c5c5c] sm:text-base">{item.description}</p>
                </div>
              ))}
            </motion.section>

            <motion.section
              className="grid gap-6 rounded-2xl border border-white/70 bg-white/80 p-8 shadow-lg backdrop-blur-sm lg:grid-cols-[1.2fr_1fr]"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#3d3a33] sm:text-3xl">Roadmap naar lancering</h2>
                <div className="space-y-5">
                  {[
                    {
                      title: "Community-sessies",
                      description:
                        "We verzamelen verhalen en feedback van bewoners en partners zodat de nieuwe ervaring aansluit bij de praktijk.",
                    },
                    {
                      title: "Digitale proefomgeving",
                      description:
                        "Vanaf het voorjaar testen we de vernieuwde site met een selecte groep bewoners uit het versterkingsgebied.",
                    },
                    {
                      title: "Publieke lancering",
                      description:
                        "In juni openen we het platform voor iedereen die wil leren van bouwprojecten en ervaringen in Groningen.",
                    },
                  ].map((item, index) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4a7c59]/15 text-base font-semibold text-[#4a7c59]">
                        {(index + 1).toString().padStart(2, "0")}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-[#3d3a33]">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-[#5c5c5c] sm:text-base">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6 rounded-xl border border-[#e6e6e6] bg-[#4a7c59] p-6 text-white shadow-sm">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold leading-snug">Word onderdeel van de eerste preview</h3>
                  <p className="text-base leading-relaxed text-white/80">
                    Meld je aan voor de digitale preview en deel jouw feedback. Samen zorgen we dat de verhalen van Groningen goed
                    gehoord worden.
                  </p>
                </div>
                <a
                  href="mailto:info@foutgebouwd.nl?subject=Aanmelding%20preview%20FoutGebouwd"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-[#4a7c59] transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Meld me aan voor de preview
                </a>
              </div>
            </motion.section>

            <motion.section
              className="rounded-2xl border border-white/70 bg-white/80 p-8 shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-[#3d3a33] sm:text-3xl">Blijf in contact</h2>
                  <p className="text-[#5c5c5c] sm:text-lg">
                    FoutGebouwd is een initiatief van en voor bewoners. Heb je een verhaal dat je wilt delen? Laat het ons weten.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-[#e6e6e6] bg-white/90 p-5 shadow-sm">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a7a7a]">E-mail</h3>
                    <a
                      href="mailto:info@foutgebouwd.nl"
                      className="mt-2 inline-flex items-center text-lg font-semibold text-[#4a7c59] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a7c59]"
                    >
                      info@foutgebouwd.nl
                    </a>
                  </div>
                  <div className="rounded-xl border border-[#e6e6e6] bg-white/90 p-5 shadow-sm">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a7a7a]">
                      Geïnspireerd door
                    </h3>
                    <a
                      href="https://www.goudgebouwd.nl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center text-lg font-semibold text-[#4a7c59] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a7c59]"
                    >
                      www.goudgebouwd.nl
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </main>
      </div>
    </div>
  );
};
