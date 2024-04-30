import React, { useEffect, useRef, useState } from 'react'

import { imgDownloader } from '../helpers'
import { Button2 } from '.'

const Canvas = ({ props }) => {
  const [img, setImg] = useState(null)
  const canvasRef = useRef()

  useEffect(() => {
    const image = document.getElementById('img')
    const ctx = canvasRef.current.getContext('2d')

    if (props.img) {
      canvasRef.current.width = image.naturalWidth
      canvasRef.current.height = image.naturalHeight

      ctx.drawImage(
        image,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight
      )

      if (cv) {
        let src = cv.imread(canvasRef.current)
        let dst = new cv.Mat()
        cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0)
        cv.imshow(canvasRef.current, dst)
      }

      setImg(canvasRef.current.toDataURL('image/jpeg'))
    }
  }, [props.convert])

  return (
    <>
      <canvas className="border-2 hidden" ref={canvasRef}></canvas>
      {img && (
        <section className="flex flex-col mt-7 justify-center items-center p-6 border-2 rounded">
          <img
            src={img}
            alt="no image"
            className="rounded md:w-[500px] w-[250px] select-none"
            draggable={false}
          />
          <Button2 func={() => imgDownloader(img)} />
        </section>
      )}
    </>
  )
}

export default Canvas
