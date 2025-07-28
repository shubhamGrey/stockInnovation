import { AlertCircle } from 'lucide-react';
import PropTypes from 'prop-types';

function ErrorDisplay({ error }) {
  if (!error) return null;

  return (
    <div className="error">
      <AlertCircle size={20} />
      <p>{error}</p>
    </div>
  );
}

ErrorDisplay.propTypes = {
  error: PropTypes.string,
};

export default ErrorDisplay;
