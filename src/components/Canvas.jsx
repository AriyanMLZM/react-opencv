import React, { useEffect, useRef, useState } from 'react'

import { convertPixels } from '../helpers'

const Canvas = ({ props }) => {
  const [img, setImg] = useState(null)
  const canvasRef = useRef()
  
  useEffect(() => {
    const image = document.getElementById('img')
    const ctx = canvasRef.current.getContext('2d')

    if (props.img) {
      canvasRef.current.width = image.naturalWidth
      canvasRef.current.height = image.naturalHeight

      ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight)
      const imgd = ctx.getImageData(0, 0, image.naturalWidth, image.naturalHeight)
      const pixels = imgd.data
      
      convertPixels(pixels)
      
      ctx.putImageData(imgd, 0, 0)
      setImg(canvasRef.current.toDataURL('image/jpeg'))
    }
  }, [props.img])

  return (
    <>
      <canvas
        className="border-2 hidden"
        ref={canvasRef}
      ></canvas>
      {img && (
        <img
          src={img}
          width={'400px'}
          alt="no image"
          className="rounded mt-5 select-none"
          draggable={false}
        />
      )}
    </>
  )
}

export default Canvas
