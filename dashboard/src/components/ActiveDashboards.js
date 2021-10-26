import React from "react";


function ActiveDashboard(props) {
  let activeDashboardCount= props.dataList.slice(1).length;
    return (          
        <div className="col-md-6">
        <div className="h-100 p-3 text-center bg-light rounded-3">
        <p>Number Of Active Dashboard</p>
        <h3>{activeDashboardCount}</h3>
        </div>
      </div>
    )
}

export default ActiveDashboard;