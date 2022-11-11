const OperandButton = (props) => {

    const handleOperandClick = () => {
        props.setInputValue(props.operandValue)
    }

    return (
        <button id={props.id}
                value={props.operandValue}
                onClick={handleOperandClick}>
            {props.operandValue}
        </button>
    )
}

export default OperandButton
