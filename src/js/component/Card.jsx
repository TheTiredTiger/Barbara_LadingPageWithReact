import React from "react";

function Card (props) {
    return(
        <div className="card mx-2" style={{width: "18rem;"}}>
            <img src="https://theguideliverpool.com/wp-content/uploads/2020/08/js1-wolf-cubs-ksp-aug20-202082020-2690.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
)};

export default Card;