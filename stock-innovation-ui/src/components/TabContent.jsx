import PropTypes from 'prop-types';
import {
  OverviewTab,
  FundamentalsTab,
  TechnicalTab,
  InvestmentTab,
  RisksTab,
} from './tabs';

function TabContent({ activeTab, analysis }) {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab analysis={analysis} />;
      case 'fundamentals':
        return <FundamentalsTab analysis={analysis} />;
      case 'technical':
        return <TechnicalTab analysis={analysis} />;
      case 'advice':
        return <InvestmentTab analysis={analysis} />;
      case 'risks':
        return <RisksTab analysis={analysis} />;
      default:
        return <OverviewTab analysis={analysis} />;
    }
  };

  return <div className="tab-content">{renderTabContent()}</div>;
}

TabContent.propTypes = {
  activeTab: PropTypes.string.isRequired,
  analysis: PropTypes.object,
};

export default TabContent;
