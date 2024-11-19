import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CompactChart from './CompactChart';
import ExpandedChart from './ExpandedChart';

const ViolationItem = ({ title, data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleChart = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>{title}</span>
        <Button variant="outline-primary" size="sm" onClick={toggleChart}>
          {isExpanded ? '-' : '+'}
        </Button>
      </div>
      <div style={{ marginTop: '10px' }}>
        {isExpanded ? <ExpandedChart data={data} /> : <CompactChart data={data} />}
      </div>
    </li>
  );
};

export default ViolationItem;