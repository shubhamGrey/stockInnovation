import { BarChart3, Search, TrendingUp } from 'lucide-react';

function Header({ activeView, onViewChange }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <BarChart3 size={32} />
          <h1>StockInsight Pro</h1>
        </div>
        <p className="subtitle">Professional NSE Stock Analysis Platform</p>
        
        <nav className="header-nav">
          <button
            className={`nav-button ${activeView === 'search' ? 'active' : ''}`}
            onClick={() => onViewChange('search')}
          >
            <Search size={20} />
            <span>Stock Search</span>
          </button>
          <button
            className={`nav-button ${activeView === 'market' ? 'active' : ''}`}
            onClick={() => onViewChange('market')}
          >
            <TrendingUp size={20} />
            <span>Market Overview</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
