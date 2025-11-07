import React from 'react';
import './App.css';
//import LeadsBySourceList from './Leadbysourcelist';
//import LeadsIntoDealsList from './Leadsintodeals';
//import DealsBySourceList from './Dealsbysourcelist';
//import CommentsBySalesPerson from './Commentbysalesperson';
//import LeadsByProductList from './Leadbyproductlist';
//import LeadsByStatusList from './Leadbystatuslist';
//import LeadsByProductChart from './Leadproductgraph';
//import LeadsByStatus from './Leadstatusgraph';
import SalespersonLeadsChart from './Salespersonleads';

function App() {
  return (
    <div className="App">
      <SalespersonLeadsChart />
    </div>
  );
}

export default App;
