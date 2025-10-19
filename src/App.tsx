import logo from './assets/foutgebouwd-logo.svg';

const goalPoints = [
  'We bouwen aan een thuisbasis voor betrokken bewoners, professionals en initiatiefnemers die willen leren van elkaar en samen werken aan een sterker Groningen.',
  'We maken bewonersverhalen zichtbaar met respect voor ieders ervaring en beleving.',
  'We geven heldere uitleg over het proces van versterken en herstellen, zodat iedereen weet waar hij of zij aan toe is.',
  'We laten zien wat er echt speelt, delen open en eerlijk onze ervaringen en geven samen tegengas waar beleid tekortschiet.',
  'We versterken het noaberschap: een netwerk van mensen die naar elkaar omkijken, elkaar ondersteunen en samen opkomen voor een rechtvaardig Groningen.',
];

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#faf3e0] text-[#231b11]">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-36 -top-32 h-80 w-80 rounded-full bg-[#f9da7d] blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-[#f5c154]/60 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#f0d18d]/40 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 py-10 sm:py-16 md:px-12">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#3a2b1c]/15 bg-white/70 shadow-md backdrop-blur-sm">
              <img src={logo} alt="Logo van FoutGebouwd.nl" className="h-10 w-10" />
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#3a2b1c]/15 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#6f583d] shadow-sm backdrop-blur-sm">
              FoutGebouwd.nl
            </span>
          </div>
        </header>

        <section className="grid flex-1 gap-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="flex flex-col justify-center gap-10">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-[1.1] text-[#231b11] sm:text-5xl md:text-6xl">
                We bouwen rustig en goed aan FoutGebouwd.nl
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[#4d3a26] sm:text-lg">
                Terwijl we achter de schermen de puntjes op de i zetten, werken we aan een platform dat bewoners van Groningen helpt hun verhalen over versterking, herstel en ervaring te delen.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#3a2b1c]/10 bg-white/80 p-6 shadow-[0_25px_55px_-30px_rgba(67,47,20,0.45)] backdrop-blur">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#f7d37e]/60" aria-hidden />
              <div className="relative space-y-5 text-left text-[#3a2b1c]">
                <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7a5a2e]">Ons doel</h2>
                <ul className="space-y-3 text-sm leading-relaxed text-[#4d3a26] sm:text-base">
                  {goalPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[#e6b74f]" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="flex flex-col justify-center gap-10">
            <div className="space-y-4 rounded-[32px] border border-[#3a2b1c]/15 bg-white/80 p-8 shadow-[0_35px_80px_-40px_rgba(67,47,20,0.55)] backdrop-blur text-left text-[#3a2b1c]">
              <p className="text-sm leading-relaxed text-[#4d3a26] sm:text-base">
                Heb jij iets meegemaakt rondom versterken of herstel in Groningen? Deel je verhaal met ons via{' '}
                <a
                  href="mailto:info@foutgebouwd.nl"
                  className="font-semibold text-[#3a2b1c] underline decoration-[#f1c05a] underline-offset-6 transition hover:decoration-[#3a2b1c]"
                >
                  info@foutgebouwd.nl
                </a>
                . Samen maken we zichtbaar wat er echt speelt. 💚
              </p>
            </div>

            <div className="rounded-[32px] border border-[#3a2b1c]/15 bg-white/80 p-8 text-left text-sm leading-relaxed text-[#4d3a26] shadow-[0_35px_80px_-40px_rgba(67,47,20,0.55)] backdrop-blur sm:text-base">
              <p>
                FoutGebouwd.nl is een site waarin we de gedeelde ervaringen uit Groningen centraal zetten. Het is gebouwd met knipoog naar{' '}
                <a
                  href="https://goudgebouwd.nl"
                  className="font-semibold text-[#3a2b1c] underline decoration-[#f1c05a] underline-offset-6 transition hover:decoration-[#3a2b1c]"
                >
                  Goudgebouwd.nl
                </a>
                .
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default App;
