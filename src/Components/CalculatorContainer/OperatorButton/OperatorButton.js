import './OperatorButton.css'

const OperatorButton = (props) => {

    //5 * - + 5

    const handleOperatorClick = () => {
        props.setDecimalIsUsed(false)
        props.setDisplayValue(props.displayValue + props.operatorSymbol)
        props.setRunningValue(props.runningValue + props.operatorSymbol)
        props.setLastOperator(props.operatorSymbol)
    }

    return (
        <button id={props.operatorType} className={"operator-button"} onClick={handleOperatorClick}>
            {props.operatorSymbol}
        </button>
    )
}

export default OperatorButton