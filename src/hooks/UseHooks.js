import { useContext } from "react";
import { GlobalContext } from '../context/GlobalContext';

export const useHooks = () => {
const { navOpen, setNavOpen, activeCart, setActiveCart } = useContext(GlobalContext);

const showNav = () => setNavOpen(!navOpen);
const closeNav  = () => setNavOpen(false);

const showActiveCart = () => setActiveCart(!activeCart)

return {
    navOpen, 
    setNavOpen,
    showNav,
    closeNav,
    activeCart,
    setActiveCart,
    showActiveCart
}

}