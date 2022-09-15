import React from 'react'

const IncomeExpense = ( {transactions} ) => {
    let income = 0
    let expense = 0

    transactions.forEach( transaction => {
        transaction.amount < 0 ? expense += transaction.amount : income += transaction.amount 
    } )

    const boxStyles = {
        border: '2px solid #f7f7f7',
        padding: '10px'
    }

  return (
    <div>
        <h2>Total Transactions - </h2>
        <div className="row">
            <div style={boxStyles} className="col-xs-6">
                <h3>Income - </h3>
                <p className='lead' style={{ color: 'green' }}> $ + {income} </p>
            </div>
            <div style={boxStyles} className="col-xs-6">
                <h3>Expense - </h3>
                <p className='lead' style={{ color: 'red' }}> $ {expense} </p>
            </div>
        </div>
    </div>
  )
}

export default IncomeExpense