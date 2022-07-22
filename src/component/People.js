import people from "../data/got.json";

function People() {
    let allPeople = people.reduce((acc,prv) => {
        acc = acc.concat(prv.people);
        return acc;
    },[]);
    return(
        <div className="w-100" style={{backgroundColor:"#edf1fe"}}>
            <div className="w-25 ms-5 mt-5">
                <input type="text" className="form-control" placeholder="Search" />
            </div>
            <div className="d-flex flex-wrap  mt-5">
                {
                   allPeople.map(ele => (
                    <div key={ele.name} className="card m-3" style={{width:"300px"}}>
                        <div className="card-body text-center">
                          <div className="d-flex align-items-center py-2 px-2">
                            <img src={ele.image} alt="got" className="rounded-circle border border-info border-3" style={{width:"60px", height:"60px"}} />
                            <h5 className="card-title ms-4 fw-bold">{ele.name}</h5>
                          </div>
                          <p className="card-text">{ele.description}</p>
                          <a className="fw-bold" href={ele.wikiLink}>More Info</a>
                        </div>
                    </div>
                   )) 
                }
            </div>
        </div>
    )
}

export default People;