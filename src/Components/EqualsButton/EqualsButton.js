const EqualsButton = (props) => {
    return (
        <button id={props.id} value={props.equalsValue}>
            {props.equalsValue}
        </button>
    )
}

export default EqualsButton