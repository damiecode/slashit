import './styles/App.css';
import Home from './HomePage';
import { isMobile } from "react-device-detect";
import MobileHome from './mobile/Homepage';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://api-slashit-staging.herokuapp.com/graphql",
  cache: new InMemoryCache(),
})

function App() {
  if (isMobile) {
    return(
      <ApolloProvider client={client}>
        <MobileHome />
      </ApolloProvider>
    );
  }
  return (
    <ApolloProvider client={client}>
      <div className="relative">
        <Router>
          <Switch>
            <Route path="/orderID=:id">
              <Home client={client} />
            </Route>
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
