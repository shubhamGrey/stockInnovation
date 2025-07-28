import PropTypes from 'prop-types';

function FundamentalsTab({ analysis }) {
  if (!analysis?.evaluation_parameters?.company_fundamentals) return null;

  const fundamentals = analysis.evaluation_parameters.company_fundamentals;

  return (
    <div className="fundamentals-tab">
      <div className="card">
        <h3>Financial Health</h3>
        <p>{fundamentals.assessment}</p>
      </div>

      {fundamentals.key_metrics && (
        <div className="card">
          <h3>Key Metrics</h3>
          <div className="metrics-grid">
            {Object.entries(fundamentals.key_metrics).map(([key, value]) => (
              <div key={key} className="metric-card">
                <div className="metric-label">{key.replace(/_/g, ' ')}</div>
                <div className="metric-value">{value}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

FundamentalsTab.propTypes = {
  analysis: PropTypes.object,
};

export default FundamentalsTab;
