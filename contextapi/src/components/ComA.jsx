import React, {useEffect,useState} from 'react'
import ComB from './ComB'
// useEffect hook applied
function ComA() {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);
    const handleClick = () =>{
        setNum(num+1)
    }
    const handleClick1 = () =>{
        setNums(nums+1)
    }
    // useEffect will always render at the time of component rerender. It is alternative to component{did/will/update}mount in class components. 
    useEffect(() => {
        alert("I am clicked")
    }, [num])
  return (
    <>
    {/* <ComB/> */}
    <button onClick={handleClick}>Click Increment {num}</button> <br /> <br />
    <button onClick={handleClick1}>Click Increment {nums}</button>
    </>
  )
}

export default ComA