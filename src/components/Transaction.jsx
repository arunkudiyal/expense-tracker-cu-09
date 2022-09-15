import React from 'react'

const Transaction = ( {transaction} ) => {
    let color = ''
    transaction.amount < 0 ? color = 'red' : color = 'green'

  return (
    <div style={{ margin: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', margiBottom: '12px', borderLeft: `3px solid ${color}` }}>
            <h3>{transaction.label}</h3>
            <p className='lead'> $ {transaction.amount}</p>
            <i className="fa-regular fa-x"></i>
        </div>
    </div>
  )
}

export default Transaction