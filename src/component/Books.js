import books from "../data/books.json";

function Books() {
    return (
        <div className="w-100" style={{backgroundColor:"#edf1fe"}}>
            <div className="w-25 ms-5 mt-5">
                <input type="text" className="form-control" placeholder="Search" />
            </div>
            <div className="d-flex flex-wrap  mt-5">
                {
                    books.map(book => (
                        <div key={book.isbn} className="card m-3 py-5 px-5 " style={{width:"300px"}}>
                            <img src={book.image} style={{width:"200px", height:"200px"}} alt="books"/>
                            <h5 className="card-title fw-bold pt-4">{book.title}</h5>
                            <p className="py-3">Author:{book.author}</p>
                            <a href={book.website} className="btn btn-primary w-50 ms-5 text-light fw-bold">Buy Now</a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Books;