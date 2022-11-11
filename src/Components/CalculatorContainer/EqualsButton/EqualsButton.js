import './EqualsButton.css'
import {parse} from "mathjs";

const EqualsButton = (props) => {

    const handleEqualsClick = () => {

    }

    return (
        <button id={"equals"} className={"equals-button"} onClick={handleEqualsClick}>
            =
        </button>
    )
}

export default EqualsButton