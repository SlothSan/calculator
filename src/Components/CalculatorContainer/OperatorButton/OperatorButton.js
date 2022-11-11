import './OperatorButton.css'

const OperatorButton = (props) => {

    const handleOperatorClick = (event) => {
        event.preventDefault()
    }

    return (
        <button id={props.operatorType} className={"operator-button"} onClick={handleOperatorClick}>
            {props.operatorSymbol}
        </button>
    )
}

export default OperatorButton