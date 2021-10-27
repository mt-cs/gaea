import React from "react";
import UpdateHistory from "./UpdateHistory";
import TotalData from "./TotalDataSize";
import ActiveDashboard from "./ActiveDashboards";
import MostUsed from "./MostUsedWorkloads";
import DailyUSers from "./DailyUsers";
import ReadMore from "./ReadMore";
import Logo from '../logo.png'

function SubHeader() {
    return (
      <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold">GAEA</h1>
      <p className="fs-6">
      Welcome to GAEA!<br/>
      Aut harum voluptatibus quia molestias, aperiam mollitia optio necessitatibus 
      magnam officia facilis soluta asperiores maiores sapiente tempora quidem 
      aliquid fugiat! Praesentium, architecto!
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Aut harum voluptatibus quia molestias, aperiam mollitia optio necessitatibus 
      magnam officia facilis soluta asperiores maiores sapiente tempora quidem 
      aliquid fugiat! Praesentium, architecto!
              `}
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
        <LinkItem/>
        <LinkItem/>
      </div>
      </div>
    )
  }

function Home(props) {

    return(
        <>
            <SubHeader/>
            <SummarySection dataArray={props.dashboardData}/>
            <DataSection dataArray={props.dashboardData}/>
            <LinkSection/>
            <UpdateHistory 
              columns={props.columns}
              data={props.data}
              />
        </>
    )
}

export default Home;