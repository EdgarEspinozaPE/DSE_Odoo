/* import React from "react";
import * as d3 from "d3";
const BarChart1 = () => {
  let myChart;
  let filename = 'https://raw.githubusercontent.com/ElizabethYasmin/dataCSV/main/archivo.csv';
  d3.csv(filename, function(loadedData) {
    //Mostrando los datos
      console.log(loadedData);

      let data = [];
      let labels = [];

      for (let i=1; i < loadedData.length; i++) {
          console.log(loadedData[i]);

          let year = loadedData[i].year;
          labels.push(year);

          let num = loadedData[i].no_of_drug_abusers;
          data.push(num);
          //console.log(num);
      }

      let options = {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  data: data,
                  fill: false,
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  borderColor: 'rgb(100,100,100)'
              }]
          }
      };

      //myChart = new Chart(document.getElementById('BarChart1'), options);
  })
}
  export default BarChart1 */


export const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
]; 
  