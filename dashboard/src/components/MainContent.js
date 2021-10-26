import React, {useState, useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import * as XLSX from 'xlsx';
import Home from './Home';
import ErrorPage from './ErrorPage';
import SearchPage from './Search';
import Footer from './Footer';
import dashBoardCSV from '../workload_sample_data-Sheet1.csv'
import updateCSV from '../status_progress-Sheet1.csv'





function MainContent() {
  const [dashboardData, setDashboardData] = useState([]);
  // const [progressData, setProgressData] = useState(false);
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
      // process CSV data
  const processData = dataString => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
    // console.log(dataStringLines)
    // console.log(headers)
    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if (headers && row.length === headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] === '"')
              d = d.substring(1, d.length - 1);
            if (d[d.length - 1] === '"')
              d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter(x => x).length > 0) {
          list.push(obj);
        }
      }
    }

    // prepare columns list from headers
    const columns = headers.map(c => ({
      name: c,
      selector: c,
    }));

    setData(list);
    setColumns(columns);
  }


  const handleDashboardData = () => {
    /* set up an async GET request */
    const url = dashBoardCSV
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
  
    req.onload = function(e) {
      /* parse the data when it is received */
      var datad = new Uint8Array(req.response);
      var workbook = XLSX.read(datad, {type:"array"});
      /* convert from workbook to array of arrays */
      var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
      var jsonData = XLSX.utils.sheet_to_json(first_worksheet, {header:1});
      // var workbookcsv = XLSX.utils.sheet_to_csv(first_worksheet, { header: 1 });
      // setWorkbookData(workbookcsv)
      let result = []
      for(var i in jsonData)
      result.push(jsonData[i]);
      setDashboardData(result)
      handleUpdateData()
    };
    req.send();
    }
    const handleUpdateData = () => {
      /* set up an async GET request */
      let url = updateCSV
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.responseType = "arraybuffer";
    
      req.onload = function(e) {
        /* parse the data when it is received */
        var datad = new Uint8Array(req.response);
        var workbook = XLSX.read(datad, {type:"array"});
        /* convert from workbook to array of arrays */
        var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
        var jsonData = XLSX.utils.sheet_to_json(first_worksheet, {header:1});
        let result = []
        for(var i in jsonData)
        result.push(jsonData[i]);
        // setProgressData(true)
          // /* Get first worksheet */
          /* Convert array of arrays */
          const csvdata = XLSX.utils.sheet_to_csv(first_worksheet, { header: 1 });
          processData(csvdata);
    
      };
      req.send();
          
            }
  
    useEffect(() => {
      window.addEventListener('load', handleDashboardData);
  
    });

    return(
      <main className="col-md-9 ms-sm-auto col-lg-9">
        <Switch>
          <Route 
            path="/" 
            component={
              () => (
                <Home 
                  dashboardData={dashboardData} 
                  columns={columns}
                  data={data}
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