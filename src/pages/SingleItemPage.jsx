import {useState} from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import StarRating from "../components/StarRating";

import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdOutlineSecurity, MdVerified } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Toaster,toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const SingleItemPage = () => {
    const {data}=useSelector((state)=>state.cart);
  const location = useLocation();
  const [qty,setQty] = useState(1);
  const dispatch = useDispatch();

  // Access the itemData from location.state
  const itemData = location.state?.itemData;
  console.log(location.state,"fffffffyyyyyy");
  const handleAdd = (product) => {
    const dataAvailable = data.some(item => item.id === product.id);

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
      <Navbar />
      {itemData !== null ? (
        <div className="singleItem ">
          <div className="left flex flex-col items-center">
            {/* <SinglePageSlider AllImg={(itemData?.images)} /> */}
            <img
              className="h-[300px] w-[300px] object-cover"
              src={itemData.thumbnail}
              alt=""
            />
            <div className="flex flex-row gap-4 my-2">
              {itemData.images.slice(0, 4).map((img, idx) => (
                <div key={idx} className="extraImg border-2">
                  <img
                    className="w-[100px] h-[100px] object-cover"
                    src={img}
                    alt="extraImg"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <p className="font-[500] text-[20px]">{itemData.title}</p>
            <p>
              <span className="font-[500] tetx-[16px] opacity-75">
                Brand- &nbsp;&nbsp;
              </span>
              {itemData.brand}
            </p>
            <StarRating rating={itemData.rating} review={itemData.stock} />
            <div className="priceShow text-[#2874F0]">
                <span className="font-[500] opacity-75 text-[17px] ">Price:</span> <span>{itemData.price}&#x20B9;</span>
                <span className='text-[#ff905a] font-[500] ml-[10px] text-[12px]'>({itemData.discountPercentage}% off)</span>
            </div>
            <div className="my-2">
              <p className="font-[500] opacity-70 mt-2">Description:-</p>
              <p className="pl-[10px] border-2 p-2">{itemData.description}</p>
            </div>

            <div className="service-offers flex flex-row justify-between border-b-2 pb-2 my-3">
              <div className="flex flex-col items-center justify-center">
                <TbTruckDelivery
                  size={35}
                  className="opacity-100 rounded-full p-1 bg-slate-100 "
                  color="#2874F0"
                />
                <p className="font-[500] text-[13px] opacity-75">
                  Free delivery
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <TbReplace
                  size={35}
                  className="opacity-100 rounded-full p-1 bg-slate-100 "
                  color="#2874F0"
                />
                <p className="font-[500] text-[13px] opacity-75">
                  30 days replacement
                </p>
              </div>
              <div className=" verified flex flex-col items-center justify-center">
                <MdVerified
                  size={35}
                  className="opacity-100 rounded-full p-1 bg-slate-100 "
                  color="#2874F0"
                />
                <p className="font-[500] text-[13px] opacity-75">Verified</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <MdOutlineSecurity
                  size={35}
                  className="opacity-100 rounded-full p-1 bg-slate-100 "
                  color="#2874F0"
                />
                <p className="font-[500] text-[13px] opacity-75">
                  2 years warenty
                </p>
              </div>
            </div>
            <h2 className="font-[500] ">
              <span className="opacity-50">Available:&nbsp;&nbsp;&nbsp;</span>{" "}
              in stock
            </h2>
            <h2 className="font-[500] ">
              <span className="opacity-50">Number:&nbsp;&nbsp;&nbsp;</span>
              {itemData.stock}
            </h2>
            <div className="flex flex-row font-[500]">
              <span className="opacity-50 mr-3">color: </span>
              <span className="mt-[0.4rem] flex flex-row">
                <BsFillCircleFill className="mr-2 cursor-pointer" color="red" />
                <BsFillCircleFill
                  className="mr-2 cursor-pointer"
                  color="gray"
                />
                <BsFillCircleFill
                  className="mr-2 cursor-pointer"
                  color="blue"
                />
              </span>
            </div>
            <div className="singlePage-btn  flex flex-row gap-10 mt-3 font-[500]">
              <button className="px-8 py-2 bg-[#2874F0] text-white"
               onClick={()=>handleAdd(itemData)}
              >
                Add to Cart
              </button>
              <button className="px-8 py-2 bg-[#2874F0] text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Handle the case where itemData is not available
        <div className="text-center mt-5">
          <p>Item not found</p>
          <p>Unethecal way to access...</p>
        </div>
      )}
      <Toaster/>
    </>
  );
};

export default SingleItemPage;
