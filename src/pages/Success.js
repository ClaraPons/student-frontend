import { Link } from "react-router-dom";

const Success = (props) => {
    return (
        <div className="success-box">
        <h1>Success {props.student}</h1>
        <Link to={'/form'}>
            <button>Return Form</button>
        </Link>
        </div>
    )
}

export default Success