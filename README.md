# task-tracker-cloud-v2
A Cloud Based Amplify scalable analytics charts app.

## Prerequisites

### AWS Amplify CLI Backend

**⚠️ IMPORTANT:** This application requires AWS Amplify Gen 2 CLI to be installed and configured before running.

#### 1. Install AWS CLI

First, install the AWS CLI if you haven't already:

**macOS:**
```bash
brew install awscli
```

**Windows:**
Download and run the [AWS CLI MSI installer](https://awscli.amazonaws.com/AWSCLIV2.msi)

**Linux:**
```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

**Verify Installation:**
```bash
aws --version
```

#### 2. Configure AWS Credentials

Configure your AWS credentials (requires an AWS account):
```bash
aws configure
```

You'll need to provide:
- AWS Access Key ID
- AWS Secret Access Key
- Default region (e.g., `us-east-1`)
- Default output format (e.g., `json`)

For more information, visit the [AWS CLI Configuration Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

#### 3. Install Amplify CLI

The Amplify CLI is included as a dev dependency in this project via `@aws-amplify/backend-cli`. However, you can also install it globally:

```bash
npm install -g @aws-amplify/backend-cli
```

**Verify Installation:**
```bash
ampx --version
```

### Package Manager - Yarn

This project uses [Yarn](https://yarnpkg.com/) as the package manager. Before getting started, you'll need to install Yarn.

#### Installing Yarn

Choose one of the following installation methods:

**Option 1: Using npm (Recommended)**
```bash
npm install -g yarn
```

**Option 2: Using Corepack (Node.js 16.10+)**
```bash
corepack enable
```

**Option 3: Platform-specific**
- **macOS:** `brew install yarn`
- **Windows:** `choco install yarn`
- **Linux:** See [Yarn's official installation guide](https://yarnpkg.com/getting-started/install)

**Verify Installation:**
```bash
yarn --version
```

## Getting Started

After installing Yarn and configuring AWS credentials, follow these steps:

### 1. Install Dependencies

Navigate to the project directory and install dependencies:

```bash
# Navigate to the project directory (adjust path based on your setup)
cd AndrewsProjectsThree/task-tracker-cloud-v2
yarn install
```

### 2. Deploy Amplify Backend (Required)

**⚠️ This step is required before running the application!**

The application requires a deployed Amplify backend. Use the sandbox environment for development:

```bash
yarn sandbox
```

This command will:
- Deploy your backend resources to AWS
- Generate `amplify_outputs.json` with your backend configuration
- Watch for changes and auto-deploy updates

**Note:** Keep this terminal running while developing. The sandbox creates a personal cloud environment for development.

### 3. Run the Application

In a new terminal, start the development server:

```bash
cd AndrewsProjectsThree/task-tracker-cloud-v2
yarn dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## Troubleshooting

### Missing `amplify_outputs.json` Error

If you see an error about missing `amplify_outputs.json`, you need to run the Amplify sandbox first:
```bash
yarn sandbox
```

### AWS Credentials Not Configured

If you get AWS credential errors, make sure you've run:
```bash
aws configure
```

### Sandbox Deployment Issues

If the sandbox deployment fails, check:
- Your AWS credentials are valid and have proper permissions
- You have an active internet connection
- Your AWS account has the necessary service quotas

For detailed setup instructions and available commands, see the [project README](./AndrewsProjectsThree/task-tracker-cloud-v2/README.md).
