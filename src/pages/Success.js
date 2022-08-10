import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Success = () => {

    const params = useParams()

    return (
        <div className="success-box">
        <h1>Success {params.name} !</h1>
        <Link to={'/form'}>
            <button>Return Form</button>
        </Link>
        </div>
    )
}

export default Success