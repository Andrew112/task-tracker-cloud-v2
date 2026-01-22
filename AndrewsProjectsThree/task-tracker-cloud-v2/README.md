# React + Vite + AWS Amplify

This template provides a minimal setup to get React working in Vite with HMR, ESLint rules, and AWS Amplify Gen 2 backend.

## Prerequisites

### AWS Amplify CLI Backend Required

**⚠️ IMPORTANT:** This application requires AWS Amplify Gen 2 to be installed and configured.

Before you begin, ensure you have:

1. **Node.js** (v16.10+ recommended)
2. **AWS Account** with configured credentials
3. **AWS CLI** installed and configured
4. **Yarn** package manager installed

For detailed AWS setup instructions, see the [main README](../../README.md#aws-amplify-cli-backend).

### Quick AWS Setup

If you haven't set up AWS yet:

```bash
# Install AWS CLI (macOS example)
brew install awscli

# Configure AWS credentials
aws configure

# Verify configuration
aws sts get-caller-identity
```

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

**Deploy Amplify Backend (Required First!):**
```bash
yarn sandbox
```
> ⚠️ **You must run this before `yarn dev`!** This deploys the backend and generates `amplify_outputs.json`.

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

**Deploy to production:**
```bash
yarn deploy
```

For more information, visit the [official Yarn documentation](https://yarnpkg.com/getting-started).

## Amplify Backend Commands

This project uses AWS Amplify Gen 2. Here are the available Amplify commands:

### `yarn sandbox`
Starts a local development sandbox that:
- Deploys your backend to AWS in a development environment
- Generates `amplify_outputs.json` with backend configuration
- Watches for changes and auto-deploys
- Creates isolated resources per developer

**When to use:** During development. Keep this running in a terminal while you code.

### `yarn deploy`
Deploys your backend to a production environment.

**When to use:** When you're ready to deploy to production.

## AWS Amplify Gen 2 Setup

### First Time Setup

1. **Install dependencies:**
   ```bash
   yarn install
   ```

2. **Configure AWS credentials** (if not already done):
   ```bash
   aws configure
   ```

3. **Start the sandbox:**
   ```bash
   yarn sandbox
   ```
   
   This will create your backend resources in AWS. Wait for it to complete and generate `amplify_outputs.json`.

4. **Start development server** (in a new terminal):
   ```bash
   yarn dev
   ```

### Common Issues

**Error: Cannot find module '../amplify_outputs.json'**
- **Solution:** Run `yarn sandbox` first to generate the configuration file.

**Error: No credentials found**
- **Solution:** Run `aws configure` and provide your AWS credentials.

**Error: Access Denied**
- **Solution:** Ensure your AWS account has the necessary permissions to create Amplify resources.

For more information, visit the [official Yarn documentation](https://yarnpkg.com/getting-started).

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
