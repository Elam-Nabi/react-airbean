import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { Home } from "./pages/Home/Home";
import { Menu } from "./pages/Menu/Menu";
import { About } from "./pages/About/About";
import { Profile } from "./pages/Profile/Profile";

import { Hamburger } from "./components/Hamburger/Hamburger";

import { GlobalStyle } from "./GlobalStyles";
import { GlobalContext } from "./context/GlobalContext";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartEmpty, setCartEmpty] = useState(false);

  useEffect(() => console.log(cart), [cart]);

  return (
    <GlobalContext.Provider
      value={{
        navOpen,
        setNavOpen,
        activeCart,
        setActiveCart,
        cart,
        setCart,
        cartEmpty,
        setCartEmpty,
      }}
    >
      <Router>
        <GlobalStyle />
        <Hamburger />
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
