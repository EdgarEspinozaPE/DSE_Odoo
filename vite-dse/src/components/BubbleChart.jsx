import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import { UserData } from "../Data";
import {
  Select,
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";

import { AiFillCaretDown } from "react-icons/ai";
import { Link as ReachLink } from "react-router-dom";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

let styles = {
  rotateDiv: {
    transform: "rotate(-90deg)",
  },
};

function BubbleChart() {
  const [clusterdata, setClusterData] = useState([]);

  const [clusterdata0, setClusterData0] = useState([]);

  const [clusterdata1, setClusterData1] = useState([]);

  const [clusterdata2, setClusterData2] = useState([]);

  const [fields, setFields] = useState([]);

  const [variablex, setVariablex] = useState(0);

  const [variabley, setVariabley] = useState(1);

  const handleChangex1 = (e) => {
    setVariablex(e.target.value);
  };

  const handleChangex2 = (e) => {
    setVariabley(e.target.value);
  };

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
      const cdata = response.data;
      const cluster0 = cdata.filter((item) => {
        return item.clusters === 0;
      });
      const cluster1 = cdata.filter((item) => {
        return item.clusters === 1;
      });
      const cluster2 = cdata.filter((item) => {
        return item.clusters === 2;
      });

      //console.log(odooData)
      setClusterData(cdata);
      setClusterData0(cluster0);
      setClusterData1(cluster1);
      setClusterData2(cluster2);
    });
    axios.get("http://127.0.0.1:5000/kmeansf").then((response) => {
      let fielddata = response.data.columns;
      fielddata.splice(0, 1);
      setFields(fielddata);
    });
  }, []);

  useEffect(() => console.log(variabley), [variabley]);

  useEffect(() => {
    setUserData({
      labels: clusterdata.map((data) => data[fields[variablex]]),
      datasets: [
        {
          label: "Cluster 0",
          data: clusterdata0.map((data) => data[fields[variabley]]),
          backgroundColor: ["rgba(75,192,192,1)"],
          borderColor: "black",
          borderWidth: 2,
        },
        {
          label: "Cluster 1",
          data: clusterdata1.map((data) => data[fields[variabley]]),
          backgroundColor: ["rgba(255,1,1,1)"],
          borderColor: "black",
          borderWidth: 2,
        },
        {
          label: "Cluster 2",
          data: clusterdata2.map((data) => data[fields[variabley]]),
          backgroundColor: ["rgba(0,192,255,1)"],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [clusterdata, variablex, variabley]);
  return (
    <Box>
      <Flex justify="center" gap={10} py={5}>
        <Link as={ReachLink} to="/" _hover={{ textDecoration: "none" }}>
          <Button colorScheme="teal" variant="link">
            Inicio
          </Button>
        </Link>
        <Link as={ReachLink} to="/table" _hover={{ textDecoration: "none" }}>
          <Button colorScheme="teal" variant="link">
            Ver tabla
          </Button>
        </Link>
      </Flex>
      <Flex direction="column" align="center" p={5}>
        <Heading>Representación visual</Heading>
        <Flex w="full">
          <Flex w="5%" align="center" justify="center">
            <Text style={styles.rotateDiv} fontWeight="bold" size="xl">
              {fields[variablex]}
            </Text>
          </Flex>
          <Box w="95%">
            <Bubble data={userData} />
            <Flex justify="center">
              <Text fontWeight="bold" size="xl">
                {fields[variabley]}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Flex justify="center" my={5}>
        <Heading>Opciones de visualización</Heading>
      </Flex>
      <Flex gap={10} justify="center" mb={10}>
        <Box>
          <Text mb={5} size="lg">
            Seleccione variable X
          </Text>
          <Select onChange={handleChangex1} value={variablex}>
            {fields.map((item, index) => {
              return (
                <option value={index} key={index}>
                  {item}
                </option>
              );
            })}
          </Select>
        </Box>
        <Box>
          <Text mb={5} size="lg">
            Seleccione variable Y
          </Text>
          <Select onChange={handleChangex2} value={variabley}>
            {fields.map((item, index) => {
              return (
                <option value={index} key={index}>
                  {item}
                </option>
              );
            })}
          </Select>
        </Box>
      </Flex>
    </Box>
  );
}

export default BubbleChart;
