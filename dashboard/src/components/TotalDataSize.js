import React from "react";
import { FiDatabase } from "react-icons/fi";


function TotalData(props) {
    let dataSize = 0;
    let cellData = props.dataList.slice(1);
    for(var i in cellData) {
    let valueSize = cellData[i][8]
    dataSize = dataSize + valueSize;
    }
    return (
        <div className="col-md-6">
            <div className="h-100 border p-3 bg-light rounded-3">
                <div className="justify-content-between row">
                    <p className="col text-left">Total Data Size</p>
                    <FiDatabase className="my-icons text-right col-md-2"/>
                </div>
                <h3 className="text-center">{dataSize}</h3>
            </div>
        </div>
    )
}

export default TotalData;