const DecimalButton = (props) => {
    return (
        <button id={props.id} value={props.decimalValue}>
            {props.decimalValue}
        </button>
    )
}

export default DecimalButton