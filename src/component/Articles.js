import articles from "../data/articles.json";
import {Link} from "react-router-dom";


function Articles() {
    return (
        <div className="w-100" style={{backgroundColor:"#edf1fe"}}>
            <div className="w-25 ms-5 mt-5">
                <input type="text" className="form-control" placeholder="Search" />
            </div>
            <div className="ms-3">
                <ul>
                    {
                        articles.map(ele => (
                            <>
                            <Link key={ele.slug} to={`/article/${ele.slug}`}><li key={ele.slug} className="list-group-item py-3 fs-5">{ele.title}</li></Link>
                            <p>{ele.author}</p>
                            </>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Articles;