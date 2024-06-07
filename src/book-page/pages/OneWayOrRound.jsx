import React from 'react'
import Card from '../components/Card'

const contentArr = [
  "lorem1", "lorem2"
]

function OneWayOrRound() {
  return (
        <div className='h-full flex justify-center items-center gap-10'>
          <Card title="One Way Trip" content={contentArr[0]}/>
          <Card title="Round Trip" content={contentArr[1]}/>
        </div>
  )
}

export default OneWayOrRound