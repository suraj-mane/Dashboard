import {Link, useParams} from "react-router-dom";
import articles from "../data/articles.json";

function Article(props) {
    let {slug} = useParams();
    let article = articles.filter(ele => ele.slug === slug);
    return(
        <div className="w-100" style={{backgroundColor:"#edf1fe"}}>
            <Link to="/articles" className="m-5 fs-5"> 👈 Go Back To article</Link>
            <div>
                {
                    article.map(ele => (<h3 key={ele.slug}>The slug of the article is :::: {ele.slug}</h3>))
                }
            </div>
        </div>
    )
}

export default Article;