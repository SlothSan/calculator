const OperandButton = (props) => {
    return (
        <button id={props.id}
                value={props.operandValue}>
            {props.operandValue}
        </button>
    )
}

export default OperandButton
