import {useEffect, useState} from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector,useDispatch} from "react-redux";
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai'
import { removeFromCart ,toggleCartQty,getCartTotal} from "../store/cartSlice";
import emptyCartImg from '../assets/images/emptyCartImg.webp'



const Cart = () => {
  
  const dispatch = useDispatch();
  const [checkPopup,setCheckPopup] = useState(false)
 const {data,totalItems,totalAmount} = useSelector((state)=>state.cart);
 const deliveryCost = 40;

 useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [useSelector(state => state.cart)]); 

  return (
    <div className="relative">
      <Navbar />
      <h1 className="text-center text-[25px] font-[500]">My Cart</h1>
      <div className=" cart-page flex flex-row justify-center sm:overflow-x-scroll mx-w-[1280px] my-4">
        
         <div className="AllCartItems flex flex-col">
            {
            data.map((cartItem)=>(
        <div key={cartItem.id} className="bg-[#f8f8ff] w-[768px] max-w-[768px] rounded my-2 mr-6 sm:mr-0 relative md:w-[550px] sm:w-[350px]">
          <div className="cartItem flex flex-row justify-between p-[5px] items-center mr-4">
            <div className="cartItem-left overflow-x-auto flex flex-row ">
              <div className="min-w-[150px]">
                <div className="cartImg">
                  <img
                    src={cartItem.thumbnail}
                    alt=""
                  />
                </div>
                
              </div>
              <div className="mx-10 flex flex-col justify-top items-start mt-2">
                <p>{cartItem.title}</p>

                <div className="flex flex-row justify-center items-start my-2">
                  <button className="decrement-button bg-red-500 text-white px-4 rounded" onClick={() => dispatch(toggleCartQty({id: cartItem.id, type: "DEC"}))}>
                    -
                  </button>
                  <span className="item-quantity mx-2">{cartItem.quantity}</span>
                  <button className="increment-button bg-green-500 text-white text-[17px] px-4 rounded" onClick={() => dispatch(toggleCartQty({id: cartItem.id, type: "INC"}))}>
                    +
                  </button>
                </div>

                <p>Rs. {cartItem.price} &#x20B9;</p>
                <Link className="bg-[#2874F0] rounded-[6px] text-white text-[13px] py-[0.3rem] font-[500] px-[0.4rem] " to={'/singleItemInfo'} state={{itemData:cartItem}}>More Info</Link>
              </div>
              
            </div>
            <div className="font-[700] text-[18px] text-[#133855] mt-8 mr-5 sm:mr-0">
              Sub Total: {cartItem.totalPrice} &#x20B9;
            </div>
           
          </div>
          <div className="absolute top-2 right-0 w-10 h-10 z-10">
            <AiFillCloseCircle size={25} color="#EF4444" className="cursor-pointer" onClick={()=>dispatch(removeFromCart(cartItem.id))} />
        </div>
        </div>
        
       ))}

        </div>

    {totalItems?
        <div className="checkout  mt-[100px] w-[345px] h-[350px] p-3 mr-[5px] bg-[#f8f8ff] md:mt-[20px] sm:mt-[20px]">
          <p className="font-[500] text-[18px] opacity-80 mt-2 pb-2 border-b-2">Order Summary</p>
          <div className="h-[65%]">
          <div className="flex flex-row justify-between items-center ">
          <p>Selected {totalItems} items price</p>
          <h2 className="font-[500]">{totalAmount} &#x20B9;</h2>
          </div>
          <div className="flex flex-row justify-between items-center">
          <p>Discount</p>
          <h2 className="font-[500]">-{totalAmount==0?'0.0':`${totalAmount*0.1}`}&#x20B9;</h2>
          </div>
          <div className="flex flex-row justify-between items-center">
          <p>Dilivery Cost</p>
          <h2 className="font-[500]">+ {deliveryCost} &#x20B9;</h2>
          </div>
          </div>
          <div className="border-t-2 ">
            <div className="flex flex-row justify-between items-center">
           <h1 className="font-[500] text-[20px] opacity-75">Grand Total</h1>
           <h1 className="font-[500] text-[20px] opacity-75">{totalItems?`${totalAmount+deliveryCost-totalAmount*0.1}`:'0.00'} &#x20B9;</h1>
           </div>
           <div className="w-full flex flex-col items-center mt-3">
           <button className=" w-[80%]  outline-none m-auto text-center bg-[#2874F0] py-1 px-2 text-white rounded shadow-[0px_2px_4px_0px_rgba(0,0,0,.2)]" onClick={()=>setCheckPopup(true)}>Proceed to Checkout</button>
           </div>
          </div>
        </div>
        :
        <div className="w-full max-w-[1280px] h-[200px] flex justify-center flex-col items-center border-2 bg-[#f8f8ff] mx-2">
           <img className="w-[200px] h-[100px]" src={emptyCartImg} alt="" />
           <h1 className="font-[500] text-[22px]">Your cart is empty.</h1>
           <p className="text-[#2874F0]">No items found</p>
        </div>
        }
      </div>
      {/* Popup box for checkout ------- */}
      <div className={`payout-POPUP z-[100] ${checkPopup?'block':'hidden'} transition-all duration-100`}>
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-[500px] h-[300px] bg-white rounded flex justify-center items-center flex-col px-10 pt-5 pb-10 ">
              
                  <AiFillCheckCircle size={100} color="#2874F0" />
                   <h1 className="text-[28px] text-center mt-7">Order Successfull</h1>
                   <h1 className="text-[18px] text-center">Thank you for order.</h1>
                   <div className=" mt-[30px]">
                   <button className="py-3 px-8 bg-[#2874F0] rounded text-white" onClick={()=>setCheckPopup(false)}>Close</button>
                   </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
