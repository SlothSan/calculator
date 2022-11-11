import './OperatorButton.css'

const OperatorButton = (props) => {

    const handleOperatorClick = (event) => {
        event.preventDefault()
        if(props.displayValue.slice(-1) === props.operatorSymbol) {
        } else {
            if(props.operatorSymbol === '-') {
                console.log(props.operatorSymbol)
                props.setDisplayValue(String(props.displayValue + '-'))
                props.setRunningValue(props.runningValue + '-')
            }
            props.setDisplayValue(String(props.displayValue + props.operatorSymbol))
            props.setRunningValue(props.runningValue + props.operatorSymbol)
        }
        //TODO setup the logic for adding operators.
    }

    return (
        <button id={props.operatorType} className={"operator-button"} value={props.operatorSymbol} onClick={handleOperatorClick}>
            {props.operatorSymbol}
        </button>
    )
}

export default OperatorButton