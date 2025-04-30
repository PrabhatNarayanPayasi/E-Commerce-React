import React from 'react'
import Products from '../components/Products'
import { items } from '../context/Data'
import { useParams } from 'react-router'
const Search_Product = () => {
  const {term} = useParams();
  const SearchProducts = items.filter(pro=>pro.title.toLowerCase().includes(term.toLowerCase()));
  return (
    <div>
      <Products items={SearchProducts} />
    </div>
  )
}

export default Search_Product
