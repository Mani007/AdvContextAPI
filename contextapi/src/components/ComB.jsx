import React, { useContext } from 'react'
import ComC from './ComC'
import { firstname, lastname } from '../App'

function ComB() {
    const fname = useContext(firstname);
    const lname = useContext(lastname);
  return (
    <>
    <div>From ComB <br />
    <h4 >The First Name from App context is <span style={{color: 'blue'}}> {fname} <span style={{color: 'green'}}>{lname}</span></span> </h4>
     </div>
    </>
  )
}

export default ComB