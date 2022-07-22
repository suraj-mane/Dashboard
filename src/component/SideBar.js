import { Link } from "react-router-dom";

function SideBar(){
    return(
        <div className="text-start"  style={{width:"300px", backgroundColor:"#FFFFF7", height:"100vh"}}>
            <ul className="ps-0 bg-light">
                <li className="list-group-item p-4 list ">
                    <Link to="/">
                        <i className="lni lni-home me-3 fs-4 text-start text-dark"></i>
                        <span className="fs-5 text-dark">Home</span>
                    </Link>
                </li>
                <li className="list-group-item p-4 list">
                    <Link to="/articles">
                        <i className="lni lni-blogger me-3 fs-4 text-dark"></i>
                        <span className="fs-5 text-dark">Articles</span>
                    </Link>
                </li>
                <li className="list-group-item p-4 list">
                    <Link to="/people" >
                        <i className="lni lni-users me-3 fs-4 text-dark"></i>
                        <span className="fs-5 text-dark">People</span>
                    </Link>
                </li>
                <li className="list-group-item p-4 list">
                    <Link to="/books" >
                        <i className="lni lni-book me-3 fs-4 text-dark"></i>
                        <span className="fs-5 text-dark">Book</span>
                    </Link>
                </li>
                <li className="list-group-item p-4 list">
                    <Link to="/support">
                        <i className="lni lni-support me-3 fs-4 text-dark"></i>
                        <span className="fs-5 text-dark">Help & Support</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;