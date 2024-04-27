import React, { useState, useEffect } from 'react'

import { Header, Inputimg, Inputs, Canvas, Button } from '../components'
import { reader } from '../helpers'

const Home = () => {
  const [file, setFile] = useState(null)
  const [img, setImg] = useState(null)
  const [threshold, setThreshold] = useState(127)
  const [isCut, setIsCut] = useState(false)
  const [convert, setConvert] = useState(false)

  useEffect(() => {
    if (file) {
      reader(file).then((result) => setImg(result))
    }
  }, [file])

  const handleConvert = () => {
    setConvert(!convert)
  }

  return (
    <main className=" flex items-center flex-col pb-8">
      <Header />
      <Inputimg props={{ img, file, setFile }} />
      <Inputs props={{ setIsCut, isCut, setThreshold, threshold }} />
      <Button func={handleConvert} />
      <Canvas props={{ img, isCut, threshold, convert }} />
    </main>
  )
}

export default Home
