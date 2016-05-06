import React from "react";
import Title from "./Header/Title";

export default class Layout extends React.Component{    
    render(){
        return(
            <div>
            <Title title={this.props.title}/>
            </div>
        );
    }
}