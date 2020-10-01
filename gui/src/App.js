import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './routers';
import CustomLayout from './containers/Layout';
import 'antd/dist/antd.css';




function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter/>
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
