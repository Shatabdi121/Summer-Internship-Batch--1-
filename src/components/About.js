import React, { useState } from 'react'
import User from './User'

import React, { Component } from 'react'

export default class About extends Component {
constructor(){
  super()
  console.log("parent Constructor")
}

  render() {
    console.log("parent Render")
    return (
      <div>
       <h1>About Us</h1>
       <p>Welcome to our restaurant!</p>
       <User   name="abcd" age={100}/>
    </div>
    )
  }
}


