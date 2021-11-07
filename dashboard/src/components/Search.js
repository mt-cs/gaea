import React, {useEffect, useState} from "react";
import DataTable from 'react-data-table-component';
import axios from 'axios';
// import dashBoardCSV from '../workload_sample_data-Sheet1.csv'
// import * as XLSX from 'xlsx';

function SearchPage(props) {
  const [searchPool, setSearchPool] = useState([]);
  const [columns, setColumns] = useState([]);
  const [datas, setData] = useState([]);
  const [search, setSearch] = React.useState('');
  
  // Reading from CSV

  // const processData = dataString => {
  //   const dataStringLines = dataString.split(/\r\n|\n/);
  //   const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
  //   // console.log(dataStringLines)
  //   // console.log(headers)
  //   const list = [];
  //   for (let i = 1; i < dataStringLines.length; i++) {
  //     const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
  //     if (headers && row.length === headers.length) {
  //       const obj = {};
  //       for (let j = 0; j < headers.length; j++) {
  //         let d = row[j];
  //         if (d.length > 0) {
  //           if (d[0] === '"')
  //             d = d.substring(1, d.length - 1);
  //           if (d[d.length - 1] === '"')
  //             d = d.substring(d.length - 2, 1);
  //         }
  //         if (headers[j]) {
  //           obj[headers[j]] = d;
  //         }
  //       }

  //       // remove the blank rows
  //       if (Object.values(obj).filter(x => x).length > 0) {
  //         list.push(obj);
  //       }
  //     }
  //   }

  //   // prepare columns list from headers
  //   const columns = headers.map(c => ({
  //     name: c,
  //     selector: c,
  //   }));
  //   setData(list)
  //   setSearchPool(list)
  //   setColumns(columns);
  // }


  // const handleDashboardData = () => {
  //   /* set up an async GET request */
  //   const url = dashBoardCSV
  //   var req = new XMLHttpRequest();
  //   req.open("GET", url, true);
  //   req.responseType = "arraybuffer";
  
  //   req.onload = function(e) {
  //     /* parse the data when it is received */
  //     var datad = new Uint8Array(req.response);
  //     var workbook = XLSX.read(datad, {type:"array"});
  //     /* convert from workbook to array of arrays */
  //     var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
  //     var workbookcsv = XLSX.utils.sheet_to_csv(first_worksheet, { header: 1 });
  //     processData(workbookcsv)
  //   };
  //   req.send();
  //   }

  // useEffect(handleDashboardData, []);

  //   const handleSearch = (event) => {
  //     const searchItem = event.target.value;
  //   setSearch(searchItem);

  //   const res = searchPool.filter((item) =>
  //         item['Workload'].toLowerCase().includes(searchItem.toLowerCase())
  //       )
  //       setData(res);
  //   };
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //  const workL = event.target.keyword.value
  //  const tag = event.target.tag.value
  //  const runID = event.target.runid.value
  //   //   const searchItem = event.target.value;
  //   // setSearch(searchItem);

  //   const res = searchPool.filter((item) =>
  //         item['Workload'].toLowerCase().includes(workL.toLowerCase())
  //       ).filter((item) => 
  //       item['Run ID'].toLowerCase().includes(runID.toLowerCase())
  //       ).filter((item) => item['Tags'].toLowerCase().includes(tag.toLowerCase()))
  //       setData(res);
  //   };

// Connecting to Django with axios

  const handleDashboardData = () => {
    axios.get("http://10.105.184.110:8000/api/workload/")
    .then((res) => {
      const list = res.data;
      const headers = [];
      for(let key in list[0]){
        headers.push(key)
      }
      const columns = headers.map(c => ({
            name: c,
            selector: c,
          }));
      console.log(list)
      setData(list)
      setSearchPool(list)
      setColumns(columns);
    })
    .catch((err) => console.log(err));
  }
    
  useEffect(handleDashboardData, []);

  const handleSearch = (event) => {
    const searchItem = event.target.value;
  setSearch(searchItem);

  const res = searchPool.filter((item) =>
        item['workload_name'].toLowerCase().includes(searchItem.toLowerCase())
      )
      setData(res);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
 const workL = event.target.keyword.value
 const tag = event.target.tag.value
 const runID = event.target.runid.value
  //   const searchItem = event.target.value;
  // setSearch(searchItem);

  const res = searchPool.filter((item) =>
        item['workload_name'].toLowerCase().includes(workL.toLowerCase())
      ).filter((item) => 
      item['run_id'].toLowerCase().includes(runID.toLowerCase())
      ).filter((item) => item['tags'].toLowerCase().includes(tag.toLowerCase()))
      setData(res);
  };
    
  return(
      <div className="col-md-12">
          <div className="py-5 filter-box">
            <form onSubmit={handleSubmit}>
              <div className="form-row row filter-form">
                <div className="form-group col-md-3">
                  <label for="inputKeyword4">Workload</label>
                  <input name="keyword" type="text" className="form-control" id="inputKeyword4" placeholder="..." />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputRunID4">Run ID</label>
                  <input name="runid" type="text" className="form-control" id="inputRunID4" placeholder="..." />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputTag4">Tag</label>
                  <input name="tag" type="text" className="form-control" id="inputTag4" placeholder="..." />
                </div>
                <input id="filter" className="col-md-2 filter-btn" type="submit" value="Filter" />
              </div>
            </form>
          </div>
          <input className="offset-md-10 col-md-2" value={search} placeholder="Search" id="search" type="text" onChange={handleSearch} />
      
          <DataTable
            pagination
            highlightOnHover
            columns={columns}
            data={datas.slice(0,20)}
          />
      </div>
  )
}

export default SearchPage;