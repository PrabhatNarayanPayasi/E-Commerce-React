import React from 'react'
import Products from '../components/Products'
import VideoPlayer from '../components/VideoPlayer'
import {items} from "../context/Data"
import {Videos} from "../context/Data"
import { useParams } from 'react-router'
const ProductByCategory = () => {
  const {cat} = useParams();
  const videoByCategory = Videos.find((vid)=>vid.category.toLowerCase() === cat.toLowerCase());
  const productsByCategory = items.filter((pro)=>pro.category.toLowerCase() === cat.toLowerCase());
  return (
    <div>
     <VideoPlayer src={videoByCategory.url} />
     <Products items={productsByCategory} />
    </div>
  )
}

export default ProductByCategory
