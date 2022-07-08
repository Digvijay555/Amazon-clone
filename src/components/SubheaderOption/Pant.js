import React from 'react'
import data from '../../object'
import PantComp from './PantComp'
function Pant() {

  let pantData = data.filter(val=>val.desc=='pant')

  return (
    <PantComp data={pantData}/>
  )
}

export default Pant