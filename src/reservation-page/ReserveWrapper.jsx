import React from 'react'
import Input from '../components/Input'
import Button from '../book-page/components/Button'

function ReserveWrapper() {
  return (
    <div className='flex flex-col gap-20 py-5 px-10'>
      <div className='flex flex-col gap-10'>
        <h1 className='text-3xl'>Find Reservation</h1>
        <div className='flex justify-between'>
          <Input placeholder="*Confirmation Number"/>
          <Input placeholder="*Name"/>
          <Input placeholder="*Phone"/>
        </div>
      </div>
      <div className='flex justify-between'>
        <Button to="/" border="black">Back to Home page</Button>
        <Button text="white" bg="primary">Find Reservation</Button>
      </div>
    </div>
  )
}

export default ReserveWrapper