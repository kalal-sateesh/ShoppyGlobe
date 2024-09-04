/* eslint-disable react-refresh/only-export-components */
import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

/* Lazy loading */

const ProductList = React.lazy(() => import("./components/ProductList.jsx"));
const About = React.lazy(() => import("./components/About.jsx"));
const Contact = React.lazy(() => import("./components/Contact.jsx"));
const Cart = React.lazy(() => import("./components/Cart.jsx"));
const ProductDetails = React.lazy(() =>
  import("./components/ProductDetails.jsx")
);
const Checkout = React.lazy(() => import("./components/Checkout.jsx"));
const CheckoutPayment = React.lazy(() =>
  import("./components/CheckoutPayment.jsx")
);
const NotFound = React.lazy(() => import("./components/NotFound.jsx"));
const App = React.lazy(() => import("./App.jsx"));

/* Creating routes by using createBrowserRouter */
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div style={{ marginTop: "100px", fontSize: "20px" }}>Loading...</div>
        }
      >
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <div style={{ marginTop: "100px", fontSize: "20px" }}>
                Loading...
              </div>
            }
          >
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={
              <div style={{ marginTop: "100px", fontSize: "20px" }}>
                Loading...
              </div>
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense
            fallback={
              <div style={{ marginTop: "100px", fontSize: "20px" }}>
                Loading...
              </div>
            }
          >
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense
            fallback={
              <div style={{ marginTop: "100px", fontSize: "20px" }}>
                Loading...
              </div>
            }
          >
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/ProductDetails/:pid",
        element: (
          <Suspense
            fallback={
              <div style={{ marginTop: "100px", fontSize: "20px" }}>
                Loading...
              </div>
            }
          >
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense
            fallback={
              <div style={{ marginTop: "100px", fontSize: "20px" }}>
                Loading...
              </div>
            }
          >
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "/checkout/payments",
        element: (
          <Suspense
            fallback={
              <div style={{ marginTop: "100px", fontSize: "20px" }}>
                Loading...
              </div>
            }
          >
            <CheckoutPayment />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense
        fallback={
          <div style={{ marginTop: "100px", fontSize: "20px" }}>Loading...</div>
        }
      >
        <NotFound />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
