import { Link } from "react-router-dom";
import "../App.css"


const Home = () => {
    return(
        <div className="home">
            <h1>Home</h1>
            <Link to={'/form'}>
                <button>See Form</button>
            </Link>
        </div>
    )
}

export default Home