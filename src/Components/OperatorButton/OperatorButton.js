const OperatorButton = (props) => {
    return (
        <button id={props.id} value={props.operatorValue}>
            {props.operatorValue}
        </button>
    )
}

export default OperatorButton