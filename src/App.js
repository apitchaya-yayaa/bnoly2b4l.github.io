import React from 'react'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'
import GlobalStyle from './GlobalStyle'
import '../node_modules/antd/dist/antd.min.css'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <Homepage />
      </div>
    </>
  )
}

export default App
