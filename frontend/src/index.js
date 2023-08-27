import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from './pages/Homepage';
import ChatPage from './pages/ChatPage';
import axios from "axios"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Homepage/>
      },
      {
        path: '/chats',
        element: <ChatPage />,
        loader: async () => {
          const data = await axios.get('/api/chat');
          return data
        }
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);
