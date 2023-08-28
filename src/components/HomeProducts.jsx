import {memo, useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { STATUSES } from '../store/state';
import ProductList from './ProductList';
import { fetchProducts,fetchProductsByCategory } from '../store/productSlice';
import { fetchCategory } from '../store/categorySlice';

const HomeProducts = () => {
    // const [items,setItems] = useState();
    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.product);
   
            console.log('jjjjjjjjjjjj')
         
            useEffect(() => {
                
                return ()=>{
                    dispatch(fetchProducts());
                    console.log("klklkl",data)
                }
             
            }, []);

    if (status === STATUSES.LOADING) {
        return <h2 className='h-[30vh] flex justify-center items-center'>
        <div className="relative">
<div className="w-10 h-10 border-purple-200 border-[4px] rounded-full"></div>
<div className="w-10 h-10 border-[#2874f0] border-t-[4px] animate-spin rounded-full absolute left-0 top-0"></div>
</div>
</h2>; ;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

  return (
    <div>
         <div className=' max-w-[1280px] m-auto mt-14'>
            <h2 className='ml-14 font-[700] text-[20px]'>LAPTOPS</h2>
        <div className='flex justify-center items-center flex-row flex-wrap'>
        {(data)
        .filter(item => item.category === "laptops").slice(0,4).map(item => (
                       <ProductList key={item.id} id={item.id} item={item} />
        ))
        } 
        
       
        </div>
        </div>
    
 {/* ---------------------------------------------------------------------------------- */}
 <div className=' max-w-[1280px] m-auto mt-14'>
            <h2 className='ml-14 font-[700] text-[20px]'>Womens Watches</h2>
        <div className='flex justify-center items-center flex-row flex-wrap'>
        {(data)
        .filter(item => item.category === "womens-watches").slice(0,4).map(item => (
                       <ProductList key={item.id} item={item} />
        ))
        } 
        
       
        </div>
        </div>
{/* ------------------------------------------------------- */}
        <div className=' max-w-[1280px] m-auto mt-14'>
            <h2 className='ml-14 font-[700] text-[20px]'>Mens Shirts</h2>
        <div className='flex justify-center items-center flex-row flex-wrap'>
        {(data)
        .filter(item => item.category === "mens-shirts").slice(0,4).map(item => (
                       <ProductList key={item.id} item={item} />
        ))
        } 
        
       
        </div>
        </div>

{/* -------------------------------------------------------------------- */}
        <div className=' max-w-[1280px] m-auto mt-14'>
            <h2 className='ml-14 font-[700] text-[20px]'>Sunglasses</h2>
        <div className='flex justify-center items-center flex-row flex-wrap'>
        {(data)
        .filter(item => item.category === "sunglasses").slice(0,4).map(item => (
                       <ProductList key={item.id} item={item} />
        ))
        } 
        </div>
        </div>

 {/* ------------------------------------------------------- */}
        <div className=' max-w-[1280px] m-auto mt-14'>
            <h2 className='ml-14 font-[700] text-[20px]'>Furniture</h2>
        <div className='flex justify-center items-center flex-row flex-wrap'>
        {(data)
        .filter(item => item.category === "furniture").slice(0,4).map(item => (
                       <ProductList key={item.id} item={item} />
        ))
        } 
        
       
        </div>
        </div>
        
    </div>
    

  )
}

export default HomeProducts