import React from 'react'

const Dropdown = () => {
    const Monday = ["medicines","babies","cosmetics","animals"];
   
  return (
    <div className='gogo'>
            <ul className='jojo'>
              {Monday.map((e)=>(
                <li key={e}>{e}</li>
              ))}
            </ul>
    </div>
  )
}

export default Dropdown