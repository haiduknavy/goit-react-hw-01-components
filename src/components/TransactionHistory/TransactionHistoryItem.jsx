import PropTypes from 'prop-types';
import {
    TableRow,
    TableData,
    TableDataBorder,
  } from "./TransactionHistory.styled";

export const TransactionHistoryItem = ({type,amount,currency})=>{
    return <TableRow>
    <TableData>{type}</TableData>
    <TableDataBorder>{amount}</TableDataBorder>
    <TableData>{currency}</TableData>
    </TableRow>
}

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}