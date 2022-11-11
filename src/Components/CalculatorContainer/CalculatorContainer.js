import './CalculatorContainer.css'
import CalculatorDisplay from "./CalculatorDisplay/CalculatorDisplay";
import CalculatorRow from "./CalculatorRow/CalculatorRow";
import ClearButton from "./ClearButton/ClearButton";
import OperatorButton from "./OperatorButton/OperatorButton";
import DigitButton from "./DigitButton/DigitButton";
import EqualsButton from "./EqualsButton/EqualsButton";
import DecimalButton from "./DecimalButton/DecimalButton";
import {useState} from "react";

const CalculatorContainer = () => {

    const [displayValue, setDisplayValue] = useState("0")
    const [runningValue, setRunningValue] = useState("0")
    const [lastOperator, setLastOperator] = useState("")
    const [decimalIsUsed, setDecimalIsUsed] = useState(false)

    return (
        <div className={"calculator-container"}>
            <CalculatorDisplay displayValue={displayValue} runningValue={runningValue}/>
            <CalculatorRow>
                <ClearButton setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}
                             setDecimalIsUsed={setDecimalIsUsed}/>
                <OperatorButton operatorType={"divide"} operatorSymbol={"/"}
                                displayValue={displayValue} runningValue={runningValue}
                                setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}
                                setDecimalIsUsed={setDecimalIsUsed}
                                lastOperator={lastOperator} setLastOperator={setLastOperator}/>
                <OperatorButton operatorType={"multiply"} operatorSymbol={"*"}
                                displayValue={displayValue} runningValue={runningValue}
                                setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}
                                setDecimalIsUsed={setDecimalIsUsed}
                                lastOperator={lastOperator} setLastOperator={setLastOperator}/>
            </CalculatorRow>
            <CalculatorRow>
                <DigitButton buttonNumberString={"seven"} buttonNumber={7}
                             displayValue={displayValue} runningValue={runningValue}
                             setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}/>
                <DigitButton buttonNumberString={"eight"} buttonNumber={8}
                             displayValue={displayValue} runningValue={runningValue}
                             setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}/>
                <DigitButton buttonNumberString={"nine"} buttonNumber={9}
                             displayValue={displayValue} runningValue={runningValue}
                             setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}/>
                <OperatorButton operatorType={"subtract"} operatorSymbol={"-"}
                                displayValue={displayValue} runningValue={runningValue}
                                setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}
                                setDecimalIsUsed={setDecimalIsUsed}
                                lastOperator={lastOperator} setLastOperator={setLastOperator}/>
            </CalculatorRow>
            <CalculatorRow>
                <DigitButton buttonNumberString={"four"} buttonNumber={4}
                             displayValue={displayValue} runningValue={runningValue}
                             setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}/>
                <DigitButton buttonNumberString={"five"} buttonNumber={5}
                             displayValue={displayValue} runningValue={runningValue}
                             setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}/>
                <DigitButton buttonNumberString={"six"} buttonNumber={6}
                             displayValue={displayValue} runningValue={runningValue}
                             setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}/>
                <OperatorButton operatorType={"add"} operatorSymbol={"+"}
                                displayValue={displayValue} runningValue={runningValue}
                                setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}
                                setDecimalIsUsed={setDecimalIsUsed}
                                lastOperator={lastOperator} setLastOperator={setLastOperator}/>
            </CalculatorRow>
            <CalculatorRow>
                <DigitButton buttonNumberString={"one"} buttonNumber={1}
                             displayValue={displayValue} runningValue={runningValue}
                             setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}/>
                <DigitButton buttonNumberString={"two"} buttonNumber={2}
                             displayValue={displayValue} runningValue={runningValue}
                             setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}/>
                <DigitButton buttonNumberString={"three"} buttonNumber={3}
                             displayValue={displayValue} runningValue={runningValue}
                             setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}/>
                <EqualsButton runningValue={runningValue} setRunningValue={setRunningValue}
                              setDisplayValue={setDisplayValue} displayValue={displayValue}/>
            </CalculatorRow>
            <CalculatorRow>
                <DigitButton className={"zero-button"} buttonNumberString={"zero"} buttonNumber={0}
                             displayValue={displayValue} runningValue={runningValue}
                             setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}/>
                <DecimalButton displayValue={displayValue} runningValue={runningValue}
                               setDisplayValue={setDisplayValue} setRunningValue={setRunningValue}
                               decimalIsUsed={decimalIsUsed} setDecimalIsUsed={setDecimalIsUsed}/>
            </CalculatorRow>
        </div>
    )
}

export default  CalculatorContainer