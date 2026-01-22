# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Package Manager - Yarn Installation

This project uses [Yarn](https://yarnpkg.com/) as its package manager, a fast, reliable, and secure dependency management tool.

### Installing Yarn

There are several ways to install Yarn:

#### Option 1: Using npm (Recommended)
```bash
npm install -g yarn
```

#### Option 2: Using Corepack (Node.js 16.10+)
Corepack is included by default with Node.js v16.10+. Enable it with:
```bash
corepack enable
```

#### Option 3: Platform-specific Installation

**macOS (using Homebrew):**
```bash
brew install yarn
```

**Windows (using Chocolatey):**
```bash
choco install yarn
```

**Linux (Debian/Ubuntu):**
```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo gpg --dearmor -o /usr/share/keyrings/yarn-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/yarn-keyring.gpg] https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```

### Verify Installation
After installation, verify Yarn is installed correctly:
```bash
yarn --version
```

### Using Yarn with This Project

Once Yarn is installed, you can use it to manage dependencies:

**Install dependencies:**
```bash
yarn install
```

**Run development server:**
```bash
yarn dev
```

**Build for production:**
```bash
yarn build
```

**Run linter:**
```bash
yarn lint
```

**Preview production build:**
```bash
yarn preview
```

For more information, visit the [official Yarn documentation](https://yarnpkg.com/getting-started).

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
