import './CalculatorContainer.css'
import CalculatorDisplay from "./CalculatorDisplay/CalculatorDisplay";
import CalculatorRow from "./CalculatorRow/CalculatorRow";
import ClearButton from "./ClearButton/ClearButton";
import OperatorButton from "./OperatorButton/OperatorButton";
import DigitButton from "./DigitButton/DigitButton";
import EqualsButton from "./EqualsButton/EqualsButton";
import DecimalButton from "./DecimalButton/DecimalButton";

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
                <DigitButton buttonNumberString={"four"} buttonNumber={4}/>
                <DigitButton buttonNumberString={"five"} buttonNumber={5}/>
                <DigitButton buttonNumberString={"six"} buttonNumber={6}/>
                <OperatorButton operatorType={"add"} operatorSymbol={"+"}/>
            </CalculatorRow>
            <CalculatorRow>
                <DigitButton buttonNumberString={"one"} buttonNumber={1}/>
                <DigitButton buttonNumberString={"two"} buttonNumber={2}/>
                <DigitButton buttonNumberString={"three"} buttonNumber={3}/>
                <EqualsButton />
            </CalculatorRow>
            <CalculatorRow>
                <DigitButton className={"zero-button"} buttonNumberString={"zero"} buttonNumber={0}/>
                <DecimalButton />
            </CalculatorRow>
        </div>
    )
}

export default  CalculatorContainer