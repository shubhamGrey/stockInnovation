import PropTypes from 'prop-types';

function RisksTab({ analysis }) {
  if (!analysis?.evaluation_parameters) return null;

  const { red_flags, news_and_sentiment } = analysis.evaluation_parameters;

  return (
    <div className="risks-tab">
      {red_flags && red_flags.length > 0 && (
        <div className="card">
          <h3>Risk Factors</h3>
          <div className="risk-list">
            {red_flags.map((flag) => (
              <div key={flag.flag} className="risk-item">
                <h4>{flag.flag}</h4>
                <p>{flag.details}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {news_and_sentiment && (
        <div className="card">
          <h3>Market Sentiment</h3>
          <p className="sentiment-overview">{news_and_sentiment.assessment}</p>

          {(() => {
            const positiveItems = news_and_sentiment.positive_sentiment?.filter((item) => item && item.trim().length > 0) || [];
            const negativeItems = news_and_sentiment.negative_sentiment?.filter((item) => item && item.trim().length > 0) || [];
            
            if (positiveItems.length === 0 && negativeItems.length === 0) {
              return (
                <div className="sentiment-empty">
                  <p>No specific sentiment factors identified in recent analysis.</p>
                </div>
              );
            }

            return (
              <div className="sentiment-columns">
                {positiveItems.length > 0 && (
                  <div className="sentiment-column positive">
                    <h4>Positive Factors</h4>
                    <ul>
                      {positiveItems.map((item) => (
                        <li key={item.substring(0, 50)}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {negativeItems.length > 0 && (
                  <div className="sentiment-column negative">
                    <h4>Negative Factors</h4>
                    <ul>
                      {negativeItems.map((item) => (
                        <li key={item.substring(0, 50)}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}

RisksTab.propTypes = {
  analysis: PropTypes.object,
};

export default RisksTab;
