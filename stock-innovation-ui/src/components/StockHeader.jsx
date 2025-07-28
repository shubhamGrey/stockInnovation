import PropTypes from 'prop-types';

function StockHeader({ analysis, ticker }) {
  if (!analysis) return null;

  return (
    <div className="stock-header">
      <div className="stock-info">
        <div className="company-name">
          {analysis.stock_summary?.company_name || ticker.toUpperCase()}
        </div>
        <div className="stock-meta">
          <span className="ticker">{analysis.stock_summary?.ticker}</span>
          <span className="exchange">{analysis.stock_summary?.exchange}</span>
        </div>
      </div>
      <div className="price-info">
        <div className="current-price">
          {analysis.stock_summary?.current_price}
        </div>
        <div className="market-cap">{analysis.stock_summary?.market_cap}</div>
      </div>
      <div className="rating-badge">
        <div className="rating-score">{analysis.overall_rating?.rating}</div>
        <div className="rating-label">Rating</div>
      </div>
    </div>
  );
}

StockHeader.propTypes = {
  analysis: PropTypes.object,
  ticker: PropTypes.string.isRequired,
};

export default StockHeader;
