import React from 'react'
import '../card.css'

function ShirtComp({data}) {
  return (
    <>
            <div className='parent'>
                {
                    data.map((x) => {

                        return (

                            <div className='item_card'>
                                <div className='item'>
                                    {/* <img src="/images/laptop.jpg"/> */}
                                    <img src={x.pic} />
                                </div>
                                <div><p>Desc: {x.desc}</p></div>
                                <div><p>Total Item: {x.item}</p></div>
                            </div>

                        )
                    })
                }
            </div>
        </>
  )
}

export default ShirtComp