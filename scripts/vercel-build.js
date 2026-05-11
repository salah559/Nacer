const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
console.log('Root directory:', rootDir);

// Install dependencies
console.log('Installing dependencies...');
execSync('pnpm install', { cwd: rootDir, stdio: 'inherit' });

// Build the presentation
const presentationDir = path.join(rootDir, 'artifacts', 'nesda-presentation');
console.log('Building presentation from:', presentationDir);
execSync('pnpm run build', {
  cwd: presentationDir,
  stdio: 'inherit',
  env: { ...process.env, BASE_PATH: '/', PORT: '3000' }
});

// Copy output to public
const distDir = path.join(presentationDir, 'dist', 'public');
const publicDir = path.join(rootDir, 'public');

console.log('Copying', distDir, 'to', publicDir);
fs.rmSync(publicDir, { recursive: true, force: true });
fs.mkdirSync(publicDir, { recursive: true });
fs.cpSync(distDir, publicDir, { recursive: true, force: true });

console.log('Build complete!');
const files = fs.readdirSync(publicDir);
console.log('Public directory contents:', files);
