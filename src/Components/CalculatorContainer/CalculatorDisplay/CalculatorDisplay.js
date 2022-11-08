import './CalculatorDisplay.css'

const CalculatorDisplay = (props) => {
    return (
        <div id={"display"} className={"calculator-display"}>
            <p>{props.runningValue}</p>
            <p>{props.displayValue ? props.displayValue : ''}</p>
        </div>
    )
}

export default CalculatorDisplay