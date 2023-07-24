import React, {useEffect,useState} from 'react'
import ComB from './ComB'
// useEffect hook applied
function ComA() {
    const [num, setNum] = useState(0);
    const handleClick = () =>{
        setNum(num+1)
    }
    // useEffect will always render at the time of component rerender. It is alternative to component{did/will/update}mount in class components. 
    useEffect(() => {
        alert("I am clicked")
    }, [])
  return (
    <>
    {/* <ComB/> */}
    <button onClick={handleClick}>Click Increment {num}</button>
    </>
  )
}

export default ComA