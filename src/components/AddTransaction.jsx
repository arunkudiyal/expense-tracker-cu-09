import React from 'react'
import { useState } from 'react';

const AddTransaction = ( {transactions, clicked} ) => {
    const [purpose, setPurpose] = useState('')
    const [amount, setAmount] = useState(0)

  return (
    <div style={ {marginBottom: '25px'} }>
        <div className='container'>
            <h3>Add your transaction - </h3>
            <form style={{ padding: '15px', margin: '15px', border: '1px solid black' }} >
                <div className='form-group'>
                    <input type="text" placeholder='enter the purpose of the transaction...' className='form-control' value={purpose} onChange={ (event) => setPurpose(event.target.value) } />
                </div>
                
                <div className="form-group">
                    <input type="text" placeholder='enter the amount of the transaction...' className='form-control' value={amount} onChange={ (event) => setAmount(event.target.value) } />
                </div>
            </form>

            <button className='btn btn-success' onClick={() => clicked( {id: transactions.length + 1, label: purpose, amount: amount} )}>Add</button>
        </div>
    </div>
  )
}

export default AddTransaction;