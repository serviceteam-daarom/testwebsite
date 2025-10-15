import { Mail } from 'lucide-react';

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f7f3] text-[#4a4237]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[#ede7db] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#e0e4d6] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#fffdfa]/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-14 px-6 py-16 text-center sm:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#d9d3c6] bg-white/80 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#897c67] shadow-sm">
          FoutGebouwd.nl
        </span>

        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            We bouwen rustig en goed aan FoutGebouwd.nl
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#6a5f4c] sm:text-lg">
            Terwijl we achter de schermen de puntjes op de i zetten, werken we aan een platform dat bewoners van Groningen helpt
            hun verhalen over versterking, herstel en hoop te delen.
          </p>
        </div>

        <div className="w-full max-w-3xl space-y-6 rounded-[28px] border border-[#e3e0d7] bg-white/80 p-8 text-left shadow-[0_25px_45px_-25px_rgba(98,86,63,0.35)] backdrop-blur-sm sm:p-10">
          <h2 className="text-lg font-semibold sm:text-xl">Ons doel</h2>
          <p className="text-sm leading-relaxed text-[#6a5f4c] sm:text-base">
            We bouwen aan een thuisbasis voor betrokken bewoners, professionals en initiatiefnemers die willen leren van elkaar
            en samen willen werken aan een sterker Groningen.
          </p>
          <ul className="list-disc space-y-3 pl-5 text-sm text-[#6a5f4c] sm:text-base">
            <li>Bewonersverhalen zichtbaar maken met respect voor hun ervaring.</li>
            <li>Heldere uitleg bieden over het proces van versterken en herstellen.</li>
            <li>Een community laten groeien die elkaar ondersteunt en vooruit helpt.</li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="mailto:info@foutgebouwd.nl"
            className="inline-flex items-center gap-2 rounded-full bg-[#4a4237] px-7 py-3 text-sm font-semibold text-[#f6f7f3] shadow-lg shadow-[#c9c1b1]/40 transition hover:bg-[#433c32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a4237]"
          >
            <Mail className="h-4 w-4" />
            Mail ons alvast
          </a>
          <p className="max-w-sm text-sm text-[#6a5f4c] sm:text-base">
            Liever direct mailen?{' '}
            <a
              href="mailto:info@foutgebouwd.nl"
              className="font-semibold text-[#4a4237] underline decoration-[#c8c1b3] underline-offset-4 transition hover:decoration-[#4a4237]"
            >
              info@foutgebouwd.nl
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
