import React from 'react'
import { firstname } from '../App'
// The Conusmer api will always take function
function ComC() {
  return (
    <firstname.Consumer>
    {(fname) =>{
        return (<div>From ComC <br /> <h4 >The First Name from App context is <span style={{color: 'blue'}}> {fname}</span></h4></div>)
    }}
    </firstname.Consumer>
  )
}

export default ComC