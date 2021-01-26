import { useContext } from "react";
import { GlobalContext } from '../context/GlobalContext';

export const useHooks = () => {
const { navOpen, setNavOpen, activeCart, setActiveCart, cart, setCart } = useContext(GlobalContext);

const showNav = () => setNavOpen(!navOpen);
const closeNav  = () => setNavOpen(false);

const showActiveCart = () => setActiveCart(!activeCart)
const closeCart = () => setActiveCart(false)

const removeItem = (e, id) => {
    e.preventDefault();
    const remove = cart.filter((c) => c.id !== id);
    setCart(remove);
}


const firstCoffee = () => {
    const firstInfo = {
        type: "Brewedcoffee",
        price: "43 kr"
    }

    setCart([...cart, firstInfo]);
} 
const secondCoffee = () => {
    const firstInfo = {
        type: "Coffee Doppio", 
        price: "47 kr",
    }

    setCart([...cart, firstInfo]);
} 
const thirdCoffee = () => {
    const firstInfo = {
        type: "Cappucino", 
        price: "49 kr",
    }

    setCart([...cart, firstInfo]);
} 
const fourthCoffee = () => {
    const firstInfo = {
        type: "Latte Macchiato", 
        price: "53 kr",
    }

    setCart([...cart, firstInfo]);
} 
const fifthCoffee = () => {
    const firstInfo = {
        type: "Coffee Latte", 
        price: "55 kr",
    }

    setCart([...cart, firstInfo]);
} 
const sixthCoffee = () => {
    const firstInfo = {
        type: "Cortado", 
        price: "29 kr",
    }

    setCart([...cart, firstInfo]);
} 

return {
    navOpen, 
    setNavOpen,
    showNav,
    closeNav,
    cart, 
    setCart,
    activeCart,
    setActiveCart,
    showActiveCart,
    firstCoffee,
    secondCoffee,
    thirdCoffee,
    fourthCoffee,
    fifthCoffee,
    sixthCoffee,
    closeCart,
    removeItem,
}

}