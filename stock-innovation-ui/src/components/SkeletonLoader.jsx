import PropTypes from 'prop-types';

// Base skeleton component
function Skeleton({ className = '', width = '100%', height = '1rem', ...props }) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ width, height }}
      {...props}
    />
  );
}

// Stock header skeleton
function StockHeaderSkeleton() {
  return (
    <div className="stock-header skeleton-container">
      <div className="stock-info">
        <Skeleton width="200px" height="1.5rem" className="mb-2" />
        <div className="stock-meta">
          <Skeleton width="80px" height="1rem" className="mr-3" />
          <Skeleton width="60px" height="1rem" />
        </div>
      </div>
      <div className="price-info">
        <Skeleton width="120px" height="2rem" className="mb-1" />
        <Skeleton width="100px" height="1rem" />
      </div>
      <div className="rating-badge">
        <Skeleton width="60px" height="2rem" className="mb-1" />
        <Skeleton width="50px" height="0.75rem" />
      </div>
    </div>
  );
}

// Tab content skeleton
function TabContentSkeleton() {
  const metricItems = Array.from({ length: 4 }, (_, i) => `metric-${i}`);
  
  return (
    <div className="tab-content skeleton-container">
      <div className="content-grid">
        {/* Main content area */}
        <div className="main-content">
          <Skeleton width="200px" height="1.5rem" className="mb-4" />
          <div className="card">
            <Skeleton width="150px" height="1.25rem" className="mb-3" />
            <Skeleton width="100%" height="4rem" className="mb-3" />
            <Skeleton width="80%" height="1rem" className="mb-2" />
            <Skeleton width="90%" height="1rem" className="mb-2" />
            <Skeleton width="70%" height="1rem" />
          </div>
          <div className="card">
            <Skeleton width="180px" height="1.25rem" className="mb-3" />
            <div className="grid grid-2">
              <div>
                <Skeleton width="100%" height="3rem" className="mb-2" />
                <Skeleton width="80%" height="1rem" />
              </div>
              <div>
                <Skeleton width="100%" height="3rem" className="mb-2" />
                <Skeleton width="75%" height="1rem" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="sidebar">
          <div className="card">
            <Skeleton width="120px" height="1.25rem" className="mb-3" />
            {metricItems.map((itemId) => (
              <div key={itemId} className="metric-item">
                <Skeleton width="100%" height="1rem" className="mb-1" />
                <Skeleton width="60%" height="1.5rem" className="mb-3" />
              </div>
            ))}
          </div>
          <div className="card">
            <Skeleton width="140px" height="1.25rem" className="mb-3" />
            <Skeleton width="100%" height="6rem" />
          </div>
        </div>
      </div>
    </div>
  );
}

// List skeleton for tables/lists
function ListSkeleton({ items = 5 }) {
  const listItems = Array.from({ length: items }, (_, i) => `list-item-${i}`);
  
  return (
    <div className="list-skeleton">
      {listItems.map((itemId) => (
        <div key={itemId} className="list-item-skeleton">
          <Skeleton width="100%" height="3rem" className="mb-2" />
        </div>
      ))}
    </div>
  );
}

// Chart skeleton
function ChartSkeleton() {
  return (
    <div className="chart-skeleton">
      <Skeleton width="150px" height="1.25rem" className="mb-3" />
      <Skeleton width="100%" height="200px" />
    </div>
  );
}

// Card skeleton
function CardSkeleton({ title = true, lines = 3 }) {
  const cardLines = Array.from({ length: lines }, (_, i) => `card-line-${i}`);
  
  return (
    <div className="card skeleton-container">
      {title && <Skeleton width="150px" height="1.25rem" className="mb-3" />}
      {cardLines.map((lineId, index) => (
        <Skeleton 
          key={lineId} 
          width={index === lines - 1 ? "70%" : "100%"} 
          height="1rem" 
          className="mb-2" 
        />
      ))}
    </div>
  );
}

// Main loading skeleton component
function LoadingSkeleton() {
  const tabItems = Array.from({ length: 5 }, (_, i) => `tab-${i}`);
  
  return (
    <div className="results">
      <StockHeaderSkeleton />
      
      {/* Tab navigation skeleton */}
      <div className="tab-navigation skeleton-container">
        {tabItems.map((tabId) => (
          <Skeleton key={tabId} width="100px" height="2.5rem" className="tab-skeleton" />
        ))}
      </div>
      
      <TabContentSkeleton />
    </div>
  );
}

Skeleton.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

ListSkeleton.propTypes = {
  items: PropTypes.number,
};

CardSkeleton.propTypes = {
  title: PropTypes.bool,
  lines: PropTypes.number,
};

export {
  Skeleton,
  StockHeaderSkeleton,
  TabContentSkeleton,
  ListSkeleton,
  ChartSkeleton,
  CardSkeleton,
  LoadingSkeleton,
};

export default LoadingSkeleton;
