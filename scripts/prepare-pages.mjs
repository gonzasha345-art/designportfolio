import { readFileSync, writeFileSync } from 'node:fs';
const pages = { 'project-gamification': 'Gamification & Learning', about: 'About Shaina', 'project-bsa': 'BSA Calendar', 'project-ise': 'ISE Platform', 'project-electron': 'Electron AI Assistant', 'project-tad': 'TAD Platform', 'project-nova': 'Nova Design System' };
const source = readFileSync('dist/client/index.html', 'utf8');
for (const [slug, title] of Object.entries(pages)) {
  writeFileSync(`dist/client/${slug}.html`, source.replace(/<title>.*?<\/title>/, `<title>${title} | Shaina Gonzales</title>`));
}
console.log('Prepared seven standalone portfolio page entries.');
