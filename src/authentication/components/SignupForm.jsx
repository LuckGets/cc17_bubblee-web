import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'


function SignupForm({input, handleChangeInput}) {

  return (
    <div className="flex flex-col gap-8">
    <div className="">
      <h3 className="mb-5 font-semibold">Name :</h3>
      <Input
        value={input.name}
        name="name"
        placeholder="Brain Clark"
        onChange={handleChangeInput}
      />
    </div>
    <div className="flex">
      <h3 className="mb-5 font-semibold">Gender :</h3>
      <select className="px-10"></select>
    </div>
    <div>
      <h3 className="mb-5 font-semibold">Email address:</h3>
      <Input value={input.email} name="email" onChange={handleChangeInput} placeholder="example@yourmail.com" />
    </div>
    <div>
      <h3 className="mb-5 font-semibold">Phone :</h3>
      <Input value={input.phone} name="phone" onChange={handleChangeInput} placeholder="[+66]-123-4567" />
    </div>
    <div>
      <h3 className="mb-5 font-semibold">Password :</h3>
      <Input value={input.password} name="password" onChange={handleChangeInput} placeholder="abcdef123456789" />
    </div>
    <div>
      <h3 className="mb-5 font-semibold">Confirm Password :</h3>
      <Input value={input.confirmPassword} name="confirmPassword" onChange={handleChangeInput} placeholder="abcdef123456789" />
    </div>
  </div>
  )
}

export default SignupForm