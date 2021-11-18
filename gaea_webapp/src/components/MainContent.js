import React from "react";
import { Route, Switch } from 'react-router-dom';
// import * as XLSX from 'xlsx';
import Home from './Home';
import ErrorPage from './ErrorPage';
import SearchPage from './Search';
import Footer from './Footer';
// import axios from 'axios';
// import updateCSV from '../status_progress-Sheet1.csv'

function MainContent() {

    return(
      <main className="col-md-9 ms-sm-auto col-lg-9">
        <Switch>
          <Route 
            path="/" 
            component={
              () => (
                <Home 
                  // dashboardData={dashboardData} 
                  // columns={columns}
                  // data={data}
                  />)} 
            exact 
          />
          <Route path="/search" component={() => (<SearchPage />)} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer/>
      </main>
    )
}

export default MainContent;