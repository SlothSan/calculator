import './CalculatorDisplay.css'

const CalculatorDisplay = (props) => {
    return (
        <div className={"calculator-display"}>
            <p id={"display"}>{props.result}</p>
            <p>{props.displayValue}</p>
        </div>
    )
}

export default CalculatorDisplay