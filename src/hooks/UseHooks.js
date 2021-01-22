import { useContext } from "react";
import { GlobalContext } from '../context/GlobalContext';

export const useHooks = () => {
const { navOpen, setNavOpen } = useContext(GlobalContext);

const showNav = () => setNavOpen(!navOpen);

const closeNav  = () => setNavOpen(false);

return {
    navOpen, 
    setNavOpen,
    showNav,
    closeNav
}

}