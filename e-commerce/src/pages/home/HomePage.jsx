import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ProductsGrid from './ProductsGrid';
import './HomePage.css';

function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((response) => {
      setProducts(response.data)
    });
  }, [])

  return (
    <>
      <title>Ecommerce</title>
      <Header cart={cart} />
      {/* need to pass a prop to the header because cart quantity is inside the header */}
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}

export default HomePage;