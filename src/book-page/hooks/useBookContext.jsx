import React from 'react'
import { useContext } from 'react'
import { BookPageContext } from '../context/BookPageContext'

function useBookContext() {
  return useContext(BookPageContext)
}

export default useBookContext