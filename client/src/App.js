import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";
import store from "./utils/store";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Catering from "./pages/Catering";
import OnlineOrder from "./pages/OnlineOrder";
import Detail from "./pages/Detail";
import Gallery from "./pages/Gallery";
import DeliveryApps from "./pages/DeliveryApps";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";
import Footer from "./components/Footer";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Nav />
            <Routes>
              <Route path="/OnlineOrder" element={<OnlineOrder />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
              <Route path="/Catering" element={<Catering />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/DeliveryApps" element={<DeliveryApps />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/success" element={<Success />} />
              <Route path="/orderHistory" element={<OrderHistory />} />
              <Route path="/products/:id" element={<Detail />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Provider>

          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
