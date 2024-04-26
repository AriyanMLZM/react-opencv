import React, { useState, useEffect } from 'react'

import { Header, Inputimg, Inputs, Canvas } from '../components'
import { reader } from '../helpers'

const Home = () => {
  const [file, setFile] = useState(null)
  const [img, setImg] = useState(null)
  const [med, setMed] = useState(127)
  const [isCut, setIsCut] = useState(false)

  useEffect(() => {
    if (file) {
      reader(file).then((result) => setImg(result))
    }
  }, [file])

  return (
    <main className=" flex items-center flex-col pb-4">
      <Header />
      <Inputimg props={{ img, file, setFile }} />
      <Inputs />
      <Canvas props={{ img }} />
    </main>
  )
}

export default Home
