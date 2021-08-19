import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
