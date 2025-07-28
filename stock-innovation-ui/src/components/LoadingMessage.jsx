import { Clock, TrendingUp, AlertCircle } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function LoadingMessage({ ticker, startTime }) {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    if (!startTime) return;

    const interval = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  const isLongRunning = elapsedSeconds > 120; // 2 minutes

  return (
    <div className="loading-message">
      <div className="loading-header">
        <TrendingUp size={24} className="loading-icon" />
        <h3>Analyzing {ticker}</h3>
        {isLongRunning && (
          <AlertCircle size={20} className="warning-icon" />
        )}
      </div>
      
      <div className="loading-content">
        <p>
          Our AI is performing comprehensive analysis on {ticker} stock. 
          This includes fundamental analysis, technical indicators, market sentiment, 
          and risk assessment.
        </p>
        
        {isLongRunning && (
          <div className="long-running-notice">
            <p>
              <strong>Analysis is taking longer than usual.</strong> This may be due to high server load 
              or complex market conditions requiring deeper analysis.
            </p>
          </div>
        )}
        
        <div className="loading-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ 
                width: `${Math.min((elapsedSeconds / 180) * 100, 100)}%` 
              }}
            />
          </div>
          
          <div className="loading-stats">
            <div className="stat">
              <Clock size={16} />
              <span>
                {minutes > 0 ? `${minutes}m ` : ''}{seconds}s elapsed
              </span>
            </div>
            <div className="stat">
              <span className={`estimated-time ${isLongRunning ? 'warning' : ''}`}>
                {isLongRunning ? 'Please wait...' : 'Estimated: 2-3 minutes'}
              </span>
            </div>
          </div>
        </div>

        <div className="loading-tips">
          <h4>💡 What we're analyzing:</h4>
          <ul>
            <li>📊 Financial fundamentals and ratios</li>
            <li>📈 Technical indicators and patterns</li>
            <li>📰 Recent news and market sentiment</li>
            <li>⚠️ Risk factors and volatility analysis</li>
            <li>💰 Investment recommendations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

LoadingMessage.propTypes = {
  ticker: PropTypes.string.isRequired,
  startTime: PropTypes.number,
};

export default LoadingMessage;
