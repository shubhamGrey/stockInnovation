import { useEffect, useRef, useState } from 'react';
import { TrendingUp, TrendingDown, BarChart3, Activity, RefreshCw, PieChart, Target, Eye } from 'lucide-react';
import useMarketAnalysis from '../hooks/useMarketAnalysis';
import LoadingMessage from './LoadingMessage';
import ErrorDisplay from './ErrorDisplay';

function MarketOverview() {
  const { marketData, loading, error, startTime, fetchMarketAnalysis } = useMarketAnalysis();
  const hasInitialized = useRef(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Only fetch data once when component mounts
    if (!hasInitialized.current && !marketData && !loading) {
      hasInitialized.current = true;
      fetchMarketAnalysis();
    }
  }, [fetchMarketAnalysis, marketData, loading]);

  const handleRefresh = () => {
    hasInitialized.current = true; // Prevent useEffect from running again
    fetchMarketAnalysis();
  };

  if (loading) {
    return (
      <LoadingMessage
        title="Analyzing Market Data"
        message="Fetching top 10 stocks and market analysis. This comprehensive analysis includes market trends, top performers, and sector insights."
        startTime={startTime}
      />
    );
  }

  if (error) {
    return <ErrorDisplay message={error} onRetry={handleRefresh} />;
  }

  if (!marketData) {
    return (
      <div className="market-overview">
        <div className="market-header">
          <div className="market-header-content">
            <div className="market-title">
              <BarChart3 size={32} />
              <div>
                <h1>Market Overview</h1>
                <p>Top 10 stocks and comprehensive market analysis</p>
              </div>
            </div>
            <button onClick={handleRefresh} className="refresh-button">
              <RefreshCw size={20} />
              Load Market Data
            </button>
          </div>
        </div>
        <div className="empty-state">
          <Activity size={48} />
          <h3>Market Analysis</h3>
          <p>Click "Load Market Data" to get the latest market overview with top 10 stocks and market trends.</p>
        </div>
      </div>
    );
  }

  // Parse market data based on the actual API response structure
  const renderMarketData = () => {
    if (typeof marketData === 'string') {
      return (
        <div className="market-content">
          <div className="market-analysis-text">
            <h3>Market Analysis</h3>
            <div className="analysis-content">
              {marketData.split('\n').map((line, index) => (
                <p key={`line-${index}-${line.substring(0, 20)}`}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Handle the actual API response structure: { top_picks: [...] }
    const topPicks = marketData?.top_picks || [];
    
    if (topPicks.length === 0) {
      return (
        <div className="market-content">
          <div className="empty-state">
            <Activity size={48} />
            <h3>No Market Data Available</h3>
            <p>Unable to load market analysis data. Please try refreshing.</p>
          </div>
        </div>
      );
    }

    // Group stocks by action for better organization
    const groupedStocks = {
      buy: topPicks.filter(stock => stock.action === 'Buy'),
      sell: topPicks.filter(stock => stock.action === 'Sell'),
      watch: topPicks.filter(stock => stock.action === 'Watch')
    };

    const getActionColor = (action) => {
      switch (action) {
        case 'Buy': return 'action-buy';
        case 'Sell': return 'action-sell';
        case 'Watch': return 'action-watch';
        default: return 'action-neutral';
      }
    };

    const getSentimentColor = (sentiment) => {
      return sentiment === 'Bullish' ? 'positive' : 'negative';
    };

    // Tab navigation
    const tabs = [
      { id: 'overview', label: 'Market Overview', icon: BarChart3 },
      { id: 'buy', label: `Buy Picks (${groupedStocks.buy.length})`, icon: TrendingUp },
      { id: 'sell', label: `Sell Picks (${groupedStocks.sell.length})`, icon: TrendingDown },
      { id: 'watch', label: `Watch List (${groupedStocks.watch.length})`, icon: Activity }
    ];

    const renderOverviewTab = () => (
      <div className="tab-content-market">
        <div className="market-overview-stats">
          <div className="stats-cards">
            <div className="stat-card buy-stats">
              <div className="stat-number">{groupedStocks.buy.length}</div>
              <div className="stat-label">Buy Recommendations</div>
            </div>
            <div className="stat-card sell-stats">
              <div className="stat-number">{groupedStocks.sell.length}</div>
              <div className="stat-label">Sell Recommendations</div>
            </div>
            <div className="stat-card watch-stats">
              <div className="stat-number">{groupedStocks.watch.length}</div>
              <div className="stat-label">Watch List</div>
            </div>
            <div className="stat-card total-stats">
              <div className="stat-number">{topPicks.length}</div>
              <div className="stat-label">Total Picks</div>
            </div>
          </div>
        </div>
        
        <div className="market-summary-cards">
          <h3>Market Summary</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <h4>Strong Buy Signals</h4>
              <p>{groupedStocks.buy.map(stock => stock.ticker).join(', ')}</p>
            </div>
            <div className="summary-item">
              <h4>Bearish Outlook</h4>
              <p>{groupedStocks.sell.map(stock => stock.ticker).join(', ')}</p>
            </div>
            <div className="summary-item">
              <h4>Market Sentiment</h4>
              <p>{groupedStocks.buy.length > groupedStocks.sell.length ? 'Predominantly Bullish' : 'Mixed to Bearish'}</p>
            </div>
          </div>
        </div>
      </div>
    );

    const renderStocksList = (stocks, title) => (
      <div className="tab-content-market">
        <h3>{title}</h3>
        <div className="stocks-grid-tab">
          {stocks.map((stock, index) => (
            <div key={`stock-${stock.ticker}-${index}`} className="stock-card detailed compact">
              <div className="stock-header">
                <div className="stock-info">
                  <h4 className="ticker">{stock.ticker}</h4>
                  <p className="company-name">{stock.company}</p>
                </div>
                <div className="stock-badges">
                  <span className={`action-badge ${getActionColor(stock.action)}`}>
                    {stock.action}
                  </span>
                  <span className={`sentiment-badge ${getSentimentColor(stock.sentiment)}`}>
                    {stock.sentiment === 'Bullish' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {stock.sentiment}
                  </span>
                </div>
              </div>
              
              <div className="stock-details">
                <div className="stock-news">
                  <h5>Key News</h5>
                  <p className="news-text">{stock.critical_news}</p>
                </div>
                
                <div className="stock-impact">
                  <h5>Market Impact</h5>
                  <p className="impact-text">{stock.impact_summary}</p>
                </div>
                
                <div className="stock-reason">
                  <h5>Analysis</h5>
                  <p className="reason-text">{stock.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    const renderTabContent = () => {
      switch (activeTab) {
        case 'overview':
          return renderOverviewTab();
        case 'buy':
          return renderStocksList(groupedStocks.buy, 'Buy Recommendations');
        case 'sell':
          return renderStocksList(groupedStocks.sell, 'Sell Recommendations');
        case 'watch':
          return renderStocksList(groupedStocks.watch, 'Watch List');
        default:
          return renderOverviewTab();
      }
    };

    return (
      <div className="market-content">
        {/* Tab Navigation */}
        <div className="market-tab-navigation">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                className={`market-tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <IconComponent size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    );
  };

  return (
    <div className="market-overview">
      <div className="market-header">
        <div className="market-header-content">
          <div className="market-title">
            <BarChart3 size={32} />
            <div>
              <h1>Market Overview</h1>
              <p>Top 10 stocks and comprehensive market analysis</p>
            </div>
          </div>
          <button onClick={handleRefresh} className="refresh-button" disabled={loading}>
            <RefreshCw size={20} className={loading ? 'spinner' : ''} />
            {loading ? 'Loading...' : 'Refresh'}
          </button>
        </div>
      </div>
      
      {renderMarketData()}
    </div>
  );
}

export default MarketOverview;
