import React, { useState, useMemo } from "react";
import Plot from "react-plotly.js";
import DataTable from "./components/DataTable";

function App() {
  const initialData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Item Number - ${index + 1}`,
    value: Math.floor(Math.random() * 100),
    checked: index < 5,
  }));

  const [data, setData] = useState(initialData);

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checked = !newData[index].checked;
    setData(newData);
  };

  const chartData = useMemo(() => {
    return data.filter((item) => item.checked).map((item) => item.value);
  }, [data]);

  return (
    <div className="container mx-auto p-4 flex justify-center items-center h-screen text-center">
      <DataTable data={data} handleCheckboxChange={handleCheckboxChange} />
      <div className="flex flex-col items-center justify-center">
        <Plot
          data={[
            {
              type: "bar",
              x: chartData,
              marker: {
                color: [
                  "#6366F1",
                  "#ECC94B",
                  "#F56565",
                  "#48BB78",
                  "#ED8936",
                  "#A0AEC0",
                  "#9F7AEA",
                  "#ED64A6",
                  "#4299E1",
                  "#38B2AC",
                ],
              },
              text: chartData.map((v) => `Value: ${v}`),
              textfont: {
                color: "#000000",
                size: 15,
                family: "Oswald, sans-serif",
              },
            },
          ]}
          layout={{ width: 800, height: 550 }}
        />
        <h1 className="mt-4 md:mt-0 md:ml-4 font-medium">Data Visualizer</h1>
      </div>
    </div>
  );
}

export default App;
