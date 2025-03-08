import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProducts = products.filter((item)=>(item.bestSeller))
        setBestSeller(bestProducts.slice(0,5))
    },[])

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
        <title text1={'BEST'} text2={'SELLER'} />
        <p></p>
        </div>
    </div>
  )
}

export default BestSeller