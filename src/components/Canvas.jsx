import React, { useEffect, useRef, useState } from 'react'

import { convertPixels, imgDownloader } from '../helpers'
import { Button2 } from '.'

const Canvas = ({ props }) => {
  const [img, setImg] = useState(null)
  const canvasRef = useRef()

  useEffect(() => {
    const image = document.getElementById('img')
    const ctx = canvasRef.current.getContext('2d')

    if (props.img) {
      canvasRef.current.width = props.isCut ? 512 : image.naturalWidth
      canvasRef.current.height = props.isCut ? 512 : image.naturalHeight

      ctx.drawImage(
        image,
        0,
        0,
        props.isCut ? 512 : image.naturalWidth,
        props.isCut ? 512 : image.naturalHeight
      )
      const imgd = ctx.getImageData(
        0,
        0,
        props.isCut ? 512 : image.naturalWidth,
        props.isCut ? 512 : image.naturalHeight
      )
      const pixels = imgd.data

      convertPixels(pixels, props.threshold)

      ctx.putImageData(imgd, 0, 0)
      setImg(canvasRef.current.toDataURL('image/jpeg'))
    }
  }, [props.convert, props.isCut])

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
