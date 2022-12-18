import React from "react";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

const FetchCharts = ({ data }) => {

  //loads a bar chart and a pie chart using {{data}} from the fetch nutrition component. the sae piece of data used to query the api is
  // used in this component
  return (<>
    <Bar
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Nutritional Data ",
          },
          legend: {
            display: true,
            position: "bottom",
          },
        },
      }}
    />
    <Pie
      data={data}
    />
    </>
  );
};
export default FetchCharts;