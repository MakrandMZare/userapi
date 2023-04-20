import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Products from "./pages/ProductList";
import Register from "./pages/Register";
import AllShopsStores from "./pages/AllShopsStores";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/allShopsStore/:title" element={<AllShopsStores />} />
        <Route path="/products/:cat" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login">{user ? <Link to="/" /> : <Login />}</Route>
        <Route path="/register">{user ? <Link to="/" /> : <Register />}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
