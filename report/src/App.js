import React from 'react';
import './App.css';
//import LeadsBySourceList from './Leadbysourcelist';
//import LeadsIntoDealsList from './Leadsintodeals';
//import DealsBySourceList from './Dealsbysourcelist';
//import CommentsBySalesPerson from './Commentbysalesperson';
//import LeadsByProductList from './Leadbyproductlist';
import LeadsByStatusList from './Leadbystatuslist';

function App() {
  return (
    <div className="App">
      <LeadsByStatusList />
    </div>
  );
}

export default App;
