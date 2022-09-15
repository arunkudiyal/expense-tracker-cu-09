import React from 'react'
import Transaction from './Transaction'

const TransactionList = ( {transactions} ) => {
  return (
    <div>
        <h2> Your Transaction History - </h2>
        <div style={{ border: '2px solid #f7f7f7', margin: '10px' }}>
            {
                transactions.map( transaction => 
                    <Transaction key={transaction.id} transaction={transaction} /> )
            }
        </div>
    </div>
  )
}

export default TransactionList