import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header'
import SubHeader from './components/SubHeader';
import Card from './components/Card';
import Pant from './components/SubheaderOption/Pant';
import Shirts from './components/SubheaderOption/Shirt';
import Cart from './components/cartPage/Cart';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signIn/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  let [inputState, setInputState] = useState('sample');

  //step 1: for add to cart
  const [cart, setCart] = useState([]);

  // we are making this state here so that we can use it on any of the other child component

  // function add to cart
  // step :2 => making logic for add to cart 

  function addToCart(product)
  {
    
    // now using Find method to check whether the product exit in cart or not.
    const productinCart = cart.find((ele)=> ele.id === product.id);
    // console.log(productinCart,"value of productincart")

     // for empty cart array this find method will not work.

     if(productinCart)
     {
        
          
        // if product exists in cart we map the product and set porduct in cart quatity to increment and otherwise just add new item.
           setCart(cart.map((ele)=>ele.id === product.id?{...productinCart, quantity:productinCart.quantity+1}:ele))
          //  console.log("if "+ cart.length);
     }
     else
     {
        setCart([...cart,{...product,quantity:1}])
        // console.log("else "+cart.length);
        
     }
     

  }

  function removeFromCart(product)
  {
      let val = product.quantity
      product.quantity = val-1;
      console.log(product)

      if(val > 1)
      {
        setCart([...cart])
      }
      else
      {
        let cartItem = cart.filter(ele => ele.quantity!=0);
        console.log(cartItem);
        console.log("length " +cartItem.length);
        setCart([...cartItem]);
      }
  }
  return (

    <>
      <BrowserRouter>
        <Header setInputState={{setInputState,cart}}/>
        <SubHeader/>
        <Routes>
          <Route path='/' element={<Card inputState={{inputState,addToCart}}/>}/>
          <Route path='/pants' element={<Pant/>}/>
          <Route path='/shirts' element={<Shirts/>}/>
          <Route path='/cartpage' element={<Cart cart={{cart,addToCart,removeFromCart}}/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='signin/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
