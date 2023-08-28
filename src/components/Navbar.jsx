import React, { useEffect } from 'react'
import {BsCart4} from 'react-icons/bs'
import {FiSearch} from 'react-icons/fi'
import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { getCartTotal } from '../store/cartSlice';


const Navbar = () => {

    const {totalItems} = useSelector((state)=>state.cart);
    const dispatch  = useDispatch();
    useEffect(()=>{
        dispatch(getCartTotal());
    },  [ useSelector((state)=>state.cart)]);

  return (
    <div className='bg-[#2874F0] w-[100vw] flex items-center justify-between h-[45px] sticky top-0 z-20'>
        <h2 className='ml-10 text-[1.2rem] text-white'><Link className='flex flex-row gap-4' to={'/'}>
        Web_Cart
            <FaHome size={30} className='homeIcon' color='white'/>
            </Link></h2>
        <div className='flex justify-center items-center flex-row'>
        {/* <FiSearch size={28} color='white' className='mr-10 cursor-pointer'/> */}
        <Link className='text-white font-[500] text-[20px] mr-5 sm:mr-3' to={'/products'}>Products</Link>
        <div className='relative'>
            <Link  to={'/cart'}><BsCart4 color='white' size={30} className='mr-20 sm:mr-10 cursor-pointer '/>
    
           <div className="absolute top-[-4px] left-[20px] rounded-full bg-[#FF6161] w-6 h-6 font-bold text-white  text-[14px] text-center">{totalItems}</div>
           </Link>
         </div>
         
         </div>
    </div>
  )
}

export default Navbar