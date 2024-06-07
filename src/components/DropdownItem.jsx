import React from 'react'
import { Link } from 'react-router-dom'

function DropdownItem({children, to, onClick}) {
  return (
    <Link to={to} onClick={onClick} role='button' className='mx-2 p-3 hover:bg-gray-400 rounded-lg'>{children}</Link>
  )
}

export default DropdownItem