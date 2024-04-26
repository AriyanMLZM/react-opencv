import React, { useEffect, useRef, useState } from 'react'

import { convertPixels } from '../helpers'
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

      convertPixels(pixels, props.med)

      ctx.putImageData(imgd, 0, 0)
      setImg(canvasRef.current.toDataURL('image/jpeg'))
    }
  }, [props.convert, props.isCut])

  return (
    <>
      <canvas className="border-2 hidden" ref={canvasRef}></canvas>
      {img && (
        <>
          <img
            src={img}
            width={'300px'}
            alt="no image"
            className="rounded mt-5 select-none"
            draggable={false}
          />
          <Button2 />
        </>
      )}
    </>
  )
}

export default Canvas
