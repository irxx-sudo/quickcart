import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductList from './ProductList';
import { useCart } from '../context/CartContext';

function CategoryPage({ products }) {
  const { addToCart } = useCart();
  const { category } = useParams();
  const normalizedCategory = (category || '').trim().toLowerCase();

  const filteredProducts = useMemo(() => {
    if (!normalizedCategory) return [];
    return products.filter((p) => p.category.toLowerCase() === normalizedCategory);
  }, [products, normalizedCategory]);

  return (
    <div className="category-page">
      <h2 className="category-title">{category} Products</h2>

      {filteredProducts.length === 0 ? (
        <div className="empty-category">
          <p>😕 No products found in this category</p>
          <Link to="/" className="back-home-link">
            ← Back to all products
          </Link>
        </div>
      ) : (
        <ProductList products={filteredProducts} onAddToCart={addToCart} />
      )}
    </div>
  );
}

export default CategoryPage;


