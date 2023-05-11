import React from "react"
export default function Instructions(props) {
    const [state, setState] = React.useState([])
    
    function handleClick(){
     setState(prevState => [
        <li>click each box</li>,
        <li>if the same letter fill a row by itself or</li>,
        <li>a column or</li>,
        <li>the same letter is placed in a diagonal line</li>, 
        <li>then the letter in question is the winner"</li>,
        <li>good luck!</li>
     ])
    }
    return (
        <div onClick={handleClick} className="instructions-container">
        <h1>Instructions.</h1>
        <ul className="instructions">{state}</ul>
        </div>

    )
}