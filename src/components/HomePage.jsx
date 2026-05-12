import React, { useMemo } from 'react';
import ProductList from './ProductList';
import { useCart } from '../context/CartContext';

function HomePage({ products, searchTerm }) {
  const { addToCart } = useCart();
  const normalized = searchTerm.trim().toLowerCase();

  const filteredProducts = useMemo(() => {
    if (!normalized) return products;
    return products.filter((p) => p.name.toLowerCase().includes(normalized));
  }, [products, normalized]);

  return (
    <div className="home-page">
      {searchTerm.trim() && (
        <p className="search-results">Found {filteredProducts.length} products</p>
      )}

      {filteredProducts.length === 0 ? (
        <p className="no-results">No products found</p>
      ) : (
        <ProductList products={filteredProducts} onAddToCart={addToCart} />
      )}
    </div>
  );
}

export default HomePage;


