import './OperatorButton.css'

const OperatorButton = (props) => {

    const handleOperatorClick = (event) => {
        props.setDisplayValue(props.displayValue + props.operatorSymbol)
        props.setDecimalIsUsed(false)
        //TODO needs to reset decimal used to false after operator added
        // Minus can be entered first even if display is 0 and can be chained twice -9--10 for example
    }

    return (
        <button id={props.operatorType} className={"operator-button"} value={props.operatorSymbol} onClick={handleOperatorClick}>
            {props.operatorSymbol}
        </button>
    )
}

export default OperatorButton