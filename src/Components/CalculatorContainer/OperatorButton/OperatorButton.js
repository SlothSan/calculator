import './OperatorButton.css'

const OperatorButton = (props) => {

    const handleOperatorClick = (event) => {
        event.preventDefault()
        //TODO setup the logic for adding operators.
    }

    return (
        <button id={props.operatorType} className={"operator-button"} onClick={handleOperatorClick}>
            {props.operatorSymbol}
        </button>
    )
}

export default OperatorButton