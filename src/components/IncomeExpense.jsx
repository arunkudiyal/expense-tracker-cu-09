import React from 'react'

const IncomeExpense = () => {
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
                <p className='lead' style={{ color: 'green' }}> + $ 1500 </p>
            </div>
            <div style={boxStyles} className="col-xs-6">
                <h3>Expense - </h3>
                <p className='lead' style={{ color: 'red' }}> - $ 400 </p>
            </div>
        </div>
    </div>
  )
}

export default IncomeExpense