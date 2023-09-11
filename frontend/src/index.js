import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Homepage from './pages/Homepage';
import ChatPage from './pages/ChatPage';
import { Provider } from 'react-redux';
import store from './redux/app/store';

const authTokens = JSON.parse(localStorage.getItem("authTokens"));

console.log(authTokens, "this is index")

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: !authTokens?.access ? <Homepage /> : <Navigate to="/chats" />,
      },
      {
        path: '/chats',
        element: authTokens?.access ? <ChatPage /> : <Navigate to="/"/>,
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
