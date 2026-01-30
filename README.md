# 📊 Task Tracker Cloud v2

A modern, cloud-native **Real-Time Analytics Dashboard** built with cutting-edge web and cloud technologies. This application demonstrates enterprise-grade development practices with AWS Amplify Gen 2, React, and real-time data visualization.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🎯 Project Overview

Task Tracker Cloud v2 is a full-stack web application that showcases:
- **Real-time event tracking** with live data streaming
- **Interactive analytics charts** powered by Recharts
- **Serverless cloud architecture** using AWS Amplify Gen 2
- **Modern React development** with Vite for fast builds and HMR
- **Production-ready infrastructure** with automated deployments

This project demonstrates proficiency in modern web development, cloud computing, and real-time data systems.

---

## 🚀 Key Features

- ✨ **Real-Time Dashboard**: Live activity tracking with automatic updates
- 📈 **Data Visualization**: Beautiful, interactive charts for analytics
- ☁️ **Cloud-Native**: Fully serverless backend using AWS Amplify
- 🔐 **Secure API**: GraphQL API with API key authentication
- 📱 **Responsive UI**: Mobile-friendly interface with AWS Amplify UI components
- ⚡ **Fast Development**: Vite-powered development server with Hot Module Replacement
- 🧩 **Scalable Architecture**: Event-driven design ready for production scale

---

## 🛠️ Technology Stack

### Frontend
- **React 19.x** - Latest React with modern hooks and features
- **Vite 7.x** - Next-generation frontend tooling for blazing fast builds
- **Recharts 3.x** - Composable charting library for data visualization
- **AWS Amplify UI React** - Pre-built UI components for AWS integration

### Backend & Cloud Infrastructure
- **AWS Amplify Gen 2** - Modern full-stack development framework
- **AWS AppSync** - Managed GraphQL API with real-time subscriptions
- **AWS DynamoDB** - NoSQL database for high-performance data storage
- **GraphQL** - Type-safe API layer with subscriptions for real-time updates

### Development Tools
- **ESLint** - Code quality and style enforcement
- **Yarn** - Fast, reliable dependency management
- **Git** - Version control with professional workflow

---

## 📐 Architecture

### Data Model
The application tracks activity events with the following schema:

```graphql
type ActivityEvent {
  id: ID!
  entityType: String!     # TASK, USER, SYSTEM
  eventType: String!      # CREATED, UPDATED, COMPLETED
  value: Int
  userId: String
  timestamp: AWSDateTime!
}
```

### Key Components
- **AnalyticsChart**: Real-time chart visualization with Recharts
- **CreateEvent**: Form component for creating new activity events
- **useLiveEvents**: Custom React hook for GraphQL subscriptions and live data

---

## 🎓 Technical Highlights

This project demonstrates:

1. **Full-Stack Development**: End-to-end development from frontend to cloud infrastructure
2. **Real-Time Systems**: GraphQL subscriptions for live data streaming
3. **Cloud Engineering**: Serverless architecture with AWS managed services
4. **Modern React Patterns**: Hooks, context, and component composition
5. **Infrastructure as Code**: Backend resources defined in TypeScript
6. **CI/CD Ready**: Structured for automated deployment pipelines
7. **Code Quality**: ESLint configuration and best practices

---

## 🏃 Quick Start

### Prerequisites
- **Node.js 16.10+** - [Download here](https://nodejs.org/)
- **Yarn** - Package manager ([installation guide](#installing-yarn))
- **AWS Account** - Required for cloud deployment (optional for code review)

### Installing Yarn

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

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Andrew112/task-tracker-cloud-v2.git
   cd task-tracker-cloud-v2
   ```
   
   > **Note:** This repository has a nested structure. The main project is located in `AndrewsProjectsThree/task-tracker-cloud-v2/`

2. **Navigate to the project directory**
   ```bash
   cd AndrewsProjectsThree/task-tracker-cloud-v2
   ```

3. **Install dependencies**
   ```bash
   yarn install
   ```

4. **Start development server** (Frontend only)
   ```bash
   yarn dev
   ```
   The app will be available at `http://localhost:5173`

### Cloud Deployment (Optional)

To deploy the full cloud infrastructure:

1. **Configure AWS credentials** (requires AWS account)
   ```bash
   aws configure
   ```

2. **Start Amplify sandbox** (deploys backend to AWS)
   ```bash
   yarn sandbox
   ```

3. **Deploy to production**
   ```bash
   yarn deploy
   ```

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server with hot reload |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build locally |
| `yarn lint` | Run ESLint code quality checks |
| `yarn sandbox` | Deploy to AWS sandbox environment |
| `yarn deploy` | Deploy to AWS production environment |

---

## 📂 Project Structure

```
task-tracker-cloud-v2/
├── AndrewsProjectsThree/
│   └── task-tracker-cloud-v2/
│       ├── amplify/              # AWS Amplify backend configuration
│       │   ├── backend.ts        # Backend entry point
│       │   └── data/             # GraphQL schema and data models
│       ├── src/
│       │   ├── components/       # React components
│       │   │   ├── AnalyticsChart.jsx
│       │   │   ├── CreateEvent.jsx
│       │   │   └── useLiveEvents.js
│       │   ├── App.jsx           # Main application component
│       │   └── main.jsx          # Application entry point
│       ├── package.json          # Dependencies and scripts
│       └── vite.config.js        # Vite configuration
├── LICENSE                       # MIT License
└── README.md                     # This file
```

---

## 🎨 Screenshots & Demo

The application features a clean, modern interface with:
- Real-time activity event tracking
- Interactive analytics charts
- Responsive design for mobile and desktop
- AWS Amplify UI components

---

## 🔐 Security

- API Key authentication with 30-day rotation
- Environment variables for sensitive configuration
- Gitignored credentials and API keys
- AWS IAM best practices

---

## 📈 Scalability

Built with scalability in mind:
- Serverless architecture scales automatically with demand
- DynamoDB handles millions of requests per second
- GraphQL subscriptions for efficient real-time updates
- AWS Amplify Hosting provides CloudFront CDN for global content delivery (when deployed)

---

## 🤝 Contributing

This is a portfolio project by **Andrew Coleman**. For questions or opportunities, feel free to reach out!

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Acknowledgments

- Built with [AWS Amplify](https://aws.amazon.com/amplify/)
- Powered by [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- Charts by [Recharts](https://recharts.org/)

---

## 📞 Contact

**Andrew Coleman**
- GitHub: [@Andrew112](https://github.com/Andrew112)
- Repository: [task-tracker-cloud-v2](https://github.com/Andrew112/task-tracker-cloud-v2)

---

*Built with ❤️ to showcase modern full-stack development skills*
