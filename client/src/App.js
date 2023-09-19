import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// import { Provider } from "react-redux";
// import store from "./utils/store"

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import OnlineOrder from "./pages/OnlineOrder";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import DeliveryApps from "./pages/DeliveryApps";
import Catering from "./pages/Caterning";
import Contact from "./pages/Contact";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("id_token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    // <ApolloProvider client={client}>
    <Router>
      <div>
        {/* <Provider store={store}> */}
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/OnlineOrder" element={<OnlineOrder />} />
          <Route path="/DeliveryApps" element={<DeliveryApps />} />
          <Route path="/Catering" element={<Catering />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        {/* </Provider> */}
      </div>
      <Footer />
    </Router>

    // </ApolloProvider>
  );
}

export default App;
