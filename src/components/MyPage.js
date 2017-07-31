import React from "react";
import "../App.css";
import Chart from "../containers/ChartContainer";

export const MyPage = () => (
  <div>
    <Chart progressData={[0, 25, 41, 79, 101, 151, 194, 260, null]} 
      progressLabels={["Kurssin alku", "Viikko 1", "Viikko 2", "Viikko 3", "Viikko 4", "Viikko 5", "Viikko 6", "Viikko 7", "Viikko 8"]} 
      maxPoints={330}/>
  </div>
)
