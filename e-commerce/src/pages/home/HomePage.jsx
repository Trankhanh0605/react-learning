import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ProductsGrid from './ProductsGrid';
import './HomePage.css';
import { useSearchParams } from 'react-router';

function HomePage({ cart , getCartItems}) {
  const [products, setProducts] = useState([]);
  const [searchParam]=useSearchParams();
  const search=searchParam.get('search');

  useEffect(() => {
    const getHomeData = async () => {
      const urlPath=search? `/api/products?search=${search}`:'/api/products';
      const response = await axios.get(urlPath);
      setProducts(response.data)
    }
    getHomeData();
  }, [search])

  return (
    <>
      <title>Ecommerce</title>
      <Header cart={cart} />
      {/* need to pass a prop to the header because cart quantity is inside the header */}
      <div className="home-page">
        <ProductsGrid products={products} getCartItems={getCartItems} />
      </div>
    </>
  );
}

export default HomePage;