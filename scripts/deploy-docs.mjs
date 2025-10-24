import { cp, mkdir, rm, stat, copyFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const sourceDir = path.join(projectRoot, 'dist');
const targetDir = path.join(projectRoot, 'docs');

async function main() {
  try {
    const sourceStat = await stat(sourceDir);
    if (!sourceStat.isDirectory()) {
      throw new Error('dist/ bestaat maar is geen map. Voer eerst "yarn build" uit.');
    }
  } catch (error) {
    if (error && error.code === 'ENOENT') {
      throw new Error('dist/ ontbreekt. Voer eerst "yarn build" uit voordat je deployt.');
    }
    throw error;
  }

  await rm(targetDir, { recursive: true, force: true });
  await mkdir(targetDir, { recursive: true });
  await cp(sourceDir, targetDir, { recursive: true });

  const indexPath = path.join(targetDir, 'index.html');
  try {
    await copyFile(indexPath, path.join(targetDir, '404.html'));
  } catch (error) {
    if (error && error.code === 'ENOENT') {
      throw new Error('index.html ontbreekt in dist/. Controleer de build-uitvoer.');
    }
    throw error;
  }

  await writeFile(path.join(targetDir, '.nojekyll'), '');

  console.log('Docs-map ververst. Upload de inhoud van docs/ naar GitHub Pages of je webhost.');
}

main().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
