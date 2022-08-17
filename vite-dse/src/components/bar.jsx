import React ,{useState} from "react";
import BarChart from "./BarChart";
import * as d3 from "d3";

function Bar() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  }); 

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    d3.csv("https://raw.githubusercontent.com/ElizabethYasmin/dataCSV/main/archivo.csv").then((d) => {
      setData(d);
      setLoading(false);
    });
    return () => undefined;
  }, []);

  return (
    <BarChart chartData={data} />
  );
}

export default Bar

/* import ReactDOM  from "react-dom";


const BatBat = () => {
  useEffect(()=>{
    const [data,setData]=useState([]);
    csv('https://raw.githubusercontent.com/ElizabethYasmin/dataCSV/main/archivo.csv').then(setData(data));
    console.log(data);
  },[]);
  // return(
    // Request data using D3
    d3.csv('https://raw.githubusercontent.com/ElizabethYasmin/dataCSV/main/archivo.csv')
      .then(makeChart);

  ); //
};
export default BatBat */





/*  export const BarChart1 = () => {
    let filename = 'https://raw.githubusercontent.com/ElizabethYasmin/dataCSV/main/archivo.csv';
    d3.csv(filename, function(loadedData) {
      //Mostrando los datos
        console.log(loadedData);

    })

}


export default BarChart1 */
