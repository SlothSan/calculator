import './OperatorButton.css'

const OperatorButton = (props) => {

    const handleOperatorClick = (event) => {

    }

    return (
        <button id={props.operatorType} className={"operator-button"} value={props.operatorSymbol} onClick={handleOperatorClick}>
            {props.operatorSymbol}
        </button>
    )
}

export default OperatorButton