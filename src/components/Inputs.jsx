import React from 'react'

const Inputs = ({ props }) => {
  return (
    <section className="flex justify-center items-center mt-10 select-none">
      <div>
        <p className="text-white mb-1 text-[18px]">
          Threshold: {props.threshold}
        </p>
        <input
          value={props.threshold}
          className="slider md:w-[200px] w-[150px] accent-primary"
          min={0}
          max={255}
          step={1}
          type="range"
          onChange={(e) => props.setThreshold(e.target.value)}
        />
      </div>
      <div className="flex ml-8">
        <input
          type="checkbox"
          className="w-4 accent-primary cursor-pointer"
          onChange={() => props.setIsCut(!props.isCut)}
        />
        <p className="text-white ml-3 text-[18px]">512 x 512 px</p>
      </div>
    </section>
  )
}

export default Inputs
