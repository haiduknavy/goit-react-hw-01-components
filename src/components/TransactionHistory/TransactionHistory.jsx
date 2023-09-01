import PropTypes, { object } from 'prop-types';
import { TransactionHistoryItem } from "./TransactionHistoryItem"
import {
    TableTransactionHistory,
    TableHeader,
    TableHeaderCell,
    CellBorder,
    TableBody,
  } from "./TransactionHistory.styled";

export const TransactionHistory = ({items})=>{
    return    <TableTransactionHistory>
    <TableHeader>
      <tr>
        <TableHeaderCell>Type</TableHeaderCell>
        <CellBorder>Amount</CellBorder>
        <TableHeaderCell>Currency</TableHeaderCell>
      </tr>
    </TableHeader>
    <TableBody>
{items.map(({id,type,amount,currency})=>(
     <TransactionHistoryItem key={id} type={type} amount={amount} currency={currency} />
))}
</TableBody>
</TableTransactionHistory>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(object),
}