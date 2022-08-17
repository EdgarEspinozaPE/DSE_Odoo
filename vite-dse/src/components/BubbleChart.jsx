import React,{useEffect,useState} from 'react'
import '../App.css'
import axios  from 'axios';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import {UserData} from '../Data'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Select
} from '@chakra-ui/react'

import {AiFillCaretDown} from "react-icons/ai"


ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

function BubbleChart() {
  const [clusterdata,setClusterData] = useState([]);

  const [clusterdata0,setClusterData0] = useState([]);

  const [clusterdata1,setClusterData1] = useState([]);

  const [clusterdata2,setClusterData2] = useState([]);

  const [fields,setFields] = useState([]);

  const [variablex,setVariablex] = useState(
    0
  );

  const [variabley,setVariabley] = useState(
    1
  );

  const handleChangex1 = (e) =>{
    setVariablex(
      e.target.value
    )
  }

  const handleChangex2 = (e) =>{
    setVariabley(
      e.target.value
    ) 
  }

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

  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy

    axios.get("http://127.0.0.1:5000/kmeans").then((response) => {
        //console.log(response.data)
      const cdata = response.data
      const cluster0 = cdata.filter((item)=>{
        return item.clusters === 0
      })
      const cluster1 = cdata.filter((item)=>{
        return item.clusters === 1
      })
      const cluster2 = cdata.filter((item)=>{
        return item.clusters === 2
      })

      //console.log(odooData)
      setClusterData(        
        cdata
      )
      setClusterData0(
        cluster0
      )
      setClusterData1(
        cluster1
      )
      setClusterData2(
        cluster2
      )          
    })
    axios.get("http://127.0.0.1:5000/kmeansf").then((response)=>{
      let fielddata = response.data.columns
      fielddata.splice(0,1)
      setFields(
        fielddata
      )
    })
  }, []);

  useEffect(() => console.log(variabley), [variabley])

  useEffect(()=>{
    setUserData({
      labels: clusterdata.map((data) => data[fields[variablex]]),
      datasets: [
        {
          label: "Cluster 0",
          data: clusterdata0.map((data) => data[fields[variabley]]),
          backgroundColor: [
            "rgba(75,192,192,1)",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
        {
          label: "Cluster 1",
          data: clusterdata1.map((data) => data[fields[variabley]]),
          backgroundColor: [
            "rgba(255,1,1,1)",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
        {
          label: "Cluster 2",
          data: clusterdata2.map((data) => data[fields[variabley]]),
          backgroundColor: [
            "rgba(0,192,255,1)",
          ],
          borderColor: "black",
          borderWidth: 2,
        },

      ],
    })

  },[clusterdata,variablex,variabley])
  return (
    <div>

      <Bubble data={userData} />
      <Select onChange={handleChangex1} value={variablex} placeholder='x-axis'>
        {fields.map((item,index)=>{return(
          <option value={index} key={index}>{item}</option>
        )})}
      </Select>
      <Select onChange={handleChangex2} value={variabley} placeholder='y-axis'>
        {fields.map((item,index)=>{return(
          <option value={index} key={index}>{item}</option>
        )})}
      </Select>

    </div>
  );
}

export default BubbleChart;
