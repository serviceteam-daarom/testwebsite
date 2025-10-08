# GitHub Pages deployment

Dit project is klaargemaakt voor GitHub Pages met een workflow die automatisch bouwt en publiceert vanuit de `main` branch.

## Wat doet de workflow?
- Installeert dependencies met **Yarn** (aangetroffen lockfile).
- Bouwt met **Vite** en zet de `base` automatisch op `/${{ github.event.repository.name }}/` zodat assets correct laden onder de repository-URL.
- Maakt een `404.html` aan (SPA fallback) en voegt `.nojekyll` toe.
- Uploadt de `dist/` map als Pages-artifact en **deployt** naar GitHub Pages.

## Gebruik
1. Maak een nieuwe GitHub repository en upload alle bestanden uit deze zip (of importeer de zip).
2. Zorg dat je branch **main** heet (of pas de workflow aan).
3. Ga in GitHub naar **Settings → Pages** en zet **Source** op **GitHub Actions**.
4. Push een commit (of trigger de workflow handmatig via **Actions → Deploy to GitHub Pages → Run workflow**).
5. Je site staat live op: `https://<jouw-username>.github.io/<repo-naam>/`

> **Let op:** Vite gebruikt een `base`-pad. In deze workflow wordt dat automatisch gezet op `/${{ github.event.repository.name }}/` (de repositorynaam). Als je een custom domein gebruikt, kun je deze stap aanpassen of een `CNAME`-bestand toevoegen.

## Handige aanpassingen
- **Branch wijzigen?** Pas `branches: [ "main" ]` aan in `.github/workflows/deploy-pages.yml`.
- **Andere package manager?** Vervang Yarn-commando’s door `npm ci` / `npm run build` etc.
- **Buildmap anders?** Pas `path: dist` aan in de upload-stap.
- **Vite-basispad** statisch zetten? Vervang de build-stap door bijvoorbeeld:
  ```bash
  yarn build -- --base="/mijn-repo/"
  ```

_Automatisch gegenereerd op 2025-10-08._
