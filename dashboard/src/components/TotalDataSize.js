import React from "react";


function TotalData(props) {
    let dataSize = 0;
    let cellData = props.dataList.slice(1);
    for(var i in cellData) {
    let valueSize = cellData[i][8]
    dataSize = dataSize + valueSize;
    }
    return (
        <div className="col-md-6">
            <div className="h-100 p-3 text-center bg-light rounded-3">
                <p>Total Data Size</p>
                <h3>{dataSize}</h3>
            </div>
        </div>
    )
}

export default TotalData;