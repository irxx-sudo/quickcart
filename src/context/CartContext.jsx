import { createContext, useContext, useMemo, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CartContext = createContext(undefined);

export function useCart() {

  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider');
  }
  return ctx;
}

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('quickcart-cart', []);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prev) => {
      if (newQuantity <= 0) {
        return prev.filter((item) => item.id !== productId);
      }
      return prev.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item));
    });
  };

  const toggleCart = () => {
    setIsCartOpen((v) => !v);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const value = useMemo(
    () => ({
      cart,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleCart,
      getTotalItems,
      getTotalPrice,
    }),
    [
      cart,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleCart,
      getTotalItems,
      getTotalPrice,
    ]
  );


  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

