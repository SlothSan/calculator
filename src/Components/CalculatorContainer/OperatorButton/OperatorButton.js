import './OperatorButton.css'

const OperatorButton = (props) => {

    const handleOperatorClick = () => {
        if (props.lastOperator === props.operatorSymbol && props.operatorSymbol !== '-') {
            console.log('Cant use the same operator');
        } else {
            props.setDecimalIsUsed(false)
            props.setDisplayValue(props.displayValue + props.operatorSymbol)
            props.setRunningValue(props.runningValue + props.operatorSymbol)
            props.setLastOperator(props.operatorSymbol)
        }
    }

    return (
        <button id={props.operatorType} className={"operator-button"} onClick={handleOperatorClick}>
            {props.operatorSymbol}
        </button>
    )
}

export default OperatorButton