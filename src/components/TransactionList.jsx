import React from 'react'
import Transaction from './Transaction'

const TransactionList = ( {transactions, clicked} ) => {
  return (
    <div>
        <h3>Your statement is as follows - </h3>
        <div>
            <ul className='list-unstyled'>
                {
                    transactions.map( (transaction ) => 
                      <Transaction
                        key={transaction.id}
                        amount={transaction.amount}
                        clicked={ () => clicked(transaction.id) }
                        label={transaction.label} /> )
                }
            </ul>
        </div>
    </div>
  )
}

export default TransactionList