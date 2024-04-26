import React from 'react'

const Inputs = () => {
  return (
    <section>
      <div>
        <p>Med:</p>
        <input type="range" onChange={(e) => console.log(e.target.value)} />
      </div>
      <div>
        <input type="checkbox" />
        <p>512x512 px</p>
      </div>
    </section>
  )
}

export default Inputs
