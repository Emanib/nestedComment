import React from 'react'

export default function Counter () {
  const [count,setCount]=React.useState(0)
  return (
    <div className='container-btns'> 
    <button onClick = {()=>setCount(prev=>prev+1)}>+</button>
    <p  className='count'>{count}</p>
    <button onClick={()=>setCount(prev=>prev-1)}>-</button>
      </div>
  )
}
