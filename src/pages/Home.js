import { Link } from "react-router-dom";


const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <Link to={'/form'}>
                <button>See Form</button>
            </Link>
        </>
    )
}

export default Home