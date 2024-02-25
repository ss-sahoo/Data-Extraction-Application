import React from 'react';
import { useLocation } from 'react-router-dom';
import './DisplayData.css';
const DisplayData = () => {
    const location = useLocation();
    const responseData = location.state?.responseData;

  const downloadCSV = () => {
    if (responseData && responseData.length > 0) {
      const csvData = convertToCSV(responseData[0]); // Assuming responseData is an array with a single item
      const blob = new Blob([csvData], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.csv';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const convertToCSV = (data) => {
    const csvRows = [];
    const rows = data.split('\n');
    for (const row of rows) {
      const values = row.split(',');
      csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
  };

  return (
    <div className='container'>
      <h2>Response Data</h2>
      <button onClick={downloadCSV} className='button'>Download CSV</button>
      <div className='data-container'>{JSON.stringify(responseData, null, 2)}</div>
    </div>
  );
};

export default DisplayData;
