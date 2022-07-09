import React from 'react'
import '../card.css'
import './cart.css'
function Cart({ cart }) {


  return (
    <>
      <div className='parent'>
        {
          cart.cart.length === 0 ?
            <div className='cart-container'>
              no product in cart.
            </div>
            :
            cart.cart.map((x) => {
              return (
                <div className='item_card'>
                  <div className='item'>
                    {/* <img src="/images/laptop.jpg"/> */}
                    <img src={x.pic} />
                  </div>
                  <div className='carDesc'>
                    <div><p>Desc: {x.desc}</p></div>
                    <div><p>Total Item: {x.item}</p></div>
                    <div><p>Qnty: {x.quantity}</p></div>
                  </div>
                  <div className='carArea'>
                  <div className='btnAddCart' onClick={() => cart.addToCart(x)}><button>Add to Cart</button></div>
                  <div className='btnRemoveCart' onClick={() => cart.removeFromCart(x)}><button>Remove From Cart</button></div>
                  </div>
                </div>
              )
            })
        }
      </div>
    </>

  )
}

export default Cart