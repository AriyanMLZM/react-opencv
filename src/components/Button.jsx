import React from 'react'

const Button = ({ func }) => {
  return (
    <button
      type="button"
      className="text-bgColor bg-primary rounded-full flex justify-center pb-1 m-4 font-bold md:hover:bg-gray-400 items-center w-[100px] text-[18px]"
      onClick={func}
    >
      convert
    </button>
  )
}

export default Button
