import {MdDelete} from 'react-icons/md'
import React from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className=''> 

    <div className='flex gap-20 w-9/12 border-b-2 border-gray-600 py-7 '>

      <div className='h-[230px] w-[300px]'>
        <img src={item.image} className='h-full w-full' alt='' />
      </div>

      <div className='flex flex-col justify-around'>
        <h1 className='text-gray-700 font-semibold text-xl mt-1'>{item.title}</h1>
        <h1>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
        <div className='flex justify-between'>
          <p className='text-green-700 font-bold'>${item.price}</p>
          <div className='bg-red-300 rounded-full p-3 text-red-900 cursor-pointer' onClick={removeFromCart}><MdDelete /></div>
        </div>
      </div>

    </div>

    </div>
  );
};

export default CartItem;