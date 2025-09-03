import React from "react";
import { Link } from "react-router-dom";
function Sidebar(){
    return(<div>
       <Link className="btn btn-success" to="/add">AddCustomer</Link>
    </div>)
}
export default Sidebar