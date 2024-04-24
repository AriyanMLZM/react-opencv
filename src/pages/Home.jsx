import React, { useState, useEffect } from 'react'

import { Header, Inputimg, Canvas } from '../components'
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
    <main className=" flex items-center flex-col pb-4">
      <Header />
      <Inputimg props={{ img, file, setFile }} />
      <Canvas props={{ img }} />
    </main>
  )
}

export default Home
