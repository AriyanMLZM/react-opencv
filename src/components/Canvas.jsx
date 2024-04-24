import React, { useEffect, useRef, useState } from 'react'

const Canvas = ({ props }) => {
  const [img, setImg] = useState(null)
  const [med, setMed] = useState(127)
  const [isRes, setIsRes] = useState(false)
  const canvasRef = useRef()
  
  
  useEffect(() => {
    const image = document.getElementById('img')
    const ctx = canvasRef.current.getContext('2d')
    if (props.img) {
      canvasRef.current.width = image.naturalWidth
      canvasRef.current.height = image.naturalHeight
      ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight)
      const imgd = ctx.getImageData(0, 0, image.naturalWidth, image.naturalHeight)
      const pix = imgd.data
      for (var i = 0, n = pix.length; i < n; i += 4) {
        if ((pix[i] + pix[i + 1] + pix[i + 2]) / 3 <= 127) {
          pix[i] = 0
          pix[i + 1] = 0
          pix[i + 2] = 0
        } else {
          pix[i] = 255
          pix[i + 1] = 255
          pix[i + 2] = 255
        }
      }
      ctx.putImageData(imgd, 0, 0)
      console.log('test')
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
          width={'250px'}
          alt=""
          className="rounded mt-5 select-none"
          draggable={false}
        />
      )}
    </>
  )
}

export default Canvas
