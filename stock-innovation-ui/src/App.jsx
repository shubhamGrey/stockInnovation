import { useState } from 'react';
import {
  Header,
  SearchBar,
  ErrorDisplay,
  StockHeader,
  TabNavigation,
  TabContent,
  MarketOverview,
} from './components';
import LoadingMessage from './components/LoadingMessage';
import useStockAnalysis from './hooks/useStockAnalysis';
import './App.css';

function App() {
  const [ticker, setTicker] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [activeView, setActiveView] = useState('search'); // 'search' or 'market'
  const { analysis, loading, error, startTime, fetchAnalysis } = useStockAnalysis();

  const handleSubmit = () => {
    if (!ticker.trim()) return;
    fetchAnalysis(ticker);
  };

  const handleSuggestionClick = (stockTicker) => {
    if (loading) return;
    setTicker(stockTicker);
    fetchAnalysis(stockTicker);
  };

  return (
    <div className="app">
      <Header activeView={activeView} onViewChange={setActiveView} />

      <main className="main">
        <div className="container">
          {activeView === 'search' ? (
            <>
              <SearchBar
                ticker={ticker}
                setTicker={setTicker}
                onSubmit={handleSubmit}
                onSuggestionClick={handleSuggestionClick}
                loading={loading}
              />

              <ErrorDisplay error={error} />

              {loading && (
                <LoadingMessage ticker={ticker} startTime={startTime} />
              )}

              {analysis && !loading && (
                <div className="results">
                  <StockHeader analysis={analysis} ticker={ticker} />
                  <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
                  <TabContent activeTab={activeTab} analysis={analysis} />
                </div>
              )}
            </>
          ) : (
            <MarketOverview />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
