import logo from './assets/foutgebouwd-logo.svg';

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f7f3] text-[#4a4237]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[#ede7db] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#e0e4d6] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#fffdfa]/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-14 px-6 py-16 text-center sm:px-10">
        <div className="flex flex-col items-center gap-4">
          <img src={logo} alt="Logo van FoutGebouwd.nl" className="h-20 w-20" />
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d9d3c6] bg-white/80 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#897c67] shadow-sm">
            FoutGebouwd.nl
          </span>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            We bouwen rustig en goed aan FoutGebouwd.nl
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#6a5f4c] sm:text-lg">
            Terwijl we achter de schermen de puntjes op de i zetten, werken we aan een platform dat bewoners van Groningen helpt
            hun verhalen over versterking, herstel en ervaring te delen.
          </p>
        </div>

        <div className="w-full max-w-3xl space-y-6 rounded-[28px] border border-[#e3e0d7] bg-white/80 p-8 text-left shadow-[0_25px_45px_-25px_rgba(98,86,63,0.35)] backdrop-blur-sm sm:p-10">
          <h2 className="text-lg font-semibold sm:text-xl">Ons doel</h2>
          <div className="space-y-4 text-sm leading-relaxed text-[#6a5f4c] sm:text-base">
            <p>
              We bouwen aan een thuisbasis voor betrokken bewoners, professionals en initiatiefnemers die willen leren van elkaar
              en samen werken aan een sterker Groningen.
            </p>
            <p>We maken bewonersverhalen zichtbaar met respect voor ieders ervaring en beleving.</p>
            <p>
              We geven heldere uitleg over het proces van versterken en herstellen, zodat iedereen weet waar hij of zij aan toe
              is.
            </p>
            <p>
              We laten zien wat er echt speelt, delen open en eerlijk onze ervaringen en geven samen tegengas waar beleid
              tekortschiet.
            </p>
            <p>
              We versterken het noaberschap: een netwerk van mensen die naar elkaar omkijken, elkaar ondersteunen en samen
              opkomen voor een rechtvaardig Groningen.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <p className="max-w-sm text-sm text-[#6a5f4c] sm:text-base">
            Heb jij iets meegemaakt rondom versterken of herstel in Groningen? Deel je verhaal met ons via{' '}
            <a
              href="mailto:info@foutgebouwd.nl"
              className="font-semibold text-[#4a4237] underline decoration-[#c8c1b3] underline-offset-4 transition hover:decoration-[#4a4237]"
            >
              info@foutgebouwd.nl
            </a>
            . Samen maken we zichtbaar wat er echt speelt. 💚
          </p>
        </div>

        <p className="max-w-2xl text-sm text-[#6a5f4c] sm:text-base">
          FoutGebouwd.nl is een site waarin we de gedeelde ervaringen uit Groningen centraal zetten. Het is gebouwd met knipoog
          naar{' '}
          <a
            href="https://goudgebouwd.nl"
            className="font-semibold text-[#4a4237] underline decoration-[#c8c1b3] underline-offset-4 transition hover:decoration-[#4a4237]"
          >
            Goudgebouwd.nl
          </a>
          .
        </p>
      </div>
    </main>
  );
}

export default App;
