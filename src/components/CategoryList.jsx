import {useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchCategory} from '../store/categorySlice';
import { STATUSES } from '../store/state';
import { setCategory } from '../store/categorySlice';
import { fetchProductsByCategory } from '../store/productSlice';


const CategoryList = () => {

    const dispatch = useDispatch();
    const { data: category, status } = useSelector((state) => state.category);
       
    
    useEffect(() => {
        dispatch(fetchCategory());
       
    }, []);

    if (status === STATUSES.LOADING) {
        // return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        // return <h2>Something went wrong!</h2>;
    }
    

    return (

    <>
    
        
     <div className='.overflow-scroll overflow-x-auto categoryList sticky top-11 flex justify-between items-center flex-row text-[#212121] w-full px-2 m-auto my-1'>
     
    {
       
        category.slice(0,16).map(((cat,index)=>(
          
        <div key={index}><button onClick={(e)=>dispatch(setCategory(cat))} className='text-[#2874F0] whitespace-pre font-[500] text-[17px] px-5 py-3 sm:p-3 capitalize'>{cat}</button></div>
      
      
        )
        ))
       
    }
   

    </div>
   
   
  </>
  )
}

export default CategoryList