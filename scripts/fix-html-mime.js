// Workaround for SvelteKit 3.0.1 + adapter-node 6.0.0: the generated mime table
// only records extensions seen in prerendered *paths* (e.g. `/blog`), so `.html`
// is missing and prerendered pages are served without a Content-Type header.
// Remove this script once the upstream fix lands.
import { readFileSync, writeFileSync } from 'node:fs';

const file = new URL('../build/adapter-node.js', import.meta.url);
const source = readFileSync(file, 'utf8');
const pattern = /export const mime_types = (\{.*?\});/;
const match = source.match(pattern);
if (!match) throw new Error('fix-html-mime: mime_types export not found in build/adapter-node.js');

const types = JSON.parse(match[1]);
if (!types['.html']) {
	types['.html'] = 'text/html';
	writeFileSync(
		file,
		source.replace(pattern, `export const mime_types = ${JSON.stringify(types)};`)
	);
	console.log('fix-html-mime: registered .html as text/html');
}
