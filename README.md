# 📊 Real-Time Analytics Dashboard

A cloud-native, scalable analytics dashboard that tracks and visualizes events in real-time using modern web technologies and AWS cloud infrastructure.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![AWS Amplify](https://img.shields.io/badge/AWS_Amplify-6.15.9-FF9900?style=flat&logo=aws-amplify&logoColor=white)](https://aws.amazon.com/amplify/)
[![GraphQL](https://img.shields.io/badge/GraphQL-API-E10098?style=flat&logo=graphql&logoColor=white)](https://graphql.org/)

## 🎯 Project Overview

This application demonstrates proficiency in building **modern, cloud-native web applications** with real-time data synchronization. It showcases the ability to architect and implement scalable solutions using industry-standard tools and cloud services.

### Key Features

- ✨ **Real-Time Data Visualization** - Live analytics charts that update automatically as events occur
- 🔄 **GraphQL Integration** - Efficient data fetching with subscriptions for real-time updates
- ☁️ **Cloud-Native Architecture** - Built on AWS Amplify for automatic scaling and deployment
- ⚡ **High Performance** - Lightning-fast development and production builds with Vite
- 🎨 **Modern UI Components** - Professional data visualization using Recharts library
- 📱 **Responsive Design** - Optimized user experience across all devices

## 🏗️ Technical Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend Layer                        │
│  React 19 + Vite │ Recharts │ AWS Amplify UI React      │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│                    API Layer                             │
│              GraphQL (Queries, Mutations,                │
│                    Subscriptions)                        │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│                 AWS Amplify Backend                      │
│    Database │ Authentication │ Real-time Sync           │
└─────────────────────────────────────────────────────────┘
```

## 💻 Technology Stack

### Frontend
- **React 19** - Latest React framework with modern features
- **Vite** - Next-generation frontend build tool for faster development
- **Recharts** - Composable charting library for rich data visualization
- **AWS Amplify UI** - Pre-built UI components for authentication and cloud features

### Backend & Infrastructure
- **AWS Amplify** - Full-stack cloud platform for web and mobile apps
- **GraphQL** - Modern API query language for flexible data fetching
- **AWS AppSync** - Managed GraphQL service with real-time subscriptions
- **DynamoDB** - Scalable NoSQL database (via Amplify)

### Development Tools
- **ESLint** - Code quality and consistency enforcement
- **Yarn** - Fast, reliable dependency management
- **Git** - Version control and collaboration

## 🚀 Quick Start

### Prerequisites

- **Node.js** 16.10+ 
- **Yarn** package manager
- **AWS Account** (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Andrew112/task-tracker-cloud-v2.git
   cd task-tracker-cloud-v2
   ```

2. **Navigate to project directory**
   ```bash
   cd AndrewsProjectsThree/task-tracker-cloud-v2
   ```

3. **Install Yarn** (if not already installed)
   ```bash
   npm install -g yarn
   # or enable corepack (Node.js 16.10+)
   corepack enable
   ```

4. **Install dependencies**
   ```bash
   yarn install
   ```

5. **Start development server**
   ```bash
   yarn dev
   ```

   The application will be available at `http://localhost:5173`

## 📋 Available Commands

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server with hot reload |
| `yarn build` | Build optimized production bundle |
| `yarn preview` | Preview production build locally |
| `yarn lint` | Run ESLint for code quality checks |
| `yarn sandbox` | Start Amplify sandbox environment |
| `yarn deploy` | Deploy to AWS Amplify cloud |

## 🌟 Project Highlights

### What This Project Demonstrates

1. **Full-Stack Development** - End-to-end application development from frontend to cloud infrastructure
2. **Modern React Patterns** - Hooks, custom hooks, and component composition
3. **Real-Time Systems** - Implementation of WebSocket-based real-time data synchronization
4. **Cloud Architecture** - Serverless, auto-scaling cloud deployment on AWS
5. **API Design** - GraphQL schema design and efficient data fetching patterns
6. **Development Best Practices** - Linting, modular code structure, and clean architecture
7. **Performance Optimization** - Fast build times and optimized production bundles

### Code Quality

- ✅ Modern ES6+ JavaScript syntax
- ✅ Component-based architecture
- ✅ Custom React hooks for business logic
- ✅ ESLint integration for code consistency
- ✅ Modular file structure

## 🔧 Development Setup (Detailed)

### Environment Configuration

1. **AWS Amplify Setup** (for full cloud features)
   ```bash
   # Install Amplify CLI globally
   npm install -g @aws-amplify/cli
   
   # Configure AWS credentials
   amplify configure
   ```

2. **Initialize Amplify Backend**
   ```bash
   amplify init
   amplify push
   ```

### Project Structure

```
task-tracker-cloud-v2/
├── AndrewsProjectsThree/
│   └── task-tracker-cloud-v2/
│       ├── amplify/              # AWS Amplify backend configuration
│       │   ├── backend.ts        # Backend infrastructure code
│       │   └── data/             # Data models and schema
│       ├── src/
│       │   ├── components/       # React components
│       │   │   ├── AnalyticsChart.jsx
│       │   │   ├── CreateEvent.jsx
│       │   │   └── useLiveEvents.js
│       │   ├── api/              # API utilities
│       │   ├── graphql/          # GraphQL queries/mutations
│       │   ├── App.jsx           # Main application component
│       │   └── main.jsx          # Application entry point
│       ├── public/               # Static assets
│       ├── package.json          # Project dependencies
│       └── vite.config.js        # Vite configuration
└── README.md                     # This file
```

## 🎓 Learning Resources

This project implements concepts from:
- [React Documentation](https://react.dev/)
- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [GraphQL Best Practices](https://graphql.org/learn/best-practices/)
- [Vite Guide](https://vitejs.dev/guide/)

## 📈 Future Enhancements

Potential features for expansion:
- [ ] User authentication and authorization
- [ ] Multi-user real-time collaboration
- [ ] Advanced filtering and data aggregation
- [ ] Export analytics to CSV/PDF
- [ ] Email notifications for specific events
- [ ] Custom dashboard creation
- [ ] Mobile app version with React Native

## 📞 Contact & Professional Links

**Developer:** Andrew  
**Repository:** [github.com/Andrew112/task-tracker-cloud-v2](https://github.com/Andrew112/task-tracker-cloud-v2)

---

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

---

*Built with ❤️ using React, AWS Amplify, and modern web technologies*
