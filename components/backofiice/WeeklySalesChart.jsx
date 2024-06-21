"use client";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
const { faker } = require('@faker-js/faker');

export default function WeeklySalesChart() {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


  const tabs = [
    {
      title: "Sales",
      type: "Sales",
      data: {
        labels,
        datasets: [
          {
            label: 'Sales',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      }
    },
    {
      title: "Orders",
      type: "Orders",
      data :{
        labels,
        datasets: [
          {
            label: 'Orders',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }
    },
  ];
  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);
  // line chart 
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: `${chartToDisplay} Line Chart`,
      },
    },
  };
 
  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
  //       borderColor: 'rgb(255, 99, 132)',
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     // {
  //     //   label: 'Dataset 2',
  //     //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
  //     //   borderColor: 'rgb(53, 162, 235)',
  //     //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     // },
  //   ],
  // };
  return (
    <div className='bg-slate-700 rounded-lg p-8'>
      <h2>WeeklySalesChart</h2>
      {/* tabs */}

      <div className='text-sm font-medium text-center text-gray-200 border-b border-gray-500 dark:text-gray-400 dark:border-gray-700'>
        <ul className='flex flex-wrap -mb-px'>
          {tabs.map((tab, i) => {
            return(
              <li className='me-2'>
              <button onClick={()=> setChartToDisplay(tab.type)}
                href=''
                className={chartToDisplay==tab.type?"inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500" :"inline-block p-4 hover:text-gray-600 border-b-2 hover:border-gray-100 rounded-t-lg active dark:text-orange-200 dark:border-orange-200"}
                aria-current='page'
              >
                {tab.title}
              </button>
            </li>
            )
          }
          
          )}
 
        </ul>
      </div>

      {/* content to display */}
          {
            tabs.map((tab,i)=>{
              if(chartToDisplay===tab.type){
                return(
                  <Line options={options} data={tab.data} />
              )
              }else{
                return null;
              }
              
            })
          }
         
    </div>
  );
}
