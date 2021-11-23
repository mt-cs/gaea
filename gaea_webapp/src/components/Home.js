import React, {useState, useEffect} from "react";
import axios from 'axios';
import UpdateHistory from "./UpdateHistory";
import TotalData from "./TotalDataSize";
import ActiveDashboard from "./ActiveDashboards";
import MostUsed from "./MostUsedWorkloads";
import DailyUSers from "./DailyUsers";
import ReadMore from "./ReadMore";
import Logo from '../logo.png';

function SubHeader() {
    return (
      <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold">GAEA</h1>
      <p className="fs-6">
      Welcome to GAEA!<br/>
      One stop workload data visualization, search, filter and progress history manager.
      </p>
      </div>
  
    )
  }
  function SummarySection(props) {
    return(
      <div className="col-md-12 py-3">
      <div className="row align-items-md-stretch">
        <TotalData dataList={props.dataArray}/>
        <ActiveDashboard dataList={props.dataArray}/>
      </div>
      </div>
    )
  }
  function DataSection(props) {
    return(
      <div className="col-md-12 py-3">
      <div className="row align-items-md-stretch">
        <MostUsed dataList={props.dataArray}/>
        <DailyUSers/>
      </div>
      </div>
    )
  }
  function LinkItem() {
    return (          
        <div className="col-md-4 img-link">
          <div className="h-100 border text-center bg-light rounded">
            <img alt="logo" src={Logo} className="h-50 rounded-circle d-block mx-auto"/>
            <ReadMore 
              className="h-50" 
              text={`
              Overview, wireframes, tech stack, and schema.
              `}
              link="https://github.com/CS601-F21/side-project-mt-cs/blob/main/README.md"
            />
          </div>
      </div>
    )
  }

  function LinkItem2() {
    return (          
        <div className="col-md-4 img-link">
          <div className="h-100 border text-center bg-light rounded">
            <img alt="logo" src={Logo} className="h-50 rounded-circle d-block mx-auto"/>
            <ReadMore 
              className="h-50" 
              text={`
              Installation and how to run this web app.
              `}
              link="https://github.com/CS601-F21/side-project-mt-cs/blob/main/gaea_webapp/README.md"
            />
          </div>
      </div>
    )
  }
  function LinkSection() {
    return(
      <div className="col-md-12 py-3">
      <div className="row align-items-md-stretch">
        <LinkItem/>
        <LinkItem2/>
        <LinkItem/>
      </div>
      </div>
    )
  }

  function Home() {
    const [dashboardData, setDashboardData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);
  
    const handleDashboardData = () => {
      axios.get("http://10.105.184.110:8000/api/workload/")
      .then((res) => {
        const list = res.data;
        const headers = [];
        for(let key in list[0]){
          if(key === 'status' || key === 'run_id' || key === 'progress' || key === 'steps'){
          headers.push(key)
          }
        }
        const columnsone = headers.map(c => (c === 'status' ?{
          name: c,
          selector: row => row[c],
          sortable: true,
          cell: row => 
          <div className="row align-items-center text-left">
            <div 
              className={
                `${row[c] === 'Completed' ? "progress-complete" : 
                row[c] === 'In Progress' ? "progress" :
                row[c] === 'Error' ? "progress-cancel" :
                ''
                }`}>
            </div> 
            {row[c]}
          </div>,
  
        } : c === 'progress' ?{
          name: c,
          selector: row => row[c],
          sortable: true,
          cell: row => {
            const ps = row[c].slice(1).map((item,index)=>{
              return(
                <p key={index}>{item}</p>
              )
            })
            return(
              <div className="dropdown">
                <button className="dropbtn">{row[c].slice(0,1)}</button>               
                <div className="dropdown-content">
                  {ps}
                </div>
              </div>
            )
  },
  
        } :
        {
        name: c,
        selector: row => row[c],
        sortable: true,
      }
        ));
        const columnstwo = [{
          name: '',
          selector: row => row['status'],
          button: true,
          cell: row => row['status'] === 'Completed' ? (
            <a className="btn btn-primary" href='https://www.w3schools.com/' target="_blank" rel="noopener noreferrer">
              Workload
            </a>
          ) : '',
        }]
        const columns = [...columnsone, ...columnstwo]
        setData(list);
        setColumns(columns);
        setDashboardData(list)
        // setDashboardData(list)
      })
      .catch((err) => console.log(err));
        // handleUpdateData()
    }
  
      // const handleUpdateData = () => {
      //   axios.get("http://localhost:8000/api/workload/")
      //   .then((res) => {
      //     const list = res.data;
      //     const headers = [];
      //     for(let key in list[0]){
      //       headers.push(key)
      //     }
      //         // prepare columns list from headers
      //     const columns = headers.map(c => (c === 'Status' ?{
      //       name: c,
      //       selector: row => row[c],
      //       sortable: true,
      //       cell: row => 
      //       <div className="row align-items-center text-left">
      //         <div 
      //           className={
      //             `${row[c] === 'Completed' ? "progress-complete" : 
      //             row[c] === 'In Progress' ? "progress" :
      //             "progress-cancel"}`}>
      //         </div> 
      //         {row[c]}
      //       </div>,
  
      //     } : 
      //     {
      //     name: c,
      //     selector: row => row[c],
      //     sortable: true,
      //   }
      //     ));
      //     setData(list);
      //     setColumns(columns);
      //     setDashboardData(list)
      //   })
      //   .catch((err) => console.log(err));
        
      // }
    
      useEffect(() => {
        window.addEventListener('load', handleDashboardData);
    
      });
  
  
      return(
          <>
              <SubHeader/>
              <SummarySection dataArray={dashboardData}/>
              <DataSection dataArray={dashboardData}/>
              <LinkSection/>
              <UpdateHistory 
                columns={columns}
                data={data}
                />
          </>
      )
  }
  
  export default Home;