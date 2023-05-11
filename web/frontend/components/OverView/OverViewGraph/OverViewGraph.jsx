import React from 'react';
import './OverViewGraph.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
const pdata = [
  {
    name: '$0k',
    student: 60000,
    fees: 40000
  },
  {
    name: '$100k',
    student:50000,
    fees: 35000
  },
  {
    name: '$200k',
    student: 60000,
    fees: 40000
  },
  {
    name: '$350k',
    student: 95000,
    fees: 50000
  },
  {
    name: '$500k',
    student: 80000,
    fees: 40000
  },
  {
    name: '$600k',
    student: 70000,
    fees: 50000
  },
  {
    name: '$800k',
    student: 60000,
    fees: 40000
  },
  {
    name: '$900k',
    student: 70000,
    fees: 50000
  },
  {
    name: '$1000k',
    student: 70000,
    fees: 50000
  },
  {
    name: '$600k',
    student: 80000,
    fees: 60000
  }
];

const OverViewGraph = () => {
  return (
    <section className='OverViewGraph-section-os'>
      <h1 className="chart-heading">Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} width={500} height={300} margin={{ top: 5, right: 10, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value 
            // + " Programming"
            } />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      {/* <h1 className="chart-heading">Area Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>

      <h1 className="chart-heading">Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer> */}
    </section>
  );
}
export default OverViewGraph



// import React from 'react';
// import { Line } from 'react-chartjs-2';

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First Dataset',
//       data: [65, 59, 80, 81, 56, 55, 40],
//       fill: false,
//       borderColor: 'rgba(75,192,192,1)',
//       tension: 0.1
//     },
//     {
//       label: 'My Second Dataset',
//       data: [28, 48, 40, 19, 86, 27, 90],
//       fill: false,
//       borderColor: 'rgba(54, 162, 235, 1)',
//       tension: 0.1
//     }
//   ]
// };

// const options = {
//   scales: {
//     xAxes: [{
//       type: 'category'
//     }],
//     yAxes: [{
//       ticks: {
//         beginAtZero: true
//       }
//     }]
//   }
// };

// const LineChart = () => (
//   <div>
//     <Line data={data} options={options} />
//   </div>
// );

// export default LineChart;