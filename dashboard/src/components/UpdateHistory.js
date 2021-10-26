import React from "react";
import DataTable from 'react-data-table-component';

function UpdateHistory(props) {
    return (
        <div className="table-responsive">
            <h3 className="text-center">Update History</h3>
            <DataTable
              pagination
              highlightOnHover
              columns={props.columns}
              data={props.data}
            />
        </div>
    )
}


export default UpdateHistory;