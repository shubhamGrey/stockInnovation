# Copilot Instructions for Stock UI Project

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a React web application built with Vite that provides a user interface for a stock analysis API. The application allows users to input NSE stock tickers and get detailed analysis results.

## Key Features
- Modern, responsive UI design
- Integration with Gradio-based stock analysis API at https://rajat5ranjan-stock-api.hf.space/gradio_api/call/predict
- Real-time stock analysis display
- Error handling and loading states

## Development Guidelines
- Use React functional components with hooks
- Implement responsive design principles
- Follow modern JavaScript/ES6+ practices
- Use axios for API calls
- Implement proper error handling
- Use lucide-react for icons
- Focus on clean, maintainable code structure

## API Integration
The main API endpoint expects NSE stock tickers (e.g., "RELIANCE", "TCS") and returns structured JSON analysis data.
