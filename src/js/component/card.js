import React from "react";

const Card = () => {
    return (
        <div className="card-group">
            <div className="card">
                <img src="https://i.postimg.cc/RhC1xBjx/171160225-1431019090579516-8441894107852651110-n.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>
            <div className="card">
                <img src="https://i.postimg.cc/W3wmy3Y7/240581826-239034671444483-4703377451581744606-n.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>
            <div className="card">
                <img src="https://i.postimg.cc/BbhTqz0L/197778649-127553156150703-2206992918918469626-n.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>
        </div>
    )
}

export default Card