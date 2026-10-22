#!/usr/bin/env node
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const m = html.match(/function buildPlainText[\s\S]*?return lines\.join/);
if (!m) {
  console.error('buildPlainText not found in index.html');
  process.exit(1);
}
console.log(m[0].slice(0, -1) + '");');
console.log('console.log(\'\n--- NOTE ---\')');
console.log('console.log(\'This is a tiny smoke helper only; it does not reimplement the full app build.\')');
