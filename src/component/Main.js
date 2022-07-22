import { Routes,Route } from "react-router-dom";
import Books from "./Books";
import Articles from "./Articles";
import People from "./People";
import Home from "./Home";
import NOMatch from "./NoMatch";
import Article from "./Article";
import Support from "./Support";

function Main() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/people" element={<People />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/article/:slug" element={<Article />} component={Article} /> 
                <Route path="*" element={<NOMatch />} />
                <Route path="/support" element={<Support/>} />
            </Routes>
        </>
    )
}

export default Main;