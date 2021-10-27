import React from "react";
import { FiClock } from "react-icons/fi";


function ActiveDashboard(props) {
  let activeDashboardCount= props.dataList.slice(1).length;
    return (          
        <div className="col-md-6">
        <div className="h-100 border p-3 bg-light rounded-3">
          <div className="justify-content-between row">
            <p className="col text-left">Number Of Active Dashboard</p>
            <FiClock className="my-icons text-right col-md-2"/>
          </div>
        <h3 className="text-center">{activeDashboardCount}</h3>
        </div>
      </div>
    )
}

export default ActiveDashboard;