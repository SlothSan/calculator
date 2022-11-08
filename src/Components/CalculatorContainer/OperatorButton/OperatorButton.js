import './OperatorButton.css'

const OperatorButton = (props) => {

    const handleOperatorClick = () => {
        props.setDecimalIsUsed(false)
        props.setDisplayValue(props.displayValue + props.operatorSymbol)
        props.setRunningValue(props.runningValue + props.operatorSymbol)
    }

    return (
        <button id={props.operatorType} className={"operator-button"} onClick={handleOperatorClick}>
            {props.operatorSymbol}
        </button>
    )
}

export default OperatorButton