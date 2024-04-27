import React from 'react'

const Button = ({ func }) => {
  return (
    <button
      type="button"
      className="text-primary pb-[2px] border-2 border-primary md:hover:bg-primary md:hover:text-bgColor  rounded-full flex justify-center m-6 items-center w-[80px] text-[18px]"
      onClick={func}
    >
      save
    </button>
  )
}

export default Button
