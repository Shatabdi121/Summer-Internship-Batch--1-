import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
const err=useRouteError()
console.log(err)

  return (
    <div>
      <h1>We will be back soon!</h1>
    </div>
  )
}

export default Error
