import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

const ComingSoon = () => (
  <>
    {" "}
    <h1> Coming Soon!</h1>
    <p>Page not available yet.</p>
  </>
);
const App = () => {
  return (
    <BrowserRouter>
      <div id="app">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
