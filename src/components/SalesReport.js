import './GlobalComponent.css'
import React, {useState, useEffect} from 'react'

import { Line } from "react-chartjs-2";

const SalesReport = () => {
  const [chardData, setChartData]=useState({})
  const options = {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 10,
          beginAtZero: true,
          display: false
        }
      }],
    },
  }
  const chart = () => {
    setChartData({
      labels: ['','','','','','','','','','','','','','','','','',''],
      datasets: [
        {
          label: 'Label1',
          data: [5,8,11,10,10.5,12,15,12,10.2,15,22,20,18.7,25,26,30,32,34],
          backgroundColor: 'rgba(255,108,64,1)',
          borderColor: 'rgba(255,108,64,1)',
          borderWidth: 3,
          fill: false,
          pointRadius: 0,
          pointHitRadius: 10,
          pointBackgroundColor:'rgba(255,108,64,1)',
          pointHoverRadius:8,
        },
        {
          label: 'Label2',
          data: [5,7,9,8,10,12,16,15,17,17,16,16.5,20,22,24,25,26,28],
          backgroundColor: 'rgba(130,106,249,1)',
          borderColor: 'rgba(130,106,249,1)',
          borderWidth: 3,
          fill: false,
          pointRadius: 0,
          pointBackgroundColor:'rgba(130,106,249,1)',
          pointHoverRadius:8,
        },
        {
          label: 'Label3',
          data: [5,6,6.5,8,9,7,6,8,12,14,16,12,18,17,20,22,24,25],
          backgroundColor: 'rgba(255,231,0,1)',
          borderColor: 'rgba(255,231,0,1)',
          borderWidth: 3,
          fill: false,
          pointRadius: 0,
          pointBackgroundColor:'rgba(255,231,0,1)',
          pointHoverRadius:8
        }
      ]
    })
  }

  useEffect(()=>{
    chart()
  },[])
  return(
    <div className='SalesReportRectangel'>
      <div className="SubSalesConatiner">
        <div className="HeadingContainer">
          <div className="Heading">
            Sales Report
          </div>
          <div className="Heading2">
            September 2020
          </div>
        </div>
        <div className="GraphContainer">
         <Line data={chardData} options={options} />
        </div>
      </div>
      <div className="RightSalesContainer">
        <div className="SalesDate">17 Sep</div>
        <div className="RevQuoContainer">
          <div className="Revenue">
            <div className="RevenueRate">$1,204.33</div>
            <div className="RevenueText">Revenue</div>
          </div>
          <div className="Quotations">
            <div className="QuotationsCount">33</div>
            <div className="QuotationsCount">Quotations</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SalesReport