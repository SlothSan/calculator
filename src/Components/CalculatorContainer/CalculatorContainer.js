import './CalculatorContainer.css'
import CalculatorDisplay from "./CalculatorDisplay/CalculatorDisplay";
import CalculatorRow from "./CalculatorRow/CalculatorRow";
import ClearButton from "./ClearButton/ClearButton";

const CalculatorContainer = () => {
    return (
        <div className={"calculator-container"}>
            <CalculatorDisplay />
            <CalculatorRow>
                <ClearButton />
            </CalculatorRow>
        </div>
    )
}

export default  CalculatorContainer