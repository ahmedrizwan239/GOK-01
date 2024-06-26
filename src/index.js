import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from './context/cart-context';
import Home from './views/home';
import SignIn from './views/auth';
import Cart from './views/cart';
import Checkout from './views/checkout';
import Success from './views/order';
import { UserProvider } from './context/user-context';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <SignIn />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);

root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}>
    {/* <StrictMode> */}
      <CartProvider>
        <UserProvider>
          <ChakraProvider theme={theme}>
            <ColorModeScript />
            <RouterProvider router={router} />
          </ChakraProvider>
        </UserProvider>
      </CartProvider>
    {/* </StrictMode> */}
  </GoogleOAuthProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
