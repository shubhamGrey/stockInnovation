import PropTypes from 'prop-types';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'fundamentals', label: 'Fundamentals' },
  { id: 'technical', label: 'Technical' },
  { id: 'advice', label: 'Investment' },
  { id: 'risks', label: 'Risks & News' },
];

function TabNavigation({ activeTab, onTabChange }) {
  return (
    <div className="tab-navigation">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

TabNavigation.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default TabNavigation;
