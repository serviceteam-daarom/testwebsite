import logo from './assets/Logo foutgebouwd zonder pay-off.png';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white p-6 text-center">
      {/* Logo */}
      <img
        src={logo}
        alt="FoutGebouwd logo"
        className="h-20 w-auto md:h-28 mb-8 object-contain"
      />

      {/* Titel */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-pulse">
        Coming Soon – Fout Gebouwd
      </h1>

      {/* Intro */}
      <p className="text-lg max-w-2xl mb-10 leading-relaxed">
        We werken hard aan een platform voor bewoners van Groningen om hun
        verhalen over versterking, herstel en ervaring te delen.
      </p>

      {/* Ons doel */}
      <section className="max-w-3xl bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-10">
        <h2 className="text-amber-400 text-xl font-semibold uppercase tracking-wide mb-4">
          Ons doel
        </h2>
        <ul className="text-left list-disc space-y-2 pl-5 text-gray-200">
          <li>
            We bouwen aan een thuisbasis voor betrokken bewoners, professionals
            en initiatiefnemers die willen leren van elkaar en samen werken aan
            een sterker Groningen.
          </li>
          <li>
            We maken bewonersverhalen zichtbaar met respect voor ieders
            ervaring en beleving.
          </li>
          <li>
            We geven tips en heldere uitleg over het proces van versterken en
            herstellen.
          </li>
          <li>
            We delen eerlijk onze ervaringen en geven samen tegengas waar beleid
            tekortschiet.
          </li>
          <li>
            We versterken het noaberschap: een netwerk van mensen die elkaar
            ondersteunen en opkomen voor een rechtvaardig Groningen.
          </li>
        </ul>
      </section>

      {/* Contact */}
      <p className="text-lg mb-6 max-w-2xl">
        Heb jij iets meegemaakt rondom versterken of herstel in Groningen? Deel
        je verhaal met ons via{' '}
        <a
          href="mailto:info@foutgebouwd.nl"
          className="text-amber-400 underline hover:text-amber-500 transition"
        >
          info@foutgebouwd.nl
        </a>
        .
      </p>

      <p className="text-sm text-gray-400 mb-10">
        Gebouwd met een knipoog naar{' '}
        <a
          href="https://goudgebouwd.nl"
          target="_blank"
          rel="noreferrer"
          className="text-amber-400 underline hover:text-amber-500"
        >
          Goudgebouwd.nl
        </a>
        .
      </p>

      {/* Social media links */}
      <footer className="border-t border-gray-700 pt-6 w-full max-w-3xl">
        <p className="text-lg font-medium mb-4">
          Volg ons alvast via onze sociale kanalen
        </p>
        <div className="flex justify-center gap-8 text-amber-400 text-lg">
          <a
            href="https://www.linkedin.com/company/109223311"
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61581817210016"
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-500 transition"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/foutgebouwd/#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-500 transition"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
