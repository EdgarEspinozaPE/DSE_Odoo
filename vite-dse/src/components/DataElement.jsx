import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const DataElement = (props) => {
  return (
    <Tr>
      <Td>
        <Text fontWeight="bold">{props.description}</Text>
      </Td>
      <Td>{props.id.toFixed(2)}</Td>
      <Td>{props.opportunity_count.toFixed(2)}</Td>
      <Td>{props.credit.toFixed(2)}</Td>
      <Td>{props.debit.toFixed(2)}</Td>
      <Td>{props.debit_limit.toFixed(2)}</Td>
      <Td>{props.total_invoiced.toFixed(2)}</Td>
      <Td>{props.customer_rank.toFixed(2)}</Td>
      <Td>{props.credit_limit.toFixed(2)}</Td>
      <Td>{props.sale_order_count.toFixed(2)}</Td>
    </Tr>
  );
};

export default DataElement;
