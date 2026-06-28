import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ProductsGrid from './ProductsGrid';
import './HomePage.css';

function HomePage({ cart , getCartItems}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data)
    }
    getHomeData();
  }, [])

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