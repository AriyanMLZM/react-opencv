import React from 'react'

const Inputs = ({ props }) => {
  return (
    <section className="flex justify-center items-center mt-10 select-none">
      <div>
        <p className="text-white mb-1">Med: {props.med}</p>
        <input value={props.med} min={0} max={255} type="range" onChange={(e) => props.setMed(e.target.value)} />
      </div>
      <div className="flex ml-8">
        <input type="checkbox" onChange={() => props.setIsCut(!props.isCut)} />
        <p className="text-white ml-3">512 x 512 px</p>
      </div>
    </section>
  )
}

export default Inputs
