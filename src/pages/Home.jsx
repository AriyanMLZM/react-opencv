import React, { useState, useEffect } from 'react'

import { Header, Inputimg } from '../components'
import { reader } from '../helpers'

const Home = () => {
  const [file, setFile] = useState(null)
  const [img, setImg] = useState(null)

  useEffect(() => {
    if (file) {
      reader(file).then((result) => setImg(result))
    }
  }, [file])

  return (
    <main className="h-screen w-screen bg-bgColor flex items-center flex-col">
      <Header />
      <Inputimg props={{ img, file, setFile }} />
    </main>
  )
}

export default Home
