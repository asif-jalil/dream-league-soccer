import "./App.css";
import "./asset/fontawesome-icon";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import TeamDetail from "./components/TeamDetail/TeamDetail";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/team/:teamId">
          <TeamDetail></TeamDetail>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
