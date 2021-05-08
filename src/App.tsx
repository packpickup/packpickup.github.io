import "./App.css";

import { FunctionComponent, useEffect } from "react";
import { Container } from "react-bootstrap";
import ReactGA from "react-ga";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";

export const App: FunctionComponent = () => {
  useEffect(() => {
    ReactGA.initialize("UA-196491304-1");
    window.addEventListener(
      "hashchange",
      () => {
        console.log("LOG PAGE CHANGE");
        ReactGA.pageview(window.location.href);
      },
      false
    );
  }, []);

  return (
    <HashRouter basename="/">
      <Container style={{ maxWidth: 540 }}>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/search-results">
              <SearchResults />
            </Route>
          </Switch>
        </div>
        <footer className="footer">
          <small>© PackPickup {new Date().getFullYear()}</small>
        </footer>
      </Container>
    </HashRouter>
  );
};
