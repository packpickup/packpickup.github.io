import "./App.css";

import { FunctionComponent } from "react";
import { Container } from "react-bootstrap";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";

export const App: FunctionComponent = () => {
  return (
    <HashRouter basename="/">
      <Container style={{ maxWidth: 540 }}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
        </Switch>
        <footer className="footer">
          <small>© PackPickup {new Date().getFullYear()}</small>
        </footer>
      </Container>
    </HashRouter>
  );
};
