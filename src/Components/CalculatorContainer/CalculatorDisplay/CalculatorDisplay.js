import './CalculatorDisplay.css'

const CalculatorDisplay = (props) => {
    return (
        <div className={"calculator-display"}>
            <p>{props.runningValue}</p>
            <p id={"display"}>{props.displayValue}</p>
        </div>
    )
}

export default CalculatorDisplay