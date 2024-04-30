import React from 'react'

import Home from './pages/Home'

const App = () => {
  const func = (cv) => {
    console.log('loaded', cv)
  }

  return (
    <Home />
  )
}

export default App
