import React from 'react'
import { Link } from 'react-router-dom'

const bgMap = {
  "white" : "bg-white",
  "black" : "bg-black"
}

const colorMap = {
  "white" : "text-white",
  "black" : "text-black"
}

function Button({children, bg, text, to}) {
  return (
    <Link to={to} className={`flex justify-center items-center ${colorMap[text]} ${bgMap[bg]} px-6 py-3  rounded-2xl border-black border-2`}>{children}</Link>
  )
}

export default Button