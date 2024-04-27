import React from 'react'

const Inputs = ({ props }) => {
  return (
    <section className="flex justify-center items-center mt-10 select-none">
      <div>
        <p className="text-white mb-1 text-[18px]">Med: {props.med}</p>
        <input
          value={props.med}
          className='slider w-[200px] accent-primary'
          min={0}
          max={255}
          step={1}
          type="range"
          onChange={(e) => props.setMed(e.target.value)}
        />
      </div>
      <div className="flex ml-8">
        <input type="checkbox" className='w-4 accent-primary cursor-pointer' onChange={() => props.setIsCut(!props.isCut)} />
        <p className="text-white ml-3 text-[18px]">512 x 512 px</p>
      </div>
    </section>
  )
}

export default Inputs
