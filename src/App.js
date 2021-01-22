import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Menu } from "./pages/Menu/Menu";
import { GlobalStyle } from "./GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Route path="/" exact component={Home} />
      <Route path="/menu" component={Menu} />
    </Router>
  );
};

export default App;
