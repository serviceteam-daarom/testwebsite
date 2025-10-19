import logo from './assets/Naamloos (9).png';

const goals = [
  'We bouwen aan een thuisbasis voor betrokken bewoners, professionals en initiatiefnemers die willen leren van elkaar en samen werken aan een sterker Groningen.',
  'We maken bewonersverhalen zichtbaar met respect voor ieders ervaring en beleving.',
  'We geven tips en heldere uitleg over het proces van versterken en herstellen.',
  'We delen eerlijk onze ervaringen en geven samen tegengas waar beleid tekortschiet.',
  'We versterken het noaberschap: een netwerk van mensen die elkaar ondersteunen en opkomen voor een rechtvaardig Groningen.',
];

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-6 text-neutral-800 bg-white">
      {/* Logo bovenaan */}
      <header className="flex flex-col items-center mt-8 space-y-6">
        <img
          src={logo}
          alt="FoutGebouwd logo"
          className="h-20 w-auto md:h-28 object-contain"
        />
   </header>

      {/* Titel en intro */}
      <header className="fade-in space-y-4 text-center max-w-3xl">
        <h1 className="text-3xl font-bold md:text-5xl">
          We bouwen rustig en goed aan FoutGebouwd.nl
        </h1>
        <p className="text-lg leading-relaxed md:text-xl">
          Terwijl we achter de schermen de puntjes op de i zetten, werken we aan
          een platform dat bewoners van Groningen helpt hun verhalen over
          versterking, herstel en ervaring te delen.
        </p>
      </header>

      {/* Ons doel */}
      <section className="fade-in w-full max-w-3xl rounded-2xl bg-white p-8 shadow-md">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-amber-800">
          Ons doel
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
          {goals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="fade-in space-y-4 text-center">
        <p className="text-lg max-w-2xl mx-auto">
          Heb jij iets meegemaakt rondom versterken of herstel in Groningen? Deel
          je verhaal met ons via{' '}
          <a
            href="mailto:info@foutgebouwd.nl"
            className="font-semibold text-amber-700 underline hover:text-amber-900"
          >
            info@foutgebouwd.nl
          </a>
          .
        </p>

        <p className="text-sm text-neutral-600">
          Gebouwd met een knipoog naar{' '}
          <a
            href="https://goudgebouwd.nl"
            target="_blank"
            rel="noreferrer"
            className="text-amber-700 underline hover:text-amber-900"
          >
            Goudgebouwd.nl
          </a>
          .
        </p>
      </section>
    </main>
  );
}
