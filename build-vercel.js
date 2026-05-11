const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const root = __dirname;
const packageDir = path.join(root, 'artifacts', 'nesda-presentation');

console.log('Script location:', __filename);
console.log('Root:', root);
console.log('Package dir:', packageDir);
console.log('CWD at start:', process.cwd());

// Install dependencies
console.log('Installing dependencies...');
execSync('pnpm install', { cwd: root, stdio: 'inherit' });

// Build the presentation
console.log('Building presentation...');
execSync('pnpm run build', {
  cwd: packageDir,
  stdio: 'inherit',
  env: {
    ...process.env,
    BASE_PATH: '/',
    PORT: '3000',
    VERCEL: '1',
  }
});

// Check all possible locations
const possiblePaths = [
  path.join(root, 'public'),
  path.join(packageDir, 'dist', 'public'),
  path.join(process.cwd(), 'public'),
];

for (const p of possiblePaths) {
  console.log(`Checking ${p}: exists=${fs.existsSync(p)}`);
  if (fs.existsSync(p)) {
    const files = fs.readdirSync(p);
    console.log(`  Files: ${files.join(', ')}`);
  }
}

// Ensure public exists at root
const publicDir = path.join(root, 'public');
if (!fs.existsSync(publicDir)) {
  console.log('ERROR: public directory not found anywhere!');
  process.exit(1);
}

console.log('Build complete!');
