import React from 'react'
import { useContext } from 'react';
  import Products from "./Products"
  import VideoPlayer from "./VideoPlayer"
 
import DataContext from "../context/DataContext";
const All_Product = () => {
  const {products}  = useContext(DataContext);
  return (
   <>
   <VideoPlayer src= "https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/xlarge_2x.mp4"/>
   <Products  items={products} />
   </>
  )
}

export default All_Product
