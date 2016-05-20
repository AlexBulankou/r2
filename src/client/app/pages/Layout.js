import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component{
    navigate(){
        this.props.history.push("/settings");
    }
    render(){      
        return(
            <div>
              <h2>Layout</h2>
              {this.props.children}
              <Link to="archives">
                <button className="btn btn-success">
                    archives
                </button>
               </Link>
              <Link to="settings">
                <button className="btn btn-danger">
                    settings
                </button>
               </Link>
               <button onClick={this.navigate.bind(this)}>settings</button>
            </div>
        );
    }
}