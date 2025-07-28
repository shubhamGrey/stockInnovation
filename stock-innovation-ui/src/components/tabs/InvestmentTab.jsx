import PropTypes from 'prop-types';

function InvestmentTab({ analysis }) {
  if (!analysis?.investment_advice) return null;

  const advice = analysis.investment_advice;

  return (
    <div className="advice-tab">
      <div className="outlook-cards">
        <div className="outlook-card short-term">
          <h4>1 Week</h4>
          <p>{advice.next_1_weeks_outlook}</p>
        </div>
        <div className="outlook-card medium-term">
          <h4>5 Weeks</h4>
          <p>{advice.next_5_weeks_outlook}</p>
        </div>
        <div className="outlook-card long-term">
          <h4>10 Weeks</h4>
          <p>{advice.next_10_weeks_outlook}</p>
        </div>
      </div>

      {advice.price_action_suggestions && (
        <div className="card">
          <h3>Action Plan</h3>
          <div className="action-grid">
            {Object.entries(advice.price_action_suggestions).map(
              ([action, suggestion]) => (
                <div
                  key={action}
                  className={`action-card ${action.toLowerCase()}`}
                >
                  <div className="action-type">{action.toUpperCase()}</div>
                  <p>{suggestion}</p>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

InvestmentTab.propTypes = {
  analysis: PropTypes.object,
};

export default InvestmentTab;
