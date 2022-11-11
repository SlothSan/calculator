const OperatorButton = (props) => {

    const handleOperatorClick = () => {
        props.setInputValue(props.operatorValue)
    }

    return (
        <button id={props.id} value={props.operatorValue} onClick={handleOperatorClick}>
            {props.operatorValue}
        </button>
    )
}

export default OperatorButton