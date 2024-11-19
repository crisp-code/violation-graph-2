import React, { useState, useEffect } from 'react';
import ViolationItem from './ViolationItem';
import { parseHelmetData, parseLaneViolationData, parseReverseDrivingData, parseCenterLineViolationData } from '../../utils';
import './ViolationList.css';

const ViolationList = () => {
  const [helmetData, setHelmetData] = useState([]);
  const [laneData, setLaneData] = useState([]);
  const [reverseDrivingData, setReverseDrivingData] = useState([]);
  const [centerLineData, setCenterLineData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/cctv_violation_data_20231115_to_20251115_dataset_1.csv');
        const csvText = await response.text();
        setHelmetData(parseHelmetData(csvText));
        setLaneData(parseLaneViolationData(csvText, 30));
        setReverseDrivingData(parseReverseDrivingData(csvText, 10));
        setCenterLineData(parseCenterLineViolationData(csvText, 10));
      } catch (error) {
        console.error('Error fetching CSV data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="violation-list">
      <h2>위반 항목 목록</h2>
      <ul>
        <ViolationItem title="헬멧 미착용 그래프" data={helmetData} />
        <ViolationItem title="1차선 주행 그래프" data={laneData} />
        <ViolationItem title="역주행 그래프" data={reverseDrivingData} />
        <ViolationItem title="중앙선 침범 그래프" data={centerLineData} />
      </ul>
    </div>
  );
};

export default ViolationList;