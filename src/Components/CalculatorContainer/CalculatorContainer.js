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
                <OperatorButton operatorType={"subtract"} operatorSymbol={"-"} />
            </CalculatorRow>
            <CalculatorRow>
                <DigitButton buttonNumberString={"4"} buttonNumber={4}/>
                <DigitButton buttonNumberString={"5"} buttonNumber={5}/>
                <DigitButton buttonNumberString={"6"} buttonNumber={6}/>
                <OperatorButton operatorType={"add"} operatorSymbol={"+"}/>
            </CalculatorRow>
        </div>
    )
}

export default  CalculatorContainer