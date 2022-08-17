import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "../Page/table";
const DataElement =({description,id,opportunity_count,credit,debit,debit_limit,total_invoiced,customer_rank,credit_limit,sale_order_count})=>{
    return(
    <Tr>
        <Td>{description}</Td>
        <Td>{id}</Td>
        <Td>{opportunity_count}</Td>
        <Td>{credit}</Td>
        <Td>{debit}</Td>
        <Td>{debit_limit}</Td>
        <Td>{total_invoiced}</Td>
        <Td>{customer_rank}</Td>
        <Td>{credit_limit}</Td>
        <Td>{sale_order_count}</Td>
    </Tr>
)
}

export default DataElement;