import React from 'react'
import data from '../../object'
import ShirtComp from './ShirtComp'
function Shirt() {

  let shirtData = data.filter(ele => ele.desc=='shirt')
  return (
    <ShirtComp data={shirtData}/>
  )
}

export default Shirt