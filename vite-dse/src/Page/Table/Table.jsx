import React, { useEffect, useState } from "react";
import {
  TableCaption,
  Text,
  Button,
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Link,
} from "@chakra-ui/react";
import "./styles.css";
import DataElement from "../../components/DataElement";
import axios from "axios";

import { Link as ReachLink } from "react-router-dom";

const TableVisual = () => {
  const [data, setData] = useState([]);

  const [fields, setFields] = useState([]);

  // Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy

    axios.get("http://127.0.0.1:5000/data").then((response) => {
      //console.log(response.data.data[0]["credit"])

      setData(response.data.data);
      const f = response.data.schema.fields;
      f.splice(0, 2);
      setFields(f);
    });
    //console.log(fields.splice(0, 2))
  }, []);

  useEffect(() => console.log(fields), [fields]);

  return (
    <Flex direction="column" maxW="100vw" align="center" py={5}>
      <Flex gap={10} py={5}>
        <Link as={ReachLink} to="/" _hover={{ textDecoration: "none" }}>
          <Button colorScheme="teal" variant="link">
            Inicio
          </Button>
        </Link>
        <Link as={ReachLink} to="/bubble" _hover={{ textDecoration: "none" }}>
          <Button colorScheme="teal" variant="link">
            Ver gráfica
          </Button>
        </Link>
      </Flex>
      <Heading>Resumen de los datos</Heading>
      <Box>
        <Table variant="striped" size="md">
          <TableCaption>
            Tabla 1. Tabla de resumen de las variables que interactuan con el
            modelo{" "}
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Descripcion</Th>
              {fields.map((item, index) => {
                return <Th key={index}>{item.name}</Th>;
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => {
              return (
                <DataElement
                  description={item["Unnamed: 0"]}
                  key={index}
                  {...item}
                />
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default TableVisual;
