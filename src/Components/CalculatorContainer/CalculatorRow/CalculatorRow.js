import './CalculatorRow.css'

const CalculatorRow = (props) => {
    return (
        <div className={"calculator-row"}>{props.children}</div>
    )
}

export default CalculatorRow