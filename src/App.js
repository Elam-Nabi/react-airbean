import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

import { Home } from "./pages/Home/Home";
import { Menu } from "./pages/Menu/Menu";
import { About } from "./pages/About/About";
import { Profile } from "./pages/Profile/Profile";

import { Hamburger } from "./components/Hamburger/Hamburger";

import { GlobalStyle } from "./GlobalStyles";
import { GlobalContext } from "./context/GlobalContext";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{ navOpen, setNavOpen }}>
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
