import { useState, useContext, createContext } from 'react';
import { medicine } from './pharma';

const CartContext = createContext('light');

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([] as medicine[]);

    const addItemToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeItemFromCart = (item) => {
        setCart(cart.filter((i) => i !== item));
    };

    return (
        <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export { CartProvider, useCart };