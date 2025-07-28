# 📈 StockInsight Pro

A modern, professional React web application for NSE stock analysis. Built with Vite and designed with a clean, responsive UI that provides comprehensive stock analysis through integration with a Gradio-based API.

## 🚀 Features

- **Modern UI Design**: Clean, responsive interface with professional styling
- **Real-time Stock Analysis**: Integration with stock analysis API
- **Tabbed Interface**: Organized analysis data across multiple tabs (Overview, Fundamentals, Technical, Investment, Risks & News)
- **Interactive Elements**: Suggestion chips for popular stocks with automatic API triggering
- **Error Handling**: Comprehensive error states and loading indicators
- **Component Architecture**: Well-structured, reusable React components

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── tabs/            # Tab-specific components
│   │   ├── OverviewTab.jsx
│   │   ├── FundamentalsTab.jsx
│   │   ├── TechnicalTab.jsx
│   │   ├── InvestmentTab.jsx
│   │   ├── RisksTab.jsx
│   │   └── index.js
│   ├── ErrorDisplay.jsx
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── StockHeader.jsx
│   ├── TabContent.jsx
│   ├── TabNavigation.jsx
│   └── index.js
├── hooks/               # Custom React hooks
│   └── useStockAnalysis.js
├── App.jsx             # Main application component
├── App.css             # Application styles
├── index.css           # Global styles
└── main.jsx            # Application entry point
```

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful, customizable icons
- **PropTypes** - Runtime type checking for React props

## 🎯 API Integration

The application integrates with a Gradio-based stock analysis API:
- **Endpoint**: `https://rajat5ranjan-stock-api.hf.space/gradio_api/call/predict`
- **Input**: NSE stock tickers (e.g., "RELIANCE", "TCS", "INFY")
- **Output**: Comprehensive JSON analysis including fundamentals, technical analysis, investment advice, and risk factors
- **Features**: Server-Sent Events (SSE) support with 5-minute timeout

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd StockUI
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5174`

## 📱 Usage

1. **Search for Stocks**: Enter an NSE ticker symbol in the search bar or click on popular stock suggestions
2. **View Analysis**: Browse through different tabs to see comprehensive analysis:
   - **Overview**: Company description, performance metrics, overall rating
   - **Fundamentals**: Financial health and key metrics
   - **Technical**: Market trends and technical indicators
   - **Investment**: Short/medium/long-term outlook and action plans
   - **Risks & News**: Risk factors and market sentiment

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🧩 Component Architecture

The application is built with a modular component architecture:

- **App.jsx**: Main application container with state management
- **useStockAnalysis**: Custom hook for API integration and state management
- **SearchBar**: Input form with suggestion chips
- **StockHeader**: Company information and rating display
- **TabNavigation**: Tab switching interface
- **TabContent**: Dynamic tab content renderer
- **Individual Tab Components**: Specialized components for each analysis section

## 🔧 Development Guidelines

- Follow React functional component patterns with hooks
- Use PropTypes for component validation
- Implement proper error handling and loading states
- Maintain responsive design principles
- Keep components small and focused on single responsibilities
- Use semantic HTML and accessible markup

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
