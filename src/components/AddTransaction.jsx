import React from 'react'
import { useState } from 'react'

const AddTransaction = () => {
    const [label, setLabel] = useState("")
    const [amount, setAmount] = useState(0)

  return (
    <div style={{ border: '3px solid #f4f4f4', padding: '12px' }}>
        <h2>Add Transaction - </h2>
        <form className='form-group'>
            <input className='form-control' value={label} onChange={(e) => setLabel(e.target.value)} type="text" placeholder='transaction label...' /> <br />

            <input className='form-control' value={amount} onChange={(e) => setAmount(e.target.value)} type="text" placeholder='transaction amount...' />

            <button className='btn btn-primary'>ADD</button>
        </form>
    </div>
  )
}

export default AddTransaction