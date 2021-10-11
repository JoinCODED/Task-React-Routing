import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css";
import Detail from "./components/Detail";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        {/* this idea behind ":" in line 16, it to tell the system that the everything after /productllist/ it going to be random */}
        <Route exact path="/productlist/:Productslug">
          <Detail />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/productlist">
          <ProductList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
