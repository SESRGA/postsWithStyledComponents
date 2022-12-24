import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/errorPage';
import HomePage from './pages/homePage'
import styled from 'styled-components'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
`

function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <HomePage />,
          errorElement: <ErrorPage />
        }
      ]);
    return (
      <AppWrapper>
        <RouterProvider router={router}/>
      </AppWrapper>
    )
}

export default App