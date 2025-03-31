import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

type TickAlign = "center" | "start" | "end" | "inner" | undefined;

const generateData = () => {
  const data = [];
  for (let i = 1; i <= 30; i++) {
    const value = 50 + Math.sin(i / 3) * 30 + Math.sin(i / 6) * 20;
    data.push(value);
  }
  return data;
};

const ChartJSGraph = () => {
  const values = generateData();

  const data = {
    labels: Array.from({ length: 30 }, (_, i) =>
      i === 0 ? "Apr 1, 2025" : i === values.length - 1 ? "Apr 30, 2025" : ""
    ),

    datasets: [
      {
        data: values,
        borderColor: "#FF5403",
        borderWidth: 1,
        backgroundColor: "transparent",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: true,
        },
        border: {
          display: true,
          color: "#DBDEE5",
        },
        offset: false,
        ticks: {
          font: {
            size: 14,
            family: "Degular Display",
            color: "#56616B",
            weight: 500,
          },
          padding: 5,
          align: "center" as TickAlign,
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
          maxTicksLimit: 30,
        },
      },

      y: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full overflow-hidden h-[300px]">
      <Line options={options} data={data} />
    </div>
  );
};

export default ChartJSGraph;
