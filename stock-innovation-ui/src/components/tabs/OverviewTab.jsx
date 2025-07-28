import PropTypes from 'prop-types';

function OverviewTab({ analysis }) {
  if (!analysis) return null;

  return (
    <div className="overview-tab">
      {analysis.stock_summary?.description && (
        <div className="card">
          <h3>Company Overview</h3>
          <p>{analysis.stock_summary.description}</p>
        </div>
      )}

      {analysis.stock_summary?.historical_performance && (
        <div className="card">
          <h3>Performance Overview</h3>
          <div className="performance-grid">
            {Object.entries(analysis.stock_summary.historical_performance).map(
              ([period, value]) => (
                <div
                  key={period}
                  className={`performance-metric ${value.startsWith('-') ? 'negative' : 'positive'}`}
                >
                  <div className="metric-period">
                    {period.replace('_', ' ')}
                  </div>
                  <div className="metric-value">{value}</div>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {analysis.overall_rating && (
        <div className="card">
          <h3>Overall Assessment</h3>
          <div className="rating-explanation">
            <p>{analysis.overall_rating.justification}</p>
          </div>
        </div>
      )}
    </div>
  );
}

OverviewTab.propTypes = {
  analysis: PropTypes.object,
};

export default OverviewTab;
