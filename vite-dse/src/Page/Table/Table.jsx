import React,{useEffect,useState} from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from "../table";
import { TableCaption,Text,Flex } from "@chakra-ui/react";
import { motion } from 'framer-motion'
import "./styles.css";
import DataElement from "../../components/DataElement";
import axios  from 'axios';



const TableVisual = () => {
  
  const [data, setData] = useState([]);

  const [fields,setFields] = useState([]);

  // Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy

    axios.get("http://127.0.0.1:5000/data").then((response) => {
      //console.log(response.data.data[0]["credit"])
      
      setData(
        response.data.data
      )
      const f = response.data.schema.fields
      f.splice(0,2)
      setFields(
       f
      )          
    })
    //console.log(fields.splice(0, 2))
  }, []);

  useEffect(() => console.log(fields), [fields])

  return (
    <Flex p="30px">
      <Flex w="50vw">
        <Table variant="striped" bgGradient='linear(to-l, #a14588, #C382AE)' size="md">
        <TableCaption>table</TableCaption>
        <Thead>

          <Tr>
            <Th>Descripcion</Th>
            {fields.map((item,index)=>{
              return <Th key={index}>{item.name}</Th> 
            })}
            {/* <Th>PG 1</Th>
            <Th>PG 2</Th>
            <Th>PG 3</Th>
            <Th>PG 4</Th> */}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item,index)=>{
            return(
              <DataElement description={item["Unnamed: 0"]} key={index} {...item}/>
            )
          })}
          {/* <Tr>
            <Td>Premieren-Abo</Td>
            <Td>275,- €</Td>
            <Td>246,50 €</Td>
            <Td>199,50 €</Td>
            <Td>165,- €</Td>
          </Tr>
          <Tr>
            <Td>Donnerstags-Abo</Td>
            <Td>220,- €</Td>
            <Td>195,- €</Td>
            <Td>160,- €</Td>
            <Td>128,- €</Td>
          </Tr>

          <Tr>
            <Td>Freitags-Abo</Td>
            <Td>240,- €</Td>
            <Td>219,- €</Td>
            <Td>177,- €</Td>
            <Td>144,- €</Td>
          </Tr>
          <Tr>
            <Td>Samstags-Abo</Td>
            <Td>240,- €</Td>
            <Td>219,- €</Td>
            <Td>177,- €</Td>
            <Td>144,- €</Td>
          </Tr>
          <Tr>
            <Td>Sonntags-Abo</Td>
            <Td>240,- €</Td>
            <Td>219,- €</Td>
            <Td>177,- €</Td>
            <Td>144,- €</Td>
          </Tr>
          <Tr>
            <Td>Sonntagnachmittag-Abo</Td>
            <Td>152,50 €</Td>
            <Td>137,- €</Td>
            <Td>111,50 €</Td>
            <Td>90,- €</Td>
          </Tr>
          <Tr>
            <Td>Wochenend-Abo 1</Td>
            <Td>133,- €</Td>
            <Td>120,- €</Td>
            <Td>98,- €</Td>
            <Td>76,- €</Td>
          </Tr>
          <Tr>
            <Td>Wochenend-Abo 2</Td>
            <Td>133,- €</Td>
            <Td>120,- €</Td>
            <Td>98,- €</Td>
            <Td>76,- €</Td>
          </Tr>
          <Tr>
            <Td>Tanz-Abo</Td>
            <Td>114,- €</Td>
            <Td>105,- €</Td>
            <Td>89,- €</Td>
            <Td>76,- €</Td>
          </Tr>
          <Tr>
            <Td>Puppenspiel-Abo</Td>
            <Td>114,- €</Td>
            <Td>105,- €</Td>
            <Td>89,- €</Td>
            <Td>76,- €</Td>
          </Tr>
          <Tr>
            <Td>Einsteiger-Abo</Td>
            <Td>133,- €</Td>
            <Td>120,- €</Td>
            <Td>98,- €</Td>
            <Td>76,- €</Td>
          </Tr>
          <Tr>
            <Td>Sinfoniekonzert-Abo</Td>
            <Td>199,- €</Td>
            <Td>179,- €</Td>
            <Td>159,- €</Td>
            <Td>126,50 €</Td>
          </Tr>
          <Tr>
            <Td>Sonntagskonzert-Abo</Td>
            <Td colSpan={4}>75,- €</Td>
          </Tr>
          <Tr>
            <Td>Kleines Sinfoniekonzert-Abo 1</Td>
            <Td>88,50 €</Td>
            <Td>79,50 €</Td>
            <Td>71,- € </Td>
            <Td>56,50 €</Td>
          </Tr>
          <Tr>
            <Td>Kleines Sinfoniekonzert-Abo 2</Td>
            <Td>88,50 € </Td>
            <Td>79,50 € </Td>
            <Td>71,- € </Td>
            <Td>56,50 €</Td>
          </Tr> */}
        </Tbody>
        </Table>
      </Flex>
    </Flex>
    
  );
};

export default TableVisual;
