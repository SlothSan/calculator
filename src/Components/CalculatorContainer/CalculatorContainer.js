import './CalculatorContainer.css'
import CalculatorDisplay from "./CalculatorDisplay/CalculatorDisplay";
import CalculatorRow from "./CalculatorRow/CalculatorRow";
import ClearButton from "./ClearButton/ClearButton";
import OperatorButton from "./OperatorButton/OperatorButton";
import DigitButton from "./DigitButton/DigitButton";

const CalculatorContainer = () => {
    return (
        <div className={"calculator-container"}>
            <CalculatorDisplay />
            <CalculatorRow>
                <ClearButton />
                <OperatorButton operatorType={"divide"} operatorSymbol={"/"}/>
                <OperatorButton operatorType={"multiply"} operatorSymbol={"*"}/>
            </CalculatorRow>
            <CalculatorRow>
                <DigitButton buttonNumberString={"seven"} buttonNumber={7}/>
                <DigitButton buttonNumberString={"eight"} buttonNumber={8}/>
                <DigitButton buttonNumberString={"nine"} buttonNumber={9}/>
                <OperatorButton operatorType={"minus"} operatorSymbol={"-"} />
            </CalculatorRow>
        </div>
    )
}

export default  CalculatorContainer