import './EqualsButton.css'

const EqualsButton = (props) => {

    const handleEqualsClick = () => {
        const result = parseFloat(eval(props.runningValue)).toFixed(4)
        props.setRunningValue(props.runningValue + "=" + result)
        props.setDisplayValue(result)
    }

    return (
        <button id={"equals"} className={"equals-button"} onClick={handleEqualsClick}>
            =
        </button>
    )
}

export default EqualsButton