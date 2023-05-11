export default function Square(props){
    return (
        <>
          <button 
            className="game-btn"
            onClick={props.onSquareClick}
          >
            {props.value}
          </button>
        </>
    )
}