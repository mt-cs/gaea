import React from "react";
import DataTable from 'react-data-table-component';

function DailyUSers(props) {
    return (          
        <div className="col-md-6 text-center">
        <div className="h-100 border p-3 bg-light rounded-3">
        <p>Page Hits Per Day</p>
        <div className="table-responsive">
            <DataTable
            pagination
            highlightOnHover
            columns={props.pageHitsHeaders}
            data={props.pageHitsContents}
            />
        </div>
        </div>
      </div>
    )
}

export default DailyUSers;