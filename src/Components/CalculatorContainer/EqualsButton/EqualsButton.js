import './EqualsButton.css'

const EqualsButton = (props) => {

    const handleEqualsClick = () => {
        if(props.runningValue.includes("=")) {
            //TODO implement a way of handling more than one sum
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