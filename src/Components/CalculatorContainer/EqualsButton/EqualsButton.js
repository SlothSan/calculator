import './EqualsButton.css'

const EqualsButton = (props) => {

    const handleEqualsClick = () => {
        if(props.runningValue.includes("=")) {
        } else {
            const result = parseFloat(eval(props.runningValue))
            props.setRunningValue(props.runningValue + "=" + result)
            props.setDisplayValue(result)
        }
    }

    return (
        <button id={"equals"} className={"equals-button"} onClick={handleEqualsClick}>
            =
        </button>
    )
}

export default EqualsButton