import './CalculatorContainer.css'
import CalculatorDisplay from "../CalculatorDisplay/CalculatorDisplay";

const CalculatorContainer = () => {
    return (
        <div className={"calculator-container"}>
            <CalculatorDisplay />
        </div>
    )
}

export default  CalculatorContainer