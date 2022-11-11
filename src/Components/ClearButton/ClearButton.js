const ClearButton = (props) => {

    const handleClearClick = () => {
        props.setDisplayValue('0')
        props.setInputValue('0')
        props.setOutputValue('')
    }

    return (
        <button id={props.id} value={props.clearValue} onClick={handleClearClick}>
            {props.clearValue}
        </button>
    )
}

export default ClearButton