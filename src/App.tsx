import React from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Edit from './pages/Edit.tsx';
import Auth from './pages/Auth.tsx';
import Main from './pages/Main.tsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>
    },
    {
      path: "/edit",
      element: <Edit/>
    },
    {
      path: "/auth",
      element: <Auth/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <Main/>
    </div>
  );
}

export default App;
