const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const tags = html.match(/<\/?[a-zA-Z][^>]*>/g) || [];
const open = {};
const close = {};
for (const tag of tags) {
  const m = tag.match(/^<\/?\s*([a-zA-Z0-9-]+)/);
  if (!m) continue;
  const name = m[1];
  if (tag.startsWith('</')) close[name] = (close[name] || 0) + 1;
  else if (!tag.endsWith('/>')) open[name] = (open[name] || 0) + 1;
}
const names = Array.from(new Set([...Object.keys(open), ...Object.keys(close)]));
const diffs = names.map(n => [n, (open[n] || 0) - (close[n] || 0)]).filter(([_, d]) => d !== 0);
console.log(JSON.stringify(diffs, null, 2));
console.log('section', open.section || 0, close.section || 0);
console.log('form', open.form || 0, close.form || 0);
console.log('div', open.div || 0, close.div || 0);
console.log('iframe', open.iframe || 0, close.iframe || 0);
