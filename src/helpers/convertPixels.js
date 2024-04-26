const convertPixels = (pixels) => {
  for (var i = 0, n = pixels.length; i < n; i += 4) {
    if ((pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3 <= 127) {
      pixels[i] = 0
      pixels[i + 1] = 0
      pixels[i + 2] = 0
    } else {
      pixels[i] = 255
      pixels[i + 1] = 255
      pixels[i + 2] = 255
    }
  }
}

export default convertPixels
