import React from "react";
import {Bar} from 'react-chartjs-2'

function sortByValue(a, b) {
  return b[8] - a[8];
}
      
function MostUsed(props) {
  const state = {
    labels: [],
    datasets: [
      {
        label: 'Most Used',
        backgroundColor: '#6a9ecc',
        borderColor: 'rgba(184,206,224,1)',
        borderWidth: 1,
        data: []
      }
    ]
  }
  let sortedData = props.dataList.slice(1).sort(sortByValue);
  let topTen = sortedData.slice(0, 10)
    for(var i in topTen){
    state.datasets[0].data.push(topTen[i][8]);
    state.labels.push(topTen[i][0]);
  };
  return(
    <div className="col-md-6">
          <div className="h-100 p-2 border bg-light rounded-3">
          <p>Top 10 Most Used Dashboard</p>
          <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
          </div>
          </div>
  )
}

export default MostUsed;