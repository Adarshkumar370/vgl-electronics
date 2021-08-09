import { Route, Switch } from "react-router-dom";
import About from "./containers/About";
import main from "./containers/main";
import Product from "./containers/Product";
import CeilingFan from "./containers/products/CeilingFan";
import TableFan from "./containers/products/TableFan";
import PedestalFan from "./containers/products/PedestalFan";
import WallFan from "./containers/products/WallFan";
import VentilatingFan from "./containers/products/VentilatingFan";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={main} />
        <Route path="/about" exact component={About} />
        <Route path="/product" exact component={Product} />
        <Route path="/ceiling-fan" exact component={CeilingFan} />
        <Route path="/table-fan" exact component={TableFan} />
        <Route path="/pedestal-fan" exact component={PedestalFan} />
        <Route path="/wall-fan" exact component={WallFan} />
        <Route path="/ventilating-fan" exact component={VentilatingFan} />

      </Switch>
    </>
  );
}

export default App;
