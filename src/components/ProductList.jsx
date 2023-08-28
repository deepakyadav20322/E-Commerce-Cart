import {useState,useEffect,memo} from 'react'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { toast, Toaster } from 'react-hot-toast';
import SingleItemPage from '../pages/SingleItemPage';
import { fetchProductsByCategory,fetchProducts } from '../store/productSlice';

const ProductList = memo(({item,id,}) => {
       const {data}=useSelector((state)=>state.cart);
    const [qty,setQty] = useState(1);
    const dispatch = useDispatch();
    const handleAdd = (product) => {
       
       const dataAvailable = data.some(item => item.id === product.id);

       console.log(dataAvailable,"Available")
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
   
        <div key={id} className="card flex justify-center items-center flex-col mx-5 my-3">
            <Link to={'/singleItemInfo'} state= {{itemData:item }} // Pass the item data as state
            >
            <div className='imgBox'>
            <img src={item.thumbnail} className='mt-5' alt="" />
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
            <Toaster/>
        </div>
    
  )
})

export default ProductList