import React, { useEffect, useState, useCallback } from "react";
import Nutrition from "./Nutrition";
import FetchCharts from "./FetchCharts";

  // component responsbile for setting up a data structure to hold nutritional values, and then querying an external api and using this data from the api
  // to render a component which puts this data into a form that can be rendered with other components

const FetchData = ({ query }) => {
  const [nutrition, setNutrition] = useState({
    sugar_g: 0,
    fiber_g: 0,
    serving_size_g: 0,
    sodium_mg: 0,
    name: 0,
    potassium_mg: 0,
    fat_saturated_g: 0,
    fat_total_g: 0,
    calories: 0,
    cholesterol_mg: 0,
    protein_g: 0,
    carbohydrates_total_g: 0,
  });

  const [chartData, setChartData] = useState({
    labels: ["sugar", "fiber", "saturated fat", "total fat", "protein"],
    datasets: [
      {
        label: "per serving in g",
        data: [0, 0, 0, 0, 0],
        backgroundColor: ["#ffbb11", "#ec02f1", "#50AF95", "#03ba6f", "#2a71d0"],
      },
    ],

  });

  const fetchData = useCallback(() => {
    const url =
      "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + query;
    console.log(url);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "96ea32b66bmsh7955cc5bf47b26bp19a375jsn876d3dd20ee4",
        "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((incomingData) => {
        console.log(incomingData);
        if (incomingData.items.length !== 0)
          setNutrition(incomingData.items[0]);
        let filteredData = [
          incomingData.items[0].sugar_g,
          incomingData.items[0].fiber_g,
          incomingData.items[0].fat_saturated_g,
          incomingData.items[0].fat_total_g,
          incomingData.items[0].protein_g,
        ];
        let filteredLabels = [
          "sugar",
          "fiber",
          "saturated fat",
          "total fat",
          "protein",
        ];
        setChartData({
          labels: filteredLabels,
          datasets: [
            {
              label: "per serving of " + incomingData.items[0].name + " in g",
              data: filteredData,
              backgroundColor: [
                "#ffbb11",
                "#ec02f1",
                "#50AF95",
                "#03ba6f",
                "#2a71d0",
              ],
            },
          ],
        });
      })
      .catch((err) => console.error(err));
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData, query]);

  return (
    <div>
      <Nutrition item={nutrition} />
      <FetchCharts data={chartData} />
    </div>
  );
  
};



export default FetchData;