const imgDownloader = (img) => {
  const link = document.createElement('a')
  link.href = img
  link.download = 'output.jpg'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default imgDownloader