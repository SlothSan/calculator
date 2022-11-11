import {useEffect, useState} from "react";
import CalculatorDisplay from "../CalculatorDisplay/CalculatorDisplay";
import OperandButton from "../OperandButton/OperandButton";
import OperatorButton from "../OperatorButton/OperatorButton";
import ClearButton from "../ClearButton/ClearButton";
import EqualsButton from "../EqualsButton/EqualsButton";
import DecimalButton from "../DecimalButton/DecimalButton";

const CalculatorContainer = () => {
    const [inputValue, setInputValue] = useState('0')
    const [displayValue, setDisplayValue] = useState('0')
    const [outputValue, setOutputValue] = useState('')

    useEffect(() => {
        if(displayValue === '0') {
            setDisplayValue(inputValue)
        } else {
            setDisplayValue(displayValue + inputValue)
        }
    }, [inputValue])

    useEffect(() => {
        setDisplayValue(outputValue)
    }, [outputValue])

    return (
        <div className={"calculator-container"}>
            <CalculatorDisplay displayValue={displayValue}/>
            <OperandButton id={"zero"} operandValue={"0"} setInputValue={setInputValue}/>
            <OperandButton id={"one"} operandValue={"1"} setInputValue={setInputValue}/>
            <OperandButton id={"two"} operandValue={"2"} setInputValue={setInputValue}/>
            <OperandButton id={"three"} operandValue={"3"} setInputValue={setInputValue}/>
            <OperandButton id={"four"} operandValue={"4"} setInputValue={setInputValue}/>
            <OperandButton id={"five"} operandValue={"5"} setInputValue={setInputValue}/>
            <OperandButton id={"six"} operandValue={"6"} setInputValue={setInputValue}/>
            <OperandButton id={"seven"} operandValue={"7"} setInputValue={setInputValue}/>
            <OperandButton id={"eight"} operandValue={"8"} setInputValue={setInputValue}/>
            <OperandButton id={"nine"} operandValue={"9"} setInputValue={setInputValue}/>
            <OperatorButton id={"add"} operatorValue={"+"} setInputValue={setInputValue}/>
            <OperatorButton id={"subtract"} operatorValue={"-"} setInputValue={setInputValue}/>
            <OperatorButton id={"multiply"} operatorValue={"*"} setInputValue={setInputValue}/>
            <OperatorButton id={"divide"} operatorValue={"/"} setInputValue={setInputValue}/>
            <ClearButton id={"clear"} clearValue={"AC"} setInputValue={setInputValue} setOutputValue={setOutputValue} setDisplayValue={setDisplayValue}/>
            <EqualsButton id={"equals"} equalsValue={"="}/>
            <DecimalButton id={"decimal"} decimalValue={"."}/>
        </div>
    )
}

export default  CalculatorContainer