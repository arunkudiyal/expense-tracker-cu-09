import React from 'react'

const TransactionList = () => {
  return (
    <div>
        <h2> Your Transaction History - </h2>
        <div style={{ border: '2px solid #f7f7f7', margin: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', margiBottom: '12px', borderLeft: '3px solid green' }}>
                <h3>Salary</h3>
                <p className='lead'> + $ 1200</p>
                <i className="fa-regular fa-x"></i>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around', margiBottom: '12px', borderLeft: '3px solid red' }}>
                <h3>Books</h3>
                <p className='lead'> - $ 250</p>
                <i className="fa-regular fa-x"></i>
            </div>
        </div>
    </div>
  )
}

export default TransactionList