import React from 'react'
import { firstname, lastname } from '../App'
// The Conusmer api will always take function, end up in recursion as callback hell for consumer
function ComC() {
  return (
    <>
    <firstname.Consumer>
    {(fname) =>{
        return (

            <lastname.Consumer>
                {(lname) =>{
                        return (
                            <div>From ComC <br />
                            <h4 >The First Name from App context is <span style={{color: 'blue'}}> {fname} {lname}</span> </h4>
                            </div>
                        )
                }

                }
            </lastname.Consumer>
             
                
              
                
              
        )
    }}
    </firstname.Consumer>
    </>
  );
}

export default ComC