import {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import CategoryList from '../components/CategoryList'
import HomeProducts from '../components/HomeProducts'
import { STATUSES } from '../store/state'
const Home = () => {
 
  return (
    <div>
        <Navbar/>
        
            <div className=''>
            <div className='opacity-0 h-[0px]'>
            <CategoryList />
            </div>
            <Slider/>
            <HomeProducts/>
            </div>
        
       
         
       
       
    </div>
  )
}

export default Home