import React from "react";


function DailyUSers(props) {
    return (          
        <div className="col-md-6 text-center">
        <div className="h-100 border p-3 bg-light rounded-3">
        <p>Page Hits Per Day</p>
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Total Hits</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
        </div>
      </div>
    )
}

export default DailyUSers;