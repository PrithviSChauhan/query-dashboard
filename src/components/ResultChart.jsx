import React from 'react';
import { useSelector } from 'react-redux';
import { Bar, Pie, Radar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const ResultChart = () => {
  const { results, loading, error } = useSelector((state) => state.query);

  if (loading) return <p className='text-center text-white'>Loading...</p>;
  if (error) return <p className='text-center text-red-500'>Error: {error}</p>;
  if (!results) return <p className='text-center text-gray-500'>Enter a query to generate results</p>;

  const chartData = {
    labels: results.labels,
    datasets: [
      {
        label: 'Query Results',
        data: results.data,
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='bg-gray-900 w-11/12 md:w-4/5 border-2 m-3 rounded-lg'>
        <p className='text-2xl text-white px-2'>Result</p>
      </div>
      <div className='border-x-2 bg-gray-900 md:w-4/5 w-11/12 rounded-lg mx-5 min-h-52'>
        <Bar data={chartData} />
        {/* <Pie data={chartData} />
        <Radar data={chartData} /> */}
      </div>
    </div>
  );
};

export default ResultChart;