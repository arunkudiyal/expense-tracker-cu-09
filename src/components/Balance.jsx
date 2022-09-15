import React from 'react'

const Balance = () => {
    const boxStyles = {
        border: '1px solid #f7f7f7',
        padding: '12px',
        margin: '12px'
    }

  return (
    <div style={boxStyles}>
        <h3>Your Balace - </h3>
        <p className='lead'> $650 </p>
    </div>
  )
}

export default Balance