import { readFileSync, writeFileSync } from 'node:fs';
const pages = { 'project-asa': 'ASA Network Management', 'project-gamification': 'Gamification & Learning Platform', about: 'About Shaina', 'project-bsa': 'Broadcasting Services Platform', 'project-ise': 'ISE Global Infrastructure Dashboard', 'project-electron': 'Electron AI Assistant', 'project-tad': 'TAD Platform', 'project-nova': 'Nova Design System' };
const source = readFileSync('dist/client/index.html', 'utf8');
for (const [slug, title] of Object.entries(pages)) {
  writeFileSync(`dist/client/${slug}.html`, source.replace(/<title>.*?<\/title>/, `<title>${title} | Shaina Gonzales</title>`));
}
console.log('Prepared eight standalone portfolio page entries.');
