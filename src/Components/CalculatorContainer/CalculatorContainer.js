import {useState} from "react";
import CalculatorDisplay from "../CalculatorDisplay/CalculatorDisplay";
import OperandButton from "../OperandButton/OperandButton";
import OperatorButton from "../OperatorButton/OperatorButton";
import ClearButton from "../ClearButton/ClearButton";

const CalculatorContainer = () => {

    const [displayValue, setDisplayValue] = useState('0')
    const [inputValue, setInputValue] = useState('')
    const [outputValue, setOutputValue] = useState('')

    return (
        <div className={"calculator-container"}>
            <CalculatorDisplay displayValue={displayValue}/>
            <OperandButton id={"zero"} operandValue={"0"}/>
            <OperandButton id={"one"} operandValue={"1"}/>
            <OperandButton id={"two"} operandValue={"2"}/>
            <OperandButton id={"three"} operandValue={"3"}/>
            <OperandButton id={"four"} operandValue={"4"}/>
            <OperandButton id={"five"} operandValue={"5"}/>
            <OperandButton id={"six"} operandValue={"6"}/>
            <OperandButton id={"seven"} operandValue={"7"}/>
            <OperandButton id={"eight"} operandValue={"8"}/>
            <OperandButton id={"nine"} operandValue={"9"}/>
            <OperatorButton id={"add"} operatorValue={"+"}/>
            <OperatorButton id={"subtract"} operatorValue={"-"}/>
            <OperatorButton id={"multiply"} operatorValue={"*"}/>
            <OperatorButton id={"divide"} operatorValue={"/"}/>
            <ClearButton id={"clear"} clearValue={"AC"} />
        </div>
    )
}

export default  CalculatorContainer