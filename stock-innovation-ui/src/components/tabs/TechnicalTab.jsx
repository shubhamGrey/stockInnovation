import PropTypes from 'prop-types';

function TechnicalTab({ analysis }) {
  if (!analysis?.evaluation_parameters?.current_and_future_price_trends)
    return null;

  const trends = analysis.evaluation_parameters.current_and_future_price_trends;

  return (
    <div className="technical-tab">
      <div className="card">
        <h3>Market Trends</h3>
        <p>{trends.assessment}</p>
      </div>

      {trends.technical_indicators && (
        <div className="card">
          <h3>Technical Analysis</h3>
          <p>{trends.technical_indicators}</p>
        </div>
      )}

      {trends.historical_trends && (
        <div className="card">
          <h3>Historical Trends</h3>
          <p>{trends.historical_trends}</p>
        </div>
      )}
    </div>
  );
}

TechnicalTab.propTypes = {
  analysis: PropTypes.object,
};

export default TechnicalTab;
