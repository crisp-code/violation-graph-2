import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HelmetViolationChart = ({ data, height }) => (
  <ResponsiveContainer width="100%" height={height}>
    <AreaChart
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis 
        dataKey="date"
        tickFormatter={(date) => new Date(date).toLocaleDateString()} 
        hide={height === 50}
      />
      <YAxis hide={height === 50} />
      <Tooltip formatter={(value) => [`${value}`, `헬멧 미착용 :`]} />
      <Legend />
      <Area type="monotone" dataKey="trafficVolume" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
);

export default HelmetViolationChart;