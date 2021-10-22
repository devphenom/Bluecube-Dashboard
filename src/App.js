import { createContext, useMemo, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// compoenents import
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.scss";
import ComingSoon from "./pages/ComingSoon/ComingSoon";

export const ThemeContext = createContext();
const App = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const memoizedValues = useMemo(
    () => ({
      openSidebar,
      setOpenSidebar,
    }),
    [openSidebar]
  );

  return (
    <ThemeContext.Provider value={memoizedValues}>
      <BrowserRouter>
        <div id="app">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={ComingSoon} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
