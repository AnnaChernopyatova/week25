import React from 'react';
import { Pie } from 'react-chartjs-2';


const data = {
  labels: ['Blue', 'Pink', 'Yellow', 'Purple', 'Red'],
  datasets: [
    {
      label: '# of Votes',
      data: [10, 20, 30, 15, 25],
      backgroundColor:[
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart =() => (
  < div className='pieChart'>
    <h1 className='pieChartTitle'>My First Pie Chart</h1>
    <Pie data={data} />
  </div>
)




export default PieChart;
