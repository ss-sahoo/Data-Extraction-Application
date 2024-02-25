import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadForm from './UploadForm';
import DisplayData from './DisplayData';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<UploadForm/>} />
          <Route path="/display" element={<DisplayData/>} />
        </Routes>
    </Router>
  );
};

export default App;