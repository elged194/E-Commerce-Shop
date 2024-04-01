import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/home/Home";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound";
import ProdectDetalis from "./pages/prodect detalis/prodect-detalis";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="prodect-detalis/:id" element={<ProdectDetalis />} />

      <Route path="*" element={<NotFound />} />

    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
