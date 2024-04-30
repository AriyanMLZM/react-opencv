import React, { useState, useEffect } from 'react'

import { Inputimg, Button, Canvas } from '../components' 
import { reader } from '../helpers'

const Home = () => {
  const [file, setFile] = useState(null)
  const [img, setImg] = useState(null)
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
    <main className=" flex items-center flex-col pb-8 pt-8">
      <Inputimg props={{ img, file, setFile }} />
      <Button func={handleConvert} />
      <Canvas props={{ img, convert }} />
    </main>
  )
}

export default Home
