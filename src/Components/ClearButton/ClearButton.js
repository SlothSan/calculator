const ClearButton = (props) => {
    return (
        <button id={props.id} value={props.clearValue}>
            {props.clearValue}
        </button>
    )
}

export default ClearButton