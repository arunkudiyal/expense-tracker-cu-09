import React from 'react'

const Aux = (props) => {
  return (
    <div id='aux-id' className='aux-class' >
        { props.children }
    </div>
  )
}

export default Aux