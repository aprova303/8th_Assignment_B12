import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const RatingChart = ({ app }) => {

  const ratingChartData = app.ratings.map(rating => ({
    name: rating.name,
    count: rating.count,
  }));

  return (
    <div className="w-full h-80 md:h-96 mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Ratings
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={ratingChartData}
          margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="count"
            fill="#FF9800"
            barSize={25}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
