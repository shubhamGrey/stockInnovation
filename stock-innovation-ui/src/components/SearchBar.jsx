import { Search, TrendingUp, Loader2 } from 'lucide-react';
import PropTypes from 'prop-types';

const POPULAR_STOCKS = ['RELIANCE', 'TCS', 'INFY', 'HDFC', 'ICICIBANK'];

function SearchBar({
  ticker,
  setTicker,
  onSubmit,
  onSuggestionClick,
  loading,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="input-group">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder="Enter NSE Ticker (e.g., TCS)"
          className="search-input"
          disabled={loading}
        />
        <button
          type="submit"
          className="search-button"
          disabled={loading || !ticker.trim()}
        >
          {loading ? (
            <Loader2 className="spinner" size={20} />
          ) : (
            <TrendingUp size={20} />
          )}
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>

      <div className="examples">
        <span className="examples-label">Popular stocks:</span>
        <div className="examples-chips">
          {POPULAR_STOCKS.map((stock) => (
            <button
              key={stock}
              type="button"
              className={`example-chip ${loading && ticker === stock ? 'loading' : ''}`}
              onClick={() => onSuggestionClick(stock)}
              disabled={loading}
            >
              {loading && ticker === stock ? (
                <>
                  <Loader2 className="chip-spinner" size={14} />
                  {stock}
                </>
              ) : (
                stock
              )}
            </button>
          ))}
        </div>
      </div>
    </form>
  );
}

SearchBar.propTypes = {
  ticker: PropTypes.string.isRequired,
  setTicker: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSuggestionClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchBar;
