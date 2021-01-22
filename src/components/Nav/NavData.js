import * as AiIcons from 'react-icons/ai';
import { FaCoffee } from 'react-icons/fa';
import { MdRestaurantMenu } from 'react-icons/md';


export const NavData = [
    {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
    },
    {
        title: "Menu",
        path: "/menu",
        icon: <MdRestaurantMenu />
    },
    {
        title: "Our Coffee",
        path: "/about",
        icon: <FaCoffee />,
        cName: "nav-text"
    },
    {
        title: "My Profile",
        path: "/profil",
        icon: <AiIcons.AiFillProfile />,
        cName: "nav-text"
    }

]