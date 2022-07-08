import React from 'react'
import './card.css'
import data from '../object'
export default function Card({ inputState }) {

  let filterData = data.filter(ele => ele.desc.includes(inputState))

  return (
    <>
      <div className='parent'>
        {
          filterData.length == 0 ?
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
            }) :

            filterData.map((x) => {
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
