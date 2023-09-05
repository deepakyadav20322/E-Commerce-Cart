import React, { useEffect,useState } from 'react'
import Navbar from '../components/Navbar'
import CategoryList from '../components/CategoryList'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProductsByCategory } from '../store/productSlice'
import { STATUSES } from '../store/state'
import { toast,Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { addToCart } from '../store/cartSlice'

const Products = () => {
  const dispatch = useDispatch()
  const {data ,status} = useSelector((state)=>state.product)
  const {category ,status:Status} = useSelector((state)=>state.category)
  console.log(category,"kkk")

  const {data:cartData}=useSelector((state)=>state.cart);
  const [qty,setQty] = useState(1);
  const handleAdd = (product) => {
       
    const dataAvailable = cartData.some(item => item.id === product.id);

    console.log(dataAvailable)
    if(dataAvailable){
     toast.success("Item already in cart");
     return ;
    }
     let totalPrice = qty * product.price;
     const tempProduct = {
       ...product,
       quantity: qty,
       totalPrice
     }
     dispatch(addToCart(tempProduct));
     
    toast.success('Item added into cart successfully');
 };


  return (
    <>
    <Navbar/>
    <CategoryList />
    <div className='w-full max-w-[1450px] m-auto mt-14 '>
    
    
    <h2 className='ml-14 font-[700] text-[20px] capitalize'>{category} Products</h2>
    
    <div className='flex justify-center items-center flex-row flex-wrap'>
   
    { category=="" || category=='All' ? 
          data.map((item,id)=>(
            
           
         <div key={id} className="card flex justify-center items-center flex-col mx-5 my-3">
            <Link to={'/singleItemInfo'} state= {{itemData:item }}> 
            {/* // Pass the item data as state */}
         
            <div className='imgBox'>
            <img src={item.thumbnail} className='mt-5  hover:scale-[1.2] transition-all duration-[400ms]' alt="" />
            </div>
             </Link>
            <p className='productName'>{item.title}</p>
            <div className="content  flex justify-between items-center flex-row w-full p-5 ">
                <div className='flex flex-col items-center'>
                <h2>Rs. {item.price} &#x20B9; </h2>
                <span className='text-[#ff905a] font-[400] ml-[5px] text-[12px]'>({item.discountPercentage}% off)</span>
                
                </div>
             
              <Link className='addCartBtn' onClick={(e)=>handleAdd(item)}>Add to cart</Link>
            </div>
           
        </div>
       
    

     ))
      :
      data.filter((items) => items.category === category).map((item,id)=>(
        <div key={id} className="card flex justify-center items-center flex-col mx-5 my-3">
        <Link to={'/singleItemInfo'} state= {{itemData:item }} // Pass the item data as state
        >
        <div className='imgBox'>
        <img src={item.thumbnail} className='mt-5  hover:scale-[1.2] transition-all duration-[400ms]' alt="" />
        </div>
        </Link>
        <p className='productName'>{item.title}</p>
        <div className="content  flex justify-between items-center flex-row w-full p-5 ">
            <div className='flex flex-col items-center'>
            <h2>Rs. {item.price} &#x20B9; </h2>
            <span className='text-[#ff905a] font-[400] ml-[5px] text-[12px]'>({item.discountPercentage}% off)</span>
            
            </div>
         
          <Link className='addCartBtn' onClick={(e)=>handleAdd(item)}>Add to cart</Link>
        </div>
  </div> 
      ))
    }
    </div>
    </div>
    <Toaster/>
   
    </>
  )
}

export default Products