import React, {useEffect, useState} from "react";
import axios from 'axios';
import DataTable from 'react-data-table-component';


function SearchPage() {
  const [searchPool, setSearchPool] = useState([]);
  const [columns, setColumns] = useState([]);
  const [datas, setData] = useState([]);

  const handleDashboardData = () => {
    axios.get("http://10.105.184.110:8000/api/workload/")
    .then((res) => {
      const list = res.data;
      let tableList = list.filter(item => item['status'] === 'Completed' || item['status'] === 'In Progress')

      const headers = [];
      let url=[];
      for(let key in list[0]){
        if (key !== 'workload_url') {
          headers.push(key)
        } else {
          url = [{
            name: key,
            selector: row => row[key],
            button: true,
            cell: row => (
            <a className="btn btn-primary btn-sm" href={row[key]} target="_blank" rel="noopener noreferrer">
              Workload
            </a>
          ),
          }]
        }
      }
      const allColumns = headers.filter(item => item !== 'progress').map(c => (
        // c === 'workload_url' ? 
        // {
        //   name: c,
        //   selector: row => row[c],
        //   button: true,
        //   cell: row => (
        //     <a className="btn btn-primary" href={row[c]} target="_blank" rel="noopener noreferrer">
        //       Workload
        //     </a>
        //   ),
        // } :
        {
            name: c,
            selector: row => row[c],
          }));
      const columns = [...url, ...allColumns]
      setData(tableList)
      setSearchPool(tableList)
      setColumns(columns);
    })
    .catch((err) => console.log(err));
  }

    useEffect(handleDashboardData, []);

    const handleSubmit = (event) => {
      event.preventDefault();
   const workL = event.target.keyword.value
   const tag = event.target.tag.value
   const runID = event.target.runid.value

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
                    <label htmlFor="inputKeyword4">Workload</label>
                    <input name="keyword" type="text" className="form-control" id="inputKeyword4" placeholder="..." />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputRunID4">Run ID</label>
                    <input name="runid" type="text" className="form-control" id="inputRunID4" placeholder="..." />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputTag4">Tag</label>
                    <input name="tag" type="text" className="form-control" id="inputTag4" placeholder="..." />
                  </div>
                  <input id="filter" className="col-md-2 filter-btn" type="submit" value="Filter" />
                </div>
              </form>
            </div>
        
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