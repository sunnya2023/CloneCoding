import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Modal from './Components/Modal/Modal'



const App = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div id='app'>
      <Header />
      <Main setShowModal={setShowModal} />
      <Footer />
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  )
}

export default App