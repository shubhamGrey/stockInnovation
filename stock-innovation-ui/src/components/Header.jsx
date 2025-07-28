import { BarChart3 } from 'lucide-react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <BarChart3 size={32} />
          <h1>StockInsight Pro</h1>
        </div>
        <p className="subtitle">Professional NSE Stock Analysis Platform</p>
      </div>
    </header>
  );
}

export default Header;
