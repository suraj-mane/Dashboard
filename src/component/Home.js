import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="bg-secondry w-100" style={{backgroundColor:"#edf1fe"}}>
            <h4 className="ms-5 mt-3"> 🚀 Welcome to Homepage!</h4>
            <ul className="d-flex mt-5 ">
                <li className="list-group-item shadow-lg px-5 py-3 me-5 bg-body rounded">
                    <Link to="/articles">
                        <span className="fs-4 fw-bold text-dark">ARTICLES PAGE</span>
                    </Link>
                </li>
                <li className="list-group-item shadow-lg px-5 py-3 me-5  bg-body rounded">
                    <Link to="/books">
                        <span className="fs-4 fw-bold text-dark">BOOK PAGE</span>
                    </Link>
                </li>
                <li className="list-group-item shadow-lg px-5 py-3  bg-body rounded">
                    <Link to="/people">
                        <span className="fs-4 fw-bold text-dark">PEOPLE PAGE</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;