import { NavLink } from "react-router-dom";

function Header(){
    return(
        <div className="d-flex p-1" style={{backgroundColor:"#a1caf1"}}>
            <i className="lni lni-dashboard fs-1 text-light ms-4"></i>
            <NavLink to="/">
                <h2 className="text-light ms-3">Dashboard</h2>
            </NavLink>
            <input type="text" className="form-control w-25 p-0 ms-5 border border-0 fw-bold" style={{backgroundColor:"#a1caf1"}}  placeholder="Search Documetation" />
        </div>
    )
}

export default Header;