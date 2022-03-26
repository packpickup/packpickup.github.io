import "./App.css";

import AddToHomeScreen from "@ideasio/add-to-homescreen-react";
import { FunctionComponent } from "react";
import { Container } from "react-bootstrap";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";

export const App: FunctionComponent = () => {
  return (
    <>
      <AddToHomeScreen />
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
    </>
  );
};
