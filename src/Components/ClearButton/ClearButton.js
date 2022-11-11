const ClearButton = (props) => {

    const handleClear = () => {
        props.setDisplayValue('0')
        props.setInputValue('0')
        props.setOutputValue('')
    }

    return (
        <button id={props.id} value={props.clearValue} onClick={handleClear}>
            {props.clearValue}
        </button>
    )
}

export default ClearButton