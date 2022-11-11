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
    const [lastOperator, setLastOperator] = useState("")
    const [decimalIsUsed, setDecimalIsUsed] = useState(false)

    return (
        <div className={"calculator-container"}>
            <CalculatorDisplay displayValue={displayValue}/>
            <CalculatorRow>
                <ClearButton setDisplayValue={setDisplayValue}
                             setDecimalIsUsed={setDecimalIsUsed}/>
                <OperatorButton operatorType={"divide"}
                                operatorSymbol={"/"}
                                displayValue={displayValue}
                                setDisplayValue={setDisplayValue}
                                setDecimalIsUsed={setDecimalIsUsed}
                                lastOperator={lastOperator}
                                setLastOperator={setLastOperator}/>
                <OperatorButton operatorType={"multiply"} operatorSymbol={"*"}
                                displayValue={displayValue}
                                setDisplayValue={setDisplayValue}
                                setDecimalIsUsed={setDecimalIsUsed}
                                lastOperator={lastOperator}
                                setLastOperator={setLastOperator}/>
            </CalculatorRow>
            <CalculatorRow>
                <DigitButton buttonNumberString={"seven"}
                             buttonNumber={7}
                             displayValue={displayValue}
                             setDisplayValue={setDisplayValue}/>
                <DigitButton buttonNumberString={"eight"}
                             buttonNumber={8}
                             displayValue={displayValue}
                             setDisplayValue={setDisplayValue}/>
                <DigitButton buttonNumberString={"nine"}
                             buttonNumber={9}
                             displayValue={displayValue}
                             setDisplayValue={setDisplayValue}/>
                <OperatorButton operatorType={"subtract"}
                                operatorSymbol={"-"}
                                displayValue={displayValue}
                                setDisplayValue={setDisplayValue}
                                setDecimalIsUsed={setDecimalIsUsed}
                                lastOperator={lastOperator}
                                setLastOperator={setLastOperator}/>
            </CalculatorRow>
            <CalculatorRow>
                <DigitButton buttonNumberString={"four"}
                             buttonNumber={4}
                             displayValue={displayValue}
                             setDisplayValue={setDisplayValue}/>
                <DigitButton buttonNumberString={"five"}
                             buttonNumber={5}
                             displayValue={displayValue}
                             setDisplayValue={setDisplayValue}/>
                <DigitButton buttonNumberString={"six"} buttonNumber={6}
                             displayValue={displayValue}
                             setDisplayValue={setDisplayValue} />
                <OperatorButton operatorType={"add"}
                                operatorSymbol={"+"}
                                displayValue={displayValue}
                                setDisplayValue={setDisplayValue}
                                setDecimalIsUsed={setDecimalIsUsed}
                                lastOperator={lastOperator}
                                setLastOperator={setLastOperator}/>
            </CalculatorRow>
            <CalculatorRow>
                <DigitButton buttonNumberString={"one"}
                             buttonNumber={1}
                             displayValue={displayValue}
                             setDisplayValue={setDisplayValue}/>
                <DigitButton buttonNumberString={"two"}
                             buttonNumber={2}
                             displayValue={displayValue}
                             setDisplayValue={setDisplayValue}/>
                <DigitButton buttonNumberString={"three"}
                             buttonNumber={3}
                             displayValue={displayValue}
                             setDisplayValue={setDisplayValue}/>
                <EqualsButton setDisplayValue={setDisplayValue}
                              displayValue={displayValue}/>
            </CalculatorRow>
            <CalculatorRow>
                <DigitButton className={"zero-button"}
                             buttonNumberString={"zero"}
                             buttonNumber={0}
                             displayValue={displayValue}
                             setDisplayValue={setDisplayValue}/>
                <DecimalButton displayValue={displayValue}
                               setDisplayValue={setDisplayValue}
                               decimalIsUsed={decimalIsUsed}
                               setDecimalIsUsed={setDecimalIsUsed}/>
            </CalculatorRow>
        </div>
    )
}

export default  CalculatorContainer