import React from 'react'
import Nav from './comp/Nav'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

const App = () => {
  return (
    <>
      <Auth0Provider
        domain="dev-g4bsdzq8no6v0le5.us.auth0.com"
        clientId="I3lfR9vIJtljKfvA5PZpKZcKpBckSrni"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Auth0Provider>
    </>
  )
}

export default App