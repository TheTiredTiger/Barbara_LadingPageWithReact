import React from "react";

function Jumbotron () {
  return (
    <div className="container py-4 rounded bg-light">
        <div className="container-fluid py-4">
            <h1 className="display-5 fw-bold">A warm welcome!</h1>
            <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi necessitatibus repellat sit ut. Ullam fugiat reiciendis saepe id. Magnam velit neque ipsam amet cum? Incidunt reiciendis labore enim exercitationem repellendus.</p>
            <button className="btn btn-primary btn-lg mt-2" type="button">Call to action</button>
        </div>
    </div>  
    );
}

export default Jumbotron;