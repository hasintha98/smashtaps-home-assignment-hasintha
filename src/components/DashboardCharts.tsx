import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { DashboardChartsProps } from "../common/Interfaces";

const DashboardCharts: React.FC<DashboardChartsProps> = ({ products, categories }) => {
const barChartOptions = {
    chart: {
      type: "column",
    },
    title: {
      text: "Product in selected Category",
    },
    xAxis: {
      categories: products?.map((item) => item.title),
      title: {
        text: "Product Title",
      },
    },
    yAxis: {
      title: {
        text: "Price",
      },
    },
    series: [
      {
        name: "Price",
        data: products?.map((item) => item.price),
        dataLabels: {
          enabled: true,
          format: '{point.y}$', 
          style: {
            fontWeight: 'bold',
            color: 'black', 
          },
        },
      },
    ],
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          inside: false, 
          format: '{point.y}', 
        },
      },
    },
  };

  const pieChartOptions = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Distribution of Categories",
    },
    series: [
      {
        name: "Items",
        data: categories?.map((item) => ({ name: item, y: 1 })), 
      },
    ],
  };

  return (
    <div>
      {products.length > 0 ? (
        <HighchartsReact highcharts={Highcharts} options={barChartOptions} />
      ) : (
        <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
      )}
    </div>
  );
}

export default DashboardCharts;
