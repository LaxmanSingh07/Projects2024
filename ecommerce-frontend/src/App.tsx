import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
